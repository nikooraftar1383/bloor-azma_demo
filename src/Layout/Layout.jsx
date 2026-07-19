import Footer from "../Templates/Footer"
import Menu from "../Templates/Menu"

let Layout = ({children})=>{

    return<>
    <Menu/>
    {children}
    <Footer/>
    </>
}
export default Layout