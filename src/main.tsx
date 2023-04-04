import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Router from "./router/index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Router /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
