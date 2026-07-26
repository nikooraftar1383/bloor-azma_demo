import { div } from "framer-motion/client";
import { collaborations } from "../Data/ContactusCard"
import { FiSend } from "react-icons/fi";
let ContactUsTemp = ()=>{
    // تابع کمکی برای تبدیل hex به rgba با شفافیت دلخواه
function hexToRgba(hex, alpha = 0.1) {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
return<>
<div
className="min-h-screen
bg-white
Pt-20
[background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
[background-size:22px_22px]"
>
    <div className="pt-40 mx-auto w-[33%] ">
        <div className="flex text-[45px] font-bold justify-center">
            <h1  >Let's Build </h1>
            <h1 className="text-[#14b8a6] ms-1">Together</h1>
        </div>
        <h4 className="text-center text-[#6f7683]" >We believe great things happen when the right people come together. Choose how you want to work with us.</h4>
    </div>
    <div className="w-[45%] mt-15 mx-auto">
<h2 className="text-[24px] font-bold ms-6">How we collaborate</h2>
</div>
<div className="w-[47%] mx-auto gap-5 flex flex-col mt-3 ">
    {collaborations.map((elem,index)=>(
    <div className="p-8 rounded-2xl cursor-pointer border-2 border-[#f2f3f5] flex gap-1.5 bg-white " key={elem.id}>
<div className="rounded-full w-4 h-[13.5px] mt-1.5"
style={{ backgroundColor: elem.color }} ></div>
<div className="flex flex-col">
    <h3 className="text-[18px] font-extrabold mb-2">{elem.title}</h3>
    <span className="text-[14px] text-[#6b72a0] ">{elem.description}</span>
    <div className="flex gap-3 mt-4 justify-start">
        {elem.tags.map((tag,index)=>(
            <div key={index} className="flex justify-center items-center overflow-hidden py-1 px-3 rounded-full border-[#e4e5e8] border" style={{ backgroundColor: hexToRgba(elem.color, 0.08) }} >
                <span className=" text-[11px] " 
            style={{color:elem.color}}>{tag}</span>
            </div>
        ))}
    </div>
</div>
</div>
))}
</div>
<div className="mt-12 mx-auto w-[47%] border-2 rounded-2xl border-[#f2f3f5] bg-white p-10 flex flex-col ">
<h2 className="text-[24px] font-extrabold">Tell us about yourself</h2>
<p className="text-[14px] mb-6 text-[#898e91]">Fill in the basics and we'll take it from there.</p>
<div className="flex items-center gap-5">
<input type="text" placeholder="Your name *"  className="outline-none py-3.5 px-4 bg-[#f3f4f6] rounded-xl w-[45%] border border-[#e3e1e1]  " required />
<input type="text" placeholder="Email address *" className="outline-none  py-3.5 px-4 bg-[#f3f4f6] rounded-xl w-[45%] border border-[#e3e1e1] " required />
</div>
<input type="text" placeholder="Company and project name" className="outline-none  py-3.5 px-4 bg-[#f3f4f6] rounded-xl w-[93%] border border-[#e3e1e1] mt-4 " />
<span className="my-5 text-[12px] text-center text-[#6b7280]">Select a collaboration type above to continue</span>
<input type="text"placeholder="What are your expectations? " className="outline-none  py-3.5 px-4 bg-[#f3f4f6] rounded-xl w-[93%] border border-[#e3e1e1] mt-4 h-32.5 placeholder:iyems-start" />
 <button className="px-7 rounded-full bg-[#14b8a6] mt-6 py-3.5  hover:scale-110 transition w-[30%] ms-[63%]">
          <div className="flex items-center gap-2">
             <FiSend color="white"  />
            <span className="text-[14px] text-white font-semibold leading-5">
              Submit Request
            </span>
           
          </div>
        </button>
</div>
</div>

</>
}
export default ContactUsTemp