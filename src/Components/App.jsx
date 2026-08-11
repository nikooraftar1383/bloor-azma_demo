import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import ProductDetails from "../pages/ProductDetails";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import CategoryCard from "../Templates/CategoryCard";
import Article from "../pages/Article";
import ArticleDetail from "../pages/ArticleDetail";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<CategoryCard />} path="/products" />
            <Route element={<ProductDetails />} path="/products/:id" />
            <Route element={<ContactUs />} path="/ContactUs" />
            <Route element={<AboutUs />} path="/AboutUS" />
            <Route element={<Article />} path="/Article" />
            <Route element={<ArticleDetail />} path="/Article/:id" />
            <Route element={<NotFound />} path="*" />
            <Route element={<Login />} path="/login" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};
export default App;
