import ProductCards from "../Data/ProductCards";

let ProductCard = ({ activeIndex }) => {
  console.log(ProductCards);

  return (
    <>
      {ProductCards.map((elem, index) => {
        const offset = index - activeIndex;

        const x = offset * 330;

        const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.9 : 0.8;

        const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.7 : 0.4;

        const zIndex = offset === 0 ? 30 : Math.abs(offset) === 1 ? 20 : 10;

        return (
          <div
            className="
    p-7
    flex
    flex-col
    rounded-[40px]
    cursor-pointer
    border
    border-[#aab0bb]
    absolute
    left-1/2
    top-1/2
    justify-between
    shadow-lg
    duration-500
  "
  style={{
    transform: `
      translate(-50%, -50%)
      translateX(${x}px)
      scale(${scale})
    `,
    opacity,
    zIndex,
  }}
            key={index}
          >
            <span className="py-0.5 px-2 rounded-full text-[9px] text-[#aab0bb] bg-[#f4f6f9] font-bold mb-3 w-[2.8%]">
              Make
            </span>
            <h3 className="font-semibold text-[20px]">
              <span className="font-black text-[20px] text-[#33d399]">
                I can
              </span>
              <span>{elem.title}</span>
            </h3>
            <p className="text-[14px] mb-3 text-[#6b7280]">
              Starting at
              <span>{elem.price}</span>
            </p>
            <div className="flex items-center gap-2.5 mb-2.5">
              <img src={elem.image} alt="" className="rounded-full w-5 h-5 outline outline-[#6b7280]" />
              <span className="text-[#aab0bb]">
                {elem.author}.{elem.role}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ProductCard;
