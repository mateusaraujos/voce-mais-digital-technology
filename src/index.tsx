import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "./components/ThemeProvider";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider />
    </React.StrictMode>
  );
} else {
  console.error("Elemento com id 'root' não encontrado no documento.");
}
