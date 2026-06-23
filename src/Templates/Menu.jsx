import { NavLink } from "react-router-dom";
import "../css/BorderStyle.css";
let Menu = () => {
  return (
    <>
      <div className="w-[61%] mx-auto   py-6.5  ">
        <div className="fixed flex justify-between w-[61%] mx-auto  ">
          <div className="flex justify-center gap-2  items-center">
            <img
              src="/public/images/karospace.svg"
              alt=""
              className="w-42.25 h-11"
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
                <button className="px-6.5  cursor-pointer btn border border-[#e5e7eb] text-black text-[15px] font-bold leading-11 rounded-full hover:scale-110 transition ">
                  <NavLink />
                  Sign in
                </button>
              </li>
              <li>
                <button className="px-6.5  cursor-pointer btn bg-[#14b8a6] text-white text-[15px] font-bold leading-11 rounded-full hover:scale-110 transition">
                  <NavLink />
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
