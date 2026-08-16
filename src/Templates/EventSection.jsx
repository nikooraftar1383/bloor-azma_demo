import { useEffect, useState } from "react";
import "../css/BorderStyle.css";
import { motion, AnimatePresence } from "framer-motion";
import { image } from "framer-motion/client";


let EventSection = () => {
  let eventtext = [
    {
      title: "Meetups",
      image: "/images/eventsection/1728813523277specteroil (1).webp",
    },
    {
      title: "Workshops",
      image: "/public/images/eventsection/1728813523277specteroil.webp",
    },
    {
      title: "Demo Days",
      image: "/public/images/eventsection/1724134657631B-SulfideAE201.webp",
    },
    {
      title: "Founder Sessions",
      image: "/public/images/eventsection/1728813523277specteroil.webp",
    },
    {
      title: "Community Nights",
      image: "/public/images/eventsection/1728813523277specteroil.webp",
    },
    {
      title: "Creative Sessions",
      image: "/public/images/eventsection/1728813523277specteroil.webp",
    },
    {
      title: "Meetups",
      image: "/public/images/eventsection/1728813523277specteroil.webp",
    },
    {
      title: "Workshops",
      image: "/public/images/eventsection/1728813523277specteroil.webp",
    },
  ];

  const [activeImage, setActiveImage] = useState(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
  
}, [activeImage]);
  return (
    <>
    {/*first border*/}
      <div className="lg:w-[61%] mx-auto md:w-[90%] md:mt-31.75  border-t border-[0.25px]  border-slate-200/50 w-[90%] mt-35.25"></div>
      {/*متن پایه بالای متن گردشی */}
      <div className="lg:w-[61%] lg:mx-auto md:px-8 mt-1 px-8">
        <span className="text-[12px] text-[#9ca3af] scale-[0.999] ">
          EVENTS WE'VE HOSTED
        </span>
      </div>
      {/* متن گردشی و هاور عکس ها*/}
      <div className="flex overflow-hidden ">
        <div className="w-full flex  animate-marquee">
          {[...eventtext, ...eventtext].map((elem, index) => (
            <div
              className="px-2.5  flex gap-1.5 shrink-0 items-center justify-center "
              key={index}
            >
              <p
                className="cursor-pointer transition-colors lg:text-[92.16px] md:text-[48px] duration-200 hover:text-black text-[#9ca3af] font-bold text-[48px] "
                onMouseEnter={() => {
                  setActiveImage(elem.image);
                }}
                onMouseLeave={() => setActiveImage(null)}
                onMouseMove={(e) =>
                  setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                  })
                }
              >
                {elem.title}
              </p>
              <div className="h-full flex items-center  pb-10">
                <p className="text-[#dad7d7] md:text-[93px] text-[75px]   ">.</p>
              </div>
            </div>
          ))}
        </div>
        {/*هاور عکس ها*/}
     <AnimatePresence>
  {activeImage && (
    <motion.img
      src={activeImage}
      alt=""
      className="fixed pointer-events-none z-10 w-75 h-50 object-cover rounded-2xl"
      style={{
        left: mousePosition.x + 30,
        top: mousePosition.y - 220,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: -8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        rotate: 8,
      }}
      transition={{
        duration: 0.25,
      }}
    />
  )}
</AnimatePresence>
      </div>
    {/*last border*/}
      <div className="lg:w-[61%] mx-auto md:w-[90%] mt-0  border-t border-[0.25px]  border-slate-200/50 w-[90%]"></div>
    </>
  );
};
export default EventSection;
