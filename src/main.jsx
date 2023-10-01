import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Page2 from "./Page2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/dataCont";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Page2",
    element: <Page2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
