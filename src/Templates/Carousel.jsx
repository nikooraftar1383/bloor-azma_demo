import { useEffect, useState } from "react";
import ProductCard from "./ProdactCard";
import ProductCards from "../Data/ProductCards";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { px } from "framer-motion";

let Carousel = () => {
  const nextSlide = () => {
  setActiveIndex((prev) => (prev + 1) % ProductCards.length);
};

const prevSlide = () => {
  setActiveIndex((prev) =>
    prev === 0 ? ProductCards.length - 1 : prev - 1
  );
};
  const [activeIndex, setActiveIndex] = useState(2);
  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % ProductCards.length);
  }, 3500);

  return () => clearInterval(interval);
}, []);
  return (
    <>
    {/* متن بالای حلقه نمایش*/}
      <div className="flex flex-col bg-linear-to-t from-transparent to-[#fbfbfb] pt-10 ">
        <div className="lg:w-[61%] mx-auto flex flex-col justify-center md:px-8 md:items-start  items-center">
          <span className="text-[11px] text-[#aab0bb] pl-1 text-center md:text-start">Makes</span>
          <p className="md:text-[36px] font-extrabold mt-2 text-[24px] ">
            Show what you can do
          </p>
          <p className="md:text-[16px] text-[#6c7381] w-[63%] mt-2 text-[14px] text-center md:text-start">
            Turn what you do into opportunities. Share your Make, get
            discovered, and let the right people reach out.
          </p>
        </div>
        <div className=" h-75 overflow-hidden  flex items-center justify-center mt-10">
          <div className="flex relative w-full ">
            {ProductCards.map((elem, index) => {
              return (
                <ProductCard
                  activeIndex={activeIndex}
                  index={index}
                  elem={elem}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/*دکمه های نویگیت حلقه*/}
            <div className="flex mx-auto gap-1.5   rounded-xl md:w-[15%] lg:w-[8%] mb-20 justify-center">
              <button className="w-11 h-11 flex justify-center items-center rounded-xl bg-[#eff1f2] cursor-pointer border border-[#d9dcde] " onClick={prevSlide}>
                <FaArrowLeft size={15}  />
              </button>
              <button className="w-11 h-11 flex justify-center items-center rounded-xl bg-[#eff1f2] cursor-pointer border border-[#d9dcde] " onClick={nextSlide}>
                <FaArrowRight  size={15}/>
              </button>
            </div>
            
    </>
  );
};
export default Carousel;
