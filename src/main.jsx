import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/RouterProvider.jsx";
import ContextProviders from "./ContextProviders/ContextProviders.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <HelmetProvider>
    <ContextProviders>
        <RouterProvider router={router}></RouterProvider>
    </ContextProviders>
      </HelmetProvider>
  </StrictMode>
);
