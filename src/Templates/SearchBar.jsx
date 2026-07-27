
import { CiSearch } from "react-icons/ci";

let SearchBar=({search,setsearch,color})=>{

    return<>
   
     <div className="w-[100%] border rounded-full px-2 py-1 border-[#b1b3b6] flex justify-between gap-1.5 placeholder:text-slate-400 " >
    <input type="text" placeholder="search for product..." className="outline-none  transition focus:border-gray-400 font-fa placeholder:text-[14px]"  onChange={(e) => setsearch(e.target.value)} value={search}/>
        <CiSearch size={22} color={color}  className="hover:scale-110" />
    
    </div>
  
    </>
}
export default SearchBar;
