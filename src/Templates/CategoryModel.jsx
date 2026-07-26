import { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

function CategoryModal({ category, onClose, onSelectProduct }) {
  if (!category) return null;
  let [products, setproducts] = useState(null);
  console.log(category, products);


  let getdata = async () => {
    try {
      let res = await fetch("http://localhost:4000/products");
      if (res.status == 200) {
        let data = await res.json();
        let filtered = data.filter(
          (elem) => elem.category === category.category,
        );
        setproducts(filtered);
      } else {
        console.log("erororor");
      }
    } catch (erorr) {
      console.log(erorr.message);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-4 top-6  "
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col p-4  "
        >
          {/* هدر پاپ‌آپ */}
          <div className="flex items-center justify-between p-5  ">
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100 transition"
              aria-label="بستن"
            >
              <IoCloseCircleSharp size={18} color={category.color} />
            </button>
            <div className="flex gap-3">
              <h2 className="text-lg font-bold text-gray-900">
                {category.title}
              </h2>

              <div
                className="rounded-full w-4 h-4 mt-1.5 me-19"
                style={{ backgroundColor: category.color }}
              ></div>
            </div>
          </div>
             <div className="w-[70%] h-[0.5px] bg-[#d1d5db]  mx-auto mb-4">   </div>
          {/* لیست محصولات دسته - قابل اسکرول */}
          {products &&
            products.map((elem) => (
              <div className="border-2 border-[#f2f3f5] rounded-2xl cursor-pointer flex p-2 w-[80%] mx-auto mt-2 justify-end gap-3 ">
                <div className="flex flex-col justify-center" dir="rtl">
                  <h1 className="text-[14px] font-extrabold font-fa ">
                    {elem.title}
                  </h1>
                  <span className="text-[#6b7280] text-[12px] mt-5">
                    {elem.short_desc}
                  </span>
                </div>
                <img
                  src={elem.image}
                  alt={elem.title}
                  className="w-[120px] h-[120px] rounded-xl"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default CategoryModal;
