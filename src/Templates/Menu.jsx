import { Link, NavLink } from "react-router-dom";
import "../css/BorderStyle.css";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../Context/ModalContext";

let Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isModalOpen } = useContext(ModalContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((prev) => {
        if (prev) {
          // اگه الان scrolled هست، فقط وقتی برگرده false که خیلی بالا بره
          return window.scrollY > 30;
        } else {
          // اگه الان scrolled نیست، فقط وقتی true بشه که واقعا رد کنه از 51
          return window.scrollY > 51;
        }
      });
    };
     handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-[1px]" />

      <header
        className={`
          fixed top-0 left-0 w-full z-100
          transition-all duration-500
          ${isScrolled || isModalOpen ? "bg-white/20 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"}
        `}
      >
        <div className="w-[61%] mx-auto flex justify-between items-center">
          <div className="flex justify-center gap-2  items-center">
            <img
              src="/public/images/karospace.svg"
              alt=""
              className={` ${isScrolled || isModalOpen ? "w-30.5 h-8" : "w-42.25 h-11"}`}
            />
            <div className="flex rounded-full px-1.5 justify-center items-center gap-1 h-8 btn-border border hover:scale-110 transition py-0.5">
              <div className=" circle "></div>
              <span className="text-[12px]">Ask Kariva</span>
            </div>
          </div>
          <div className="  w-[55%] ">
            <ul className=" flex justify-between items-center ">
               <li >
                <NavLink to="/" className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]">Home</NavLink>
              </li>
              <li >
                <NavLink to="/products" className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]">Products</NavLink>
              </li>
             
              <li >
                <NavLink to="/ContactUs" className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]">ContactUs</NavLink>
                
              </li>
              
              <li>
                <button
                  className={` cursor-pointer btn border border-[#e5e7eb] bg-[#FAFAFA]  text-black  font-bold  rounded-full hover:scale-110  ${isScrolled || isModalOpen ? "text-[12px] px-5 py-2.5" : "leading-11 text-[15px] px-6.5 "}`}
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  className={`cursor-pointer btn bg-[#14b8a6] text-white  font-bold  rounded-full hover:scale-110 transition ${isScrolled || isModalOpen? "text-[12px] px-5 py-2.5" : "text-[15px] leading-11 px-6.5"}`}
                >
                  <NavLink />
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};


export default Menu;
