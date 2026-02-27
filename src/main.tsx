import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-EN8WY9NDEQ");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
