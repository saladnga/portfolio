import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReactGA from "react-ga4";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/space-grotesk";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactGA.initialize("G-EN8WY9NDEQ");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
