import { FaArrowRight } from "react-icons/fa"

let Titr =()=>{
return<>
<div className="w-[61%] mx-auto mt-4">
    <span className="font-black text-[52px]  ">Where work finds people</span>
    <div className="flex flex-col gap-1.5 mt-6">
        <p className="text-[#6B7280] text-[20px]">Showcase your work. Find collaborators. Get visibility.</p>
        <p className="text-[#6B7280] text-[20px] ">Turn what you make into real opportunities.</p>
    </div>
   <div className="flex gap-5 items-baseline">
     <button className="px-10.5 rounded-full bg-[#14b8a6] mt-6 py-4.5 hover:scale-110 transition">
        <div className="flex items-center gap-2">
            <span className="text-[18px] text-white font-bold">Join Karo Space</span>
            <FaArrowRight color="white" />
        </div>
    </button>
      <p className="text-[16px] text-[#6b7280]">Turn your work into opportunities.</p>
   </div>

</div>
</>
}
export default Titr