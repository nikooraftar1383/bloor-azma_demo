import SearchBar from "./SearchBar"

let ProductHero=({search,setsearch})=>{
return<>

<div className="from-white to-white  mt-10 flex justify-between py-18  via-[#c5c8d1] bg-linear-to-b" dir="rtl">
    <div className="w-[90%] mx-auto flex ">
        <div className="flex flex-col w-[70%]">
        <h1 className="text-[52px] font-black">Our Product</h1>
        <p className="text-[18px] text-[#6e7583]">High-quality medical equipment designed to  improve healthcare and save lives.</p>
        <div className="w-[70%] h-[0.5px] bg-gray-500 mt-2.5">   </div>
         <SearchBar search={search} setsearch={setsearch} />    
    </div>
   
    </div>
   
</div>

</>
}
export default ProductHero