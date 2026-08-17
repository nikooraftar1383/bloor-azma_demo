import WorldButton from "./WorldButton"

let WorldSection =()=>{
return<>
{/*متن پایه*/}
 <div className=" lg:w-[61%] lg:mx-auto mt-1 flex md:justify-start sm:justify-center md:px-8 px-8 ">
        <span className="md:text-[15px] text-[#9ca3af] scale-[0.999] font-medium text-[11px] ">
          From Work To Opportunity 
        </span>
      </div>
  {/*متن بالای دکمه ها*/}    
<div className="lg:px-[20.5%] pb-10 mx-auto mt-2 flex justify-between bg-linear-to-b from-transparent to-[#fbfbfb]">
<div className="xl:w-[60%] flex flex-col md:px-8 items-center md:items-start">
<span className="md:text-[36px] font-black mb-4 text-[24px]">How opportunities happen</span>
<p className="text-[16px] text-[#999ea7] md:w-[75%] w-[85%] text-center md:text-start ">Share your work, build visibility, connect with the right people, and create opportunities through every step of the journey.</p>
<div className="flex mt-5 justify-center pl-1 flex-col items-center md:items-start ">
    <WorldButton/>
</div>
</div>
{/*جایگاه عکس 3 بعدی دستگاه */}
</div>

</>
}
export default WorldSection