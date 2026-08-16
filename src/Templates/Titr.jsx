import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

let Titr = () => {
  let [index, setindex] = useState(0);
  let [display, setdisplay] = useState("");
  let [delet, setdelet] = useState(false);
  //آرایه ای از متن ها برای تغیر در هیرو
  let text = ["gets discovered", "finds people", "creates opportunity"];
  useEffect(() => {
    let currenttext = text[index];
    let timeout = setTimeout(
      () => {
        if (!delet) {
          setdisplay(currenttext.slice(0, display.length + 1));
          if (display === currenttext) {
            setdelet(true);
          }
        } else {
          setdisplay(currenttext.slice(0, display.length - 1));
          if (display === "") {
            setdelet(false);
            setdisplay("");
            setindex((prev) => (prev + 1) % text.length);
          }
        }
      },
      delet ? 300 : 350,
    );
    return () => clearTimeout(timeout);
  }, [index, display, delet]);
  return (
    <>
      <div className="lg:w-[61%] lg:mx-auto mt-4 md:px-8 md:w-full px-8">
        {/* متن تعویضی در هیرو صفحه اصلی*/}
        <div className="w-full md:flex-row md:items-center flex-col flex items-start  ">
          <span className="font-black lg:text-[52px] me-2 md:text-[35px] text-[44px] ">
            Where work{" "}
          </span>
          <span className="font-black lg:text-[52px] md:text-[35px] text-[#7a39ee] cursor-auto text-[44px]">
            {display}
            <span className="bg-black h-10 text-[10px] animate-pulse mx-1">
              |
            </span>
          </span>
        </div>
        {/* توضیحات پایه در هیرو صفحه اصلی*/}
        <div className="flex flex-col gap-1.5 mt-6">
          <p className="text-[#6B7280] lg:text-[20px] md:text-[18px]">
            Showcase your work. Find collaborators. Get visibility.
          </p>
          <p className="text-[#6B7280] lg:text-[20px] md:text-[18px] ">
            Turn what you make into real opportunities.
          </p>
        </div>
        {/* دکمه در هیرو صفحه اصلی*/}
        <div className="flex gap-5 sm:items-baseline flex-col sm:flex-row">
          <button className="md:px-10.5 rounded-full bg-[#14b8a6] mt-6 md:py-4.5 px-9 py-3 hover:scale-110 transition">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-[18px] text-white md:font-bold font-semibold">
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
