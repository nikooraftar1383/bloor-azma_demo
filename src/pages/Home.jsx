import Boxtemplate from "../Templates/boxtemplate"
import Build from "../Templates/Build"
import Carousel from "../Templates/Carousel"
import EventSection from "../Templates/EventSection"
import Footer from "../Templates/Footer"
import HeroCards from "../Templates/HeroCards"
import HeroSection from "../Templates/HeroSection"
import WorldSection from "../Templates/WorldSection"

let Home =()=>{
    return<>
    <HeroSection/>
    <EventSection/>
    <WorldSection/>
    <Build/>
    <Carousel/>
    <Boxtemplate/>
    <HeroCards/>
    <Footer/>

    </>
}
export default Home