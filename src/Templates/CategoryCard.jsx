import { useState } from "react";
import Category from "../Data/Category";
import CategoryModal from "./CategoryModel";

let CategoryCard = () => {
  const [activeCategory, setActiveCategory] = useState(null); // دسته‌ای که پاپ‌آپش باز است
  const [activeProduct, setActiveProduct] = useState(null); // محصولی که صفحه جزئیاتش باز است

  // اگر محصولی برای مشاهده جزئیات انتخاب شده باشد
  if (activeProduct) {
    return (
      <ProductDetailsPage
        product={activeProduct}
        onBack={() => setActiveProduct(null)}
      />
    );
  }
  function hexToRgba(hex, alpha = 0.1) {
    const cleanHex = hex.replace("#", "");
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return (
    <>
      <div
className="min-h-screen
bg-white
py-30 
[background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
[background-size:22px_22px]"
>
  <div className="w-[40%] flex flex-col mx-auto gap-10">
        {Category.map((elem) => (
          <div
            className="flex flex-col rounded-2xl cursor-pointer border-2 border-[#f2f3f5] bg-white"
            key={elem.id}
            onClick={() => setActiveCategory(elem)}
          >
            <div
              className="flex h-[280px] rounded-t-2xl "
              style={{
                background: `linear-gradient(135deg, ${hexToRgba(elem.color, 0.2)} 0%, #ffffff 70%)`,
              }}
            >
              <img src={elem.image} alt="" className="w-full" />
            </div>
            <div className="flex p-4 justify-between">
              <div className="flex gap-2">
                <div
                  className="rounded-full w-4 h-4 mt-1.5 "
                  style={{ backgroundColor: elem.color }}
                ></div>
                <div className="flex flex-col">
                  <p className="text-[18px] font-extrabold">{elem.title}</p>
                  <span className="text-[#6b7280] text-[12px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
              <button
                className="py-1 px-3 h-[30px] rounded-full border-[#e4e5e8] border text-[11px] cursor-pointer "
                style={{
                  color: elem.color,
                  backgroundColor: hexToRgba(elem.color, 0.08),
                }}
              >
                see all
              </button>
            </div>
          </div>
        ))}
      </div>
</div>
      <CategoryModal
        hexToRgba={hexToRgba}
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
        onSelectProduct={(product) => {
          setActiveCategory(null); // بستن پاپ‌آپ
          setActiveProduct(product); // رفتن به صفحه جزئیات
        }}
      />
    </>
  );
};
export default CategoryCard;
