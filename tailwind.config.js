export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
      },
      fontFamily: {
        monoDisplay: ["'Major Mono Display'", "monospace"],
      },
    },
  },
};
