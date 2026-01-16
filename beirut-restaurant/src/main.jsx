import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * Entry point of the Beirut Restaurant application
 * - Mounts the React app to the DOM
 * - Uses React 18 createRoot API
 * - StrictMode helps catch bugs during development
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
