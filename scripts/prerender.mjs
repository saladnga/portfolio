// Snapshots the built SPA in a real headless browser and writes the fully-rendered
// HTML back to dist/index.html, so crawlers/link-preview bots see real content
// instead of an empty <div id="root">. This is prerendering, not SSR+hydration:
// main.tsx uses createRoot().render(), so a real browser still replaces this
// markup with a fresh client render on load.
import { preview } from "vite";
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const server = await preview({ preview: { port: 4173 } });
const url = server.resolvedUrls?.local[0];

if (!url) {
  await new Promise((res, rej) => server.httpServer.close((err) => (err ? rej(err) : res())));
  throw new Error("Could not resolve preview server URL");
}

// Vercel's build container is missing the shared libraries (libnspr4, etc.)
// that Playwright's own downloaded Chromium needs, so on Vercel we launch
// @sparticuz/chromium instead — a Chromium build compiled specifically to
// run inside serverless/Lambda-style containers. Locally and in CI (GitHub
// Actions' Ubuntu runner has the system deps via `playwright install --with-deps`)
// Playwright's own bundled Chromium works fine as-is.
const launchOptions = process.env.VERCEL
  ? await (async () => {
      const { default: sparticuzChromium } = await import("@sparticuz/chromium");
      return {
        executablePath: await sparticuzChromium.executablePath(),
        args: sparticuzChromium.args,
        headless: true,
      };
    })()
  : {};

const browser = await chromium.launch(launchOptions);
const page = await browser.newPage();

try {
  await page.goto(url, { waitUntil: "networkidle" });

  // Reveal.tsx uses Framer Motion's whileInView, which only fires once an
  // element's IntersectionObserver sees it cross the real viewport. Scroll
  // through the whole page first so every reveal (all `once: true`, so they
  // stay revealed) triggers before we snapshot the HTML — otherwise most
  // content is captured mid-animation at opacity: 0.
  await page.evaluate(async () => {
    const step = 400;
    const delay = 120;
    while (
      window.scrollY + window.innerHeight <
      document.documentElement.scrollHeight
    ) {
      window.scrollBy(0, step);
      await new Promise((r) => setTimeout(r, delay));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);

  const html = await page.content();

  const outPath = resolve("dist/index.html");
  writeFileSync(outPath, html);
  console.log(`Prerendered HTML written to ${outPath}`);
} finally {
  await browser.close();
  await new Promise((res, rej) => server.httpServer.close((err) => (err ? rej(err) : res())));
}
