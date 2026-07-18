import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../Layout/Layout"
import Products from "../pages/Products"

let App= ()=>{
    return<>
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Products/>} path="/products"/>
    </Routes>
    </Layout>
    </BrowserRouter>
    </>
}
export default App