import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"

let App= ()=>{
    return<>
    <BrowserRouter>
    <Routes>
        <Route element={<Home/>} path="/"/>
    </Routes>
    </BrowserRouter>
    </>
}
export default App