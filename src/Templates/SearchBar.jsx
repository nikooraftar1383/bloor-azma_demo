
import { CiSearch } from "react-icons/ci";

let SearchBar=({search,setsearch})=>{

    return<>
   
     <div className="w-[30%] border rounded-full p-3 border-[#90949c] flex justify-end mx-auto mt-10 gap-1.5 shadow-2xl">
    <input type="text" placeholder="search for product..." className="outline-none  transition focus:border-gray-400 font-fa" dir="rtl"  onChange={(e) => setsearch(e.target.value)} value={search}/>
    <CiSearch size={22} className="hover:scale-110" />
    </div>
   <SearchBar/>
    </>
}
export default SearchBar;