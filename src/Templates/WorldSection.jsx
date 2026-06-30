import WorldButton from "./WorldButton"

let WorldSection =()=>{
return<>
 <div className="w-[61%] mx-auto mt-1 ">
        <span className="text-[12px] text-[#9ca3af] scale-[0.999] font-medium ">
          From Work To Opportunity 
        </span>
      </div>
<div className="px-[20.5%] pb-10 mx-auto mt-2 flex justify-between bg-linear-to-b from-transparent to-[#fbfbfb]">
<div className="w-[60%] flex flex-col ">
<span className="text-[36px] font-black mb-4">How opportunities happen</span>
<p className="text-[16px] text-[#999ea7]">Share your work, build visibility, connect with the right people, and create opportunities through every step of the journey.</p>
<div className="flex mt-5 justify-center pl-1 flex-col ">
    <WorldButton/>
</div>
</div>
</div>

</>
}
export default WorldSection