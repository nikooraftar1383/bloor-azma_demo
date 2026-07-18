import { Link } from "react-router-dom";
let Footer = () => {
  return (
    <>
      <div className="w-17 h-17 flex justify-center items-center rounded-full  bg-[#eff1f2] cursor-pointer border border-[#d9dcde] mx-auto mt-5 ">
        <img src="/public/images/footer/Karo.svg" alt="" className="w-8" />
      </div>
      <div className="w-[29%] mx-auto flex items-center  mt-8  ">
        <ul className="flex gap-4 justify-between text-[14px] text-[#8f9090] w-full  ">
          <li className="hover:text-[#c8ced4]">
            <Link>Product</Link>
          </li>
          <li className="hover:text-[#c8ced4]">
            <Link>Community</Link>
          </li>
          <li className="hover:text-[#c8ced4]">
            <Link>Newsroom</Link>
          </li>
          <li className="hover:text-[#c8ced4]">
            <Link>Story</Link>
          </li>
          <li className="hover:text-[#c8ced4]">
            <Link>Contact</Link>
          </li>
          <li className="hover:text-[#c8ced4]">
            <Link>Careers</Link>
          </li>
        </ul>
      </div>
      <div className="w-[11%] flex mt-5 justify-evenly items-center mx-auto">
        <div className="w-10 h-10 rounded-full bg-[#eff1f2] cursor-pointer border border-[#d9dcde] items-center justify-center flex ">
          <img src="/public/images/footer/svgexport-12.svg" alt="" />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#eff1f2] cursor-pointer border border-[#d9dcde] items-center justify-center flex ">
          <img src="/public/images/footer/svgexport-13.svg" alt="" />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#eff1f2] cursor-pointer border border-[#d9dcde] items-center justify-center flex ">
          <img src="/public/images/footer/svgexport-14 (1).svg" alt="" />
        </div>
      </div>
      <div className="w-11  h-[0.5px] border-[#e1dfdf] border-t border-[0.25px] flex mx-auto mt-7 "></div>
      <div className="flex flex-col mx-auto text-[12px] text-[#b3b3b4] mt-2 w-[20%] mb-5 ">
        <span className="text-center">
          © 2026 Karo Studio. All rights reserved.
        </span>
        <div className="flex gap-1.5 items-center text-[10px] justify-between mt-2">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
          <span>Site Map</span>
        </div>
      </div>
    </>
  );
};
export default Footer;
