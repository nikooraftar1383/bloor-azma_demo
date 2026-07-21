
import { CiSearch } from "react-icons/ci";

let SearchBar=({search,setsearch})=>{

    return<>
   
     <div className="w-[50%] border rounded-full p-3 border-[#90949c] flex justify-start mt-10 gap-1.5 shadow-2xl" >
        <CiSearch size={22} className="hover:scale-110" />
    <input type="text" placeholder="search for product..." className="outline-none  transition focus:border-gray-400 font-fa" dir="rtl"  onChange={(e) => setsearch(e.target.value)} value={search}/>
    
    </div>
  
    </>
}
export default SearchBar;
