import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

let Titr = () => {
  let [index, setindex] = useState(0);
  let [display, setdisplay] = useState("");
  let [delet, setdelet] = useState(false);

  let text = ["gets discovered", "finds people", "creates opportunity"];
  useEffect(() => {
   let currenttext=text[index]
   let timeout=setTimeout(()=>{
    if(!delet){
        setdisplay(currenttext.slice(0,display.length+1));
        if(display===currenttext){
             setdelet(true)
           
        }
    }
     else{
            setdisplay(currenttext.slice(0,display.length-1));
            if(display===""){
                setdelet(false)
                setdisplay("")
                setindex((prev)=>(prev + 1) % text.length)
            }
        }
       
        
   },delet?300:350);
   return ()=> clearTimeout(timeout)
  }, [index,display,delet]);
  return (
    <>
      <div className="w-[61%] mx-auto mt-4">
        <div className="w-full flex items-center">
    <span className="font-black text-[52px] me-2 ">
          Where work{" "}
          <span className="font-black text-[52px] text-[#7a39ee] cursor-auto ">
            {display}
          
          </span>
  

        </span>
              <span className="bg-black h-10 text-[10px] animate-pulse mx-1">|</span>
        </div>
        <div className="flex flex-col gap-1.5 mt-6">
          <p className="text-[#6B7280] text-[20px]">
            Showcase your work. Find collaborators. Get visibility.
          </p>
          <p className="text-[#6B7280] text-[20px] ">
            Turn what you make into real opportunities.
          </p>
        </div>
        <div className="flex gap-5 items-baseline">
          <button className="px-10.5 rounded-full bg-[#14b8a6] mt-6 py-4.5 hover:scale-110 transition">
            <div className="flex items-center gap-2">
              <span className="text-[18px] text-white font-bold">
                Join Karo Space
              </span>
              <FaArrowRight color="white" />
            </div>
          </button>
          <p className="text-[16px] text-[#6b7280]">
            Turn your work into opportunities.
          </p>
        </div>
      </div>
    </>
  );
};
export default Titr;
