
import { CiSearch } from "react-icons/ci";

let SearchBar=({search,setsearch})=>{

    return<>
   
     <div className="w-[30%] border rounded-md p-3 border-[#90949c] flex justify-between mx-auto mt-10 ">
    <input type="text" placeholder="search for product..." className="outline-none  transition focus:border-gray-400"  onChange={(e) => setsearch(e.target.value)} value={search}/>
    <CiSearch size={22} />
    </div>
   
    </>
}
export default SearchBar;