import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DoctorContextProvider from "./context/DoctorContext.jsx";

createRoot(document.getElementById("root")).render(
  <DoctorContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DoctorContextProvider>
);
