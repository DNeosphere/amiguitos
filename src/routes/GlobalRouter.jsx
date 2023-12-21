import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Search from "../pages/SearchPage";
import Navbar from "../components/Navbar";
import Conoceme from "../pages/Conoceme";

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
        <Route
          path="/amiguito/:id"
          element={
            <Layout>
              <Conoceme />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
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
