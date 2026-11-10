import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./components/Theory-pr/global.css";

import LocalStorage from "./components/localStorage/LocalStorage";
import UseEffect from "./components/useEffect/UseEffect";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UseEffect />
    <LocalStorage />
  </React.StrictMode>,
);
