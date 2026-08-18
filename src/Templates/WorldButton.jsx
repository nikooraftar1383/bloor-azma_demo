import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
let data = [
  {
    icon: "/public/images/button_icons/svgexport-4 (1).svg",
    title: "Show your work",
    description: "Connect with collaborators, creators, founders, and ",
  },
  {
    icon: "/public/images/button_icons/svgexport-5.svg",
    title: "find your people",
    description: "Turn visibillity into feedback , collabration ",
  },
  {
    icon: "/public/images/button_icons/svgexport-6.svg",
    title: "Create opportunities",
    description: "document your jorney",
  },
  {
    icon: "/public/images/button_icons/svgexport-7.svg",
    title: "share your progress",
    description: "share what you make and let other",
  },
];
let WorldButton = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const currentText = data[activeIndex].description;

    if (display.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplay(currentText.slice(0, display.length + 1));
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % data.length);
        setDisplay("");
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [display, activeIndex]);
  return (
    <>
      <div className="group relative flex">
        {data.map((elem, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            key={index}
            className={`w-12 h-12 rounded-2xl bg-[#f9fafb] border border-[#b8bcc6] shadow-lg transition-all duration-500 flex justify-center items-center cursor-pointer group-hover:-translate-2 group-hover:rotate-0 ${
              index === 0
                ? "-rotate-6 group-hover:-ml-1 z-7  "
                : index === 1
                  ? "-rotate-3 -ml-2  group-hover:ml-1  z-8  "
                  : index === 2
                    ? " rotate-3 -ml-2 group-hover:ml-1 z-9  "
                    : "rotate-6 -ml-2 group-hover:ml-1 z-7 "
            },
                   ${
                     activeIndex === index
                       ? "bg-white border-black scale-110 z-50"
                       : "bg-[#f9fafb] border-[#b8bcc6]"
                   }`}
          >
            <img src={elem.icon} alt="" className="w-5 h-5" />
          </button>
        ))}
      </div>
      <div className="flex flex-col justify-center mt-5 gap-4">
        <h3 className="font-bold text-[20px] transition-opacity duration-300 ">
          {data[activeIndex].title}
        </h3>
        <p className="text-[14px] text-[#9f9f9f] transition-opacity duration-300 h-[30px] ">
          {display}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-6">
        {data.map((_, index) => (
          <div
            key={index}
            className={`
        h-1 rounded-full transition-all duration-500 ease-out
        ${activeIndex === index ? "w-8 bg-black" : "w-2 bg-[#d1d5db]"}
      `}
          />
        ))}
      </div>
      <div className="flex gap-5 md:items-baseline flex-col md:flex-row">
        <button className="px-7 rounded-full bg-[#14b8a6] mt-6 py-3.5  hover:scale-110 transition">
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-white font-semibold leading-5">
              Start your journey
            </span>
            <FaArrowRight color="white" />
          </div>
        </button>
        <p className="text-[12px] text-[#6b7280]">
          Turn your work into opportunities.
        </p>
      </div>
    </>
  );
};
export default WorldButton;
