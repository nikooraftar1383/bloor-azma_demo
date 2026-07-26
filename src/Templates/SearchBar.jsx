
import { CiSearch } from "react-icons/ci";

let SearchBar=({search,setsearch})=>{

    return<>
   
     <div className="w-[50%] border rounded-full px-3 py-1 border-[#90949c] flex justify-between gap-1.5 mt-8" >
    <input type="text" placeholder="search for product..." className="outline-none  transition focus:border-gray-400 font-fa"  onChange={(e) => setsearch(e.target.value)} value={search}/>
        <CiSearch size={22} className="hover:scale-110" />
    
    </div>
  
    </>
}
export default SearchBar;
