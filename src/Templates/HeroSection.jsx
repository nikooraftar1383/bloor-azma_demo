import DarkMode from "./DarkMode";
import Menu from "./Menu";
import ParticleBackground from "./ParticleBackground";
import Titr from "./Titr";

let HeroSection = () => {
  return (
    <>
      <div >
        <ParticleBackground />
        <Menu />
        <DarkMode />
        <Titr />
      </div>
    </>
  );
};
export default HeroSection;
