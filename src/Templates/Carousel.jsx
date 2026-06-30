import { useState } from "react";
import ProductCard from "./ProdactCard"

let Carousel =()=>{
    const [activeIndex, setActiveIndex] = useState(2);
    return<>
    <div className="flex flex-col bg-linear-to-t from-transparent to-[#fbfbfb] pt-10">
        <div className="w-[61%] mx-auto flex flex-col justify-center">
        <span className="text-[11px] text-[#aab0bb] pl-1">Makes</span>
        <p className="text-[36px] font-extrabold mt-2">Show what you can do</p>
        <p className="text-[16px] text-[#6c7381] w-[63%] mt-2">Turn what you do into opportunities. Share your Make, get discovered, and let the right people reach out.</p>
    </div>
    <div className="relative h-75 overflow-hidden  flex items-center justify-center mt-5">
        <div className="flex relative w-full ">
         <ProductCard activeIndex={activeIndex}/>
    </div>
    </div>
    
    </div>
   
    </>
}
export default Carousel