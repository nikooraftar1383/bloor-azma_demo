import { useState } from "react";
import "../css/BorderStyle.css";
import { motion, AnimatePresence } from "framer-motion";
import { image } from "framer-motion/client";

let EventSection = () => {
  let eventtext = [
    {
      title: "Meetups",
      image: "/public/images/eventsection/1724134657631B-SulfideAE201.webp",
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
  return (
    <>
      <div className="w-[61%] mx-auto mt-31.75  border-t border-[0.25px]  border-slate-200/50 "></div>
      <div className="w-[61%] mx-auto mt-2">
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
                  console.log(
                    activeImage,
                   elem.image,
                    index,
                  );
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
      </div>
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed pointer-events-none z-50"
            animate={{
              x: mousePosition.x + 30,
              y: mousePosition.y - 200,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
          >
            <motion.img
              src={activeImage}
              alt=""
              className="w-80 h-120 object-cover rounded-2xl shadow-2xl"
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotate: 5,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-[61%] mx-auto mt-0  border-t border-[0.25px]  border-slate-200/50 "></div>
    </>
  );
};
export default EventSection;
