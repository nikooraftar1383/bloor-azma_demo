import { motion } from "framer-motion";
import ProductCards from "../Data/ProductCards";
let ProductCard = ({ index, activeIndex, elem }) => {
  let offset = index - activeIndex;
  const isActive = offset === 0;
  const total = ProductCards.length;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  const x = offset * 250;

  const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.8 : 0.78;

  const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 1 : 0.8;
  const rotate = offset * 2.3;

  const zIndex = offset === 0 ? 30 : offset === 1 || offset === -1 ? 20 : 10;
  return (
    <>
      <motion.div
        className={`
    absolute
    left-1/2
    top-1/2
    pe-25
    p-10
    pb-2.5
    w-[25%]
    flex
    flex-col
    rounded-[25px]
    cursor-pointer
    border
    justify-between
    shadow-lg
    
  ${
    isActive
      ? "bg-[#1b1b1b] border-[#1b1b1b] text-white"
      : "bg-white border-[#aab0bb] text-black"
  }`}
        initial={false}
        animate={{
          x,
          scale,
          opacity,
          rotate,
          zIndex,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="flex">
          <span
            className={`
    py-1
    px-3
    rounded-full
    text-[10px]
    font-bold
    w-fit
    transition-all
    duration-500

    ${
      isActive
        ? "bg-white/15 text-white border border-white/20"
        : "bg-[#f4f6f9] text-[#7b8794]"
    }
  `}
          >
            Make
          </span>
        </div>
        <h3 className="font-semibold text-[20px] gap-1.5 flex mb-3">
          <span className="font-black text-[20px] text-[#33d399]">I can</span>
          <span>{elem.title}</span>
        </h3>
        <p className="text-[14px] mb-6.5 text-[#6b7280] font-bold ">
          Starting at
          <span className="ms-1.5">
            {elem.price}
          </span>
        </p>
        <div className="flex items-center gap-2.5 mb-2.5">
          <img
            src={elem.image}
            alt=""
            className="rounded-full w-5 h-5 outline outline-[#6b7280]"
          />
          <div className="flex gap-1.5 items-center text-[#aab0bb] text-[12px]">
            <span>{elem.author}</span>
            <span className="pb-1">.</span>
            <span>{elem.role}</span>
          </div>
        </div>
        <div className="flex  gap-2 mt-3 ">
          <div className="flex">
            <span className="py-0.5 px-2 rounded-full text-[9px] font-bold text-center mb-2 text-[#33d399] bg-[#90ecca90]">
              AVAILABLE NOW
            </span>
          </div>
          <div className="flex">
            <span
              className={`
    py-0.5
    px-2
    rounded-full
    text-[9px]
    font-bold
    w-fit
    transition-all
    duration-500
                mb-2
    ${
      isActive
        ? "bg-white/15 text-white border border-white/20"
        : "bg-[#f4f6f9] text-[#7b8794]"
    }
  `}
            >
              OPEN FOR COLLOBRATION
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default ProductCard;
