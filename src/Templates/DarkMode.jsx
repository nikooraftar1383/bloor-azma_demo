import { FiSun } from "react-icons/fi"

let DarkMode =()=>{
return<>
<div className="w-[61%] mx-auto mt-20">
    <button className="btn py-2 px-4  border border-[#cacaca] rounded-full cursor-pointer">
    <div className="flex items-center gap-2">
        <span className=" text-[16px] font-bold  text-shadow-2xs shine-text">Deep Work</span>
        <FiSun/>
    </div>
</button>
</div>

</>

}
export default DarkMode