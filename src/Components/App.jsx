import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../Layout/Layout"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"

let App= ()=>{
    return<>
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Products/>} path="/products"/>
        <Route element={<ProductDetails/>} path="/products/:id"/>
    </Routes>
    </Layout>
    </BrowserRouter>
    </>
}
export default App