
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

let ProductCart =({product})=>{
     
return<>
 <div className="rounded-xl border border-[#cacdd5] p-4  shadow-lg hover:border-[#14B8A6] bg-white cursor-pointer">
     <Link to={`/products/${product.title}`} > <img
        src={product.image}
        alt={product.title}
        className="w-full rounded-md h-58 hover:scale-105"
      />

      <h3 className="mt-4 font-semibold text-[16px] h-10 font-fa" dir="rtl">
         {product.title.length > 70
    ? `${product.title.slice(0, 70)}...`
    : product.title}
      </h3>

      <p className="mt-3 text-[13px] text-gray-500 h-20 font-fa" dir="rtl">
                 {product.short_desc.length > 170
    ? `${product.short_desc.slice(0, 170)}...`
    : product.short_desc}
      </p></Link>
      <Link>
     <div className="flex  items-center gap-2 " dir="rtl"> 
         <span className="text-blue-900 ">مشاهده جزئیات</span>
      <FaArrowLeft color="#1c398e" />
     </div>
      </Link>
    </div> 
</>
}
export default ProductCart