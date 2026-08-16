import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      className="relative mt-24 overflow-hidden border-t border-line px-5.5 pb-16 pt-16 md:px-16 md:pb-18 md:pt-21 snap-start scroll-mt-20"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6">
        <span className="border-r border-faint" />
        <span className="border-r border-faint" />
        <span className="border-r border-faint" />
        <span className="border-r border-faint" />
        <span className="border-r border-faint" />
        <span />
      </div>

      <div className="relative grid items-start gap-12 md:grid-cols-[1fr_380px] md:gap-20">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blip" />
            07 — Get in touch
          </div>
          <h2 className="mt-6.5 max-w-[13ch] text-[40px] leading-[0.96] tracking-[-0.045em] md:text-[88px] md:leading-[0.92] md:tracking-[-0.05em]">
            {profile.contactHeadline.pre}
            <em className="font-normal italic text-accent">
              {profile.contactHeadline.accent}
            </em>
            {profile.contactHeadline.post}
          </h2>
          <p className="mt-7 max-w-[46ch] text-lg font-light text-dim md:mt-8 md:text-xl">
            {profile.contactBlurb}
          </p>
          <a
            href={`mailto:${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8.5 inline-block border-b-2 border-accent text-[28px] font-medium tracking-tight text-foreground transition-colors hover:text-accent md:text-[44px]"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex flex-col gap-2.5 md:pt-13">
          {profile.socials.map((social) => (
            <a
              key={social.link}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-sm border border-line px-5 py-4.5
font-mono text-xs uppercase tracking-[0.08em] text-foreground transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent"
            >
              <span className="flex items-center gap-2">
                {social.icon?.map((Icon, i) => (
                  <Icon key={i} className="h-4 w-4" />
                ))}
                {social.username}
              </span>
              <span>↗</span>
            </a>
          ))}
          <div
            className="mt-3.5 rounded-sm border border-line px-5 py-4 font-mono text-[11px]
  leading-[1.7] text-dim"
          >
            FOR RECRUITERS
            <br />
            <span className="text-foreground">
              {profile.recruiterNote.role}
            </span>
            <br />
            {profile.recruiterNote.focus}
          </div>
        </div>
      </div>
    </section>
  );
}
