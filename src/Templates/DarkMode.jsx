import { useState } from "react";
import { FiSun, FiSunset } from "react-icons/fi";

let DarkMode = () => {
 let [DarkMood, SetDarkMood] = useState(true);
  return (
    <>
      <div className="w-[61%] mx-auto mt-38">
        <button className="btn py-2 px-4  border border-[#cacaca] rounded-full cursor-pointer" onClick={()=>SetDarkMood(!DarkMood)}> 
          <div className="flex items-center gap-2">
            {DarkMood ? <FiSun /> : <FiSunset />}
            <span className=" text-[16px] font-bold  text-shadow-2xs shine-text">
              Deep Work
            </span>
            
          </div>
        </button>
      </div>
    </>
  );
};
export default DarkMode;
