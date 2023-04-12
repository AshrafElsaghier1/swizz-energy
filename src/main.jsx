import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { MouseContextProvider } from "custom-pointer-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ParallaxProvider>
        <MouseContextProvider>
          <App />
        </MouseContextProvider>
      </ParallaxProvider>
    </HashRouter>
  </React.StrictMode>
);
