import React from "react";

import ReactDOM from "react-dom/client";
import "@fontsource/poppins";
import GlobalRouter from "./routes/GlobalRouter.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalRouter></GlobalRouter>
    <Footer />
  </React.StrictMode>
);
