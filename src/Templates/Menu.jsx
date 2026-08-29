import { Link, NavLink } from "react-router-dom";
import "../css/BorderStyle.css";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../Context/ModalContext";
import { IoIosContact } from "react-icons/io";
import { GrArticle } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

let Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isModalOpen } = useContext(ModalContext);
  const [ismoreopen, setismoreopen] = useState(false);
  const [ismobileopen, setismobileopen] = useState(false);

  useEffect(() => {
    if (ismobileopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [ismobileopen]);
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
        <div className="lg:w-[61%] lg:mx-auto flex justify-between items-center sm:w-full sm:px-8 px-8">
          {/* لوگو */}
          <div className="flex justify-center gap-2 items-center">
            <img
              src="/images/karospace.svg"
              alt=""
              className={`${isScrolled || isModalOpen ? "w-30.5 h-8" : "w-42.25 h-11"}`}
            />
            <div className="flex rounded-full px-1.5 justify-center items-center gap-1 h-8 btn-border border hover:scale-110 transition py-0.5">
              <div className="circle"></div>
              <span className="text-[12px]">Ask Kariva</span>
            </div>
          </div>

          {/* منو دسکتاپ */}
          <div className="hidden lg:block lg:w-[55%]">
            <ul className="flex justify-between items-center">
              <li>
                <NavLink
                  to="/"
                  className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
                >
                  Products
                </NavLink>
              </li>

              <li
                onMouseEnter={() => setismoreopen(true)}
                onMouseLeave={() => setismoreopen(false)}
                className="relative"
              >
                <span className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]">
                  more
                </span>
                {ismoreopen && (
                  <div className="absolute top-full left-0 rounded-2xl bg-white px-6 py-3 shadow-x border border-[#e5e7eb]">
                    <ul className="flex flex-col gap-2">
                      <li className="flex gap-2 items-center">
                        <FaPhone color="rgb(164,167,172)" />
                        <NavLink
                          to="/ContactUs"
                          className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
                        >
                          ContactUs
                        </NavLink>
                      </li>
                      <div className="w-[50%]"></div>
                      <li className="flex gap-2 items-center">
                        <GrArticle color="rgb(164,167,172)" />
                        <NavLink
                          to="/Article"
                          className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
                        >
                          Article
                        </NavLink>
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoIosContact color="rgb(164,167,172)" />
                        <NavLink
                          to="/AboutUS"
                          className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
                        >
                          AboutUS
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/login"
                  className={`cursor-pointer inline-flex items-center justify-center border border-[#e5e7eb] text-black bg-[#FAFAFA] rounded-full transition-transform font-bold duration-300 hover:scale-105 ${isScrolled || isModalOpen ? "text-[12px] px-5 py-2.5" : "leading-11 text-[15px] xl:px-6 lg:px-3"}`}
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={`cursor-pointer inline-flex items-center justify-center border border-[#e5e7eb] bg-[#14b8a6] text-white rounded-full transition-transform font-bold duration-300 hover:scale-105 ${isScrolled || isModalOpen ? "text-[12px] px-5 py-2.5" : "leading-11 text-[15px] xl:px-6 lg:px-3"}`}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          {/* دکمه همبرگر */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#e5e7eb]"
            onClick={() => setismobileopen(true)}
          >
            <MdOutlineMenu />
          </button>
        </div>
      </header>

      {/* پنل موبایل — حالا بیرون از header و بیرون از backdrop-blur است */}
      <div
        onClick={() => setismobileopen(false)}
        className={`
    fixed inset-0 bg-black/40 z-[105]
    transition-opacity duration-200
    ${ismobileopen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
      />
      <div
        className={`
      fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[110] p-6
      transition-transform duration-200
      ${ismobileopen ? "translate-x-0" : "translate-x-full"}
    `}
      >
        <button
          onClick={() => setismobileopen(false)}
          className="p-2 rounded-full border border-[#d52f2c]"
        >
          <RxCross2 color="#d52f2c" />
        </button>
        <ul className="flex flex-col gap-3 mt-4">
          <li>
            <NavLink
              to="/"
              className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Article"
              className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
            >
              Article
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ContactUs"
              className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
            >
              ContactUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AboutUS"
              className="py-3 px-2 font-semibold text-[rgb(164,167,172)] hover:text-black cursor-pointer text-[14px]"
            >
              AboutUS
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
