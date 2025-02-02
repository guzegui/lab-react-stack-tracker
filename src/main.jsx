// src/main.jsx
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);