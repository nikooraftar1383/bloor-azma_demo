import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../Layout/Layout"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"
import AboutUs from "../pages/AboutUs"
import ContactUs from "../pages/ContactUs"



let App= ()=>{
    return<>
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Products/>} path="/products"/>
        <Route element={<ProductDetails/>} path="/products/:id"/>
        <Route element={<AboutUs/>} path="/AboutUs"/>
        <Route element={<ContactUs/>} path="/ContactUs"/>
    </Routes>
    </Layout>
    </BrowserRouter>
    </>
}
export default App