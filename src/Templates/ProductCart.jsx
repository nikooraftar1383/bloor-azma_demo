
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

let ProductCart =({product})=>{
  
return<>
 <Link to={`/products/${product.title}`}>
 <div className="
    p-8
    flex
    flex-col
    rounded-[25px]
    cursor-pointer
    border
    border-[#f2f3f5]
    justify-between
    shadow-lg
    relative
    bg-white  
    ">
      <img
        src={product.image}
        alt={product.title}
        className="  rounded-2xl absolute w-40 h-30 top-0 right-0 -translate-y-20  hover:scale-110"
      />

      <h3 className="mt-4 font-semibold text-[16px] h-10 font-fa" dir="rtl">
            {
  product.title.length > 85
    ? `${product.title.slice(0, 85)}...`
    : product.title
}
      </h3>

      <p className="mt-3 text-[13px] text-gray-500 h-20 font-fa" dir="rtl">
      {
  product.short_desc.length > 200
    ? `${product.short_desc.slice(0, 200)}...`
    : product.short_desc
}
      </p>
      <Link>
     <div className="flex  items-center gap-2 " dir="rtl"> 
         
      <FaArrowLeft color="#1C398E" />
      <span className="text-blue-900 ">مشاهده جزئیات</span>
     </div>
      </Link>
    </div> 
 </Link>
</>
}
export default ProductCart
