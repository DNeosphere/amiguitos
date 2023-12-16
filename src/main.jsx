import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx";
import "@fontsource/poppins";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
