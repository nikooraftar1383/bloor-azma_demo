import { NavLink } from "react-router-dom";
import "../css/BorderStyle.css";
import { useEffect, useState } from "react";
let Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`   ${isScrolled ? " w-full  " : "w-[61%] mx-auto py-6.5  "}`}
      >
        <header
          className={`
    fixed
    top-0
    left-0
    w-full
    z-100
    transition-all
    duration-500
    ${isScrolled ? "bg-white/60 backdrop-blur-xl shadow-md py-3" : "bg-transparent py-6"}
  `}
        >
          <div className="w-[61%] mx-auto flex justify-between items-center">
            <div className="flex justify-center gap-2  items-center">
              <img
                src="/public/images/karospace.svg"
                alt=""
                className={` ${isScrolled ? "w-30.5 h-8" : "w-42.25 h-11"}`}
              />
              <div className="flex rounded-full px-1.5 justify-center items-center gap-1 h-8 btn-border border hover:scale-110 transition py-0.5">
                <div className=" circle "></div>
                <span className="text-[12px]">Ask Kariva</span>
              </div>
            </div>
            <div className="  w-[55%] ">
              <ul className=" flex justify-between items-center ">
                <li className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]">
                  <NavLink />
                  Product
                </li>
                <li className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]">
                  <NavLink />
                  Community
                </li>
                <li className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]">
                  <NavLink />
                  Partnership
                </li>
                <li>
                  <button className={` cursor-pointer btn border border-[#e5e7eb] text-black  font-bold  rounded-full hover:scale-110 transition ${isScrolled?"text-[12px] px-5 py-2.5":"leading-11 text-[15px] px-6.5 "}`}>
                    <NavLink />
                    Sign in
                  </button>
                </li>
                <li>
                  <button className={`cursor-pointer btn bg-[#14b8a6] text-white  font-bold  rounded-full hover:scale-110 transition ${isScrolled?"text-[12px] px-5 py-2.5":"text-[15px] leading-11 px-6.5"}`}>
                    <NavLink />
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Menu;
