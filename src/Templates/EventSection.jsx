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
      <div className="w-[61%] mx-auto mt-31.75  border-t border-[0.25px]  border-slate-200/50 "></div>
      <div className="w-[61%] mx-auto mt-1">
        <span className="text-[12px] text-[#9ca3af] scale-[0.999] ">
          EVENTS WE'VE HOSTED
        </span>
      </div>
      <div className="flex overflow-hidden ">
        <div className="w-full flex  animate-marquee">
          {[...eventtext, ...eventtext].map((elem, index) => (
            <div
              className="px-2.5  flex gap-1.5 shrink-0 items-center justify-center "
              key={index}
            >
              <p
                className="cursor-pointer transition-colors text-[92.16px] duration-200 hover:text-black text-[#9ca3af] font-bold "
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
                <p className="text-[#dad7d7] text-[93px]   ">.</p>
              </div>
            </div>
          ))}
        </div>
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
    
      <div className="w-[61%] mx-auto mt-0  border-t border-[0.25px]  border-slate-200/50 "></div>
    </>
  );
};
export default EventSection;
