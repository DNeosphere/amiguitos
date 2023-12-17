import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Navbar from "../components/Navbar";

function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/buscar"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default GlobalRouter;
