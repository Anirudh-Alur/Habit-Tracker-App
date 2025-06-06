// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main App component

// IMPORTANT: We are NOT importing './index.css' here.
// All global styling (like 'body' styles) will be handled in 'App.css'.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
