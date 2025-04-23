import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Routes/Routes.jsx";

import LawyerDataProvider from "./Context/LawyerDataProvider/LawyerDataProvider.jsx";
import LoaderProvider from "./Context/LoaderProvider/LoaderProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <LawyerDataProvider>
        <RouterProvider router={router} />
      </LawyerDataProvider>
    </LoaderProvider>
  </StrictMode>
);
