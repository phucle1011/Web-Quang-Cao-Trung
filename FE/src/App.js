//--------------------CLIENT--------------------
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ClientLayout from "./layouts/ClientLayouts";
import Home from "./pages/client/Home";
import Product from "./pages/client/Product";
import AboutUs from "./pages/client/About-us";
import Blog from "./pages/client/Blog";
import Contact from "./pages/client/Contact";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;