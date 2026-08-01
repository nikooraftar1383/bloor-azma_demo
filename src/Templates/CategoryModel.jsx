import { useContext, useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProductSkeleton from "./ProductSkeleton";
import { ModalContext } from "../Context/ModalContext";

function CategoryModal({ category, onClose, onSelectProduct, hexToRgba }) {
  if (!category) return null;
  let [products, setproducts] = useState(null);
  let [search, setsearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { setIsModalOpen } = useContext(ModalContext);

  console.log(category, products, search);
  const filteredProducts = (products ?? []).filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  let getdata = async () => {
    try {
      let res = await fetch("http://localhost:4000/products");
      if (res.status == 200) {
        let data = await res.json();
        let filtered = data.filter(
          (elem, index) => elem.category === category.category,
        );
        setproducts(filtered);
        setLoading(false);
      } else {
        console.log("erororor");
      }
    } catch (erorr) {
      console.log(erorr.message);
    }
  };
  useEffect(() => {
    setIsModalOpen(true);
    getdata();
    return () => {
      setIsModalOpen(false);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-4 top-6  "
        onClick={() => {
          setIsModalOpen(false);
          onClose();
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col p-4  "
        >
          {/* هدر پاپ‌آپ */}
          <div className="flex items-start justify-between p-5  h-[120px]">
            <button
              onClick={() => {
                setIsModalOpen(false);
                onClose();
              }}
              className="rounded-full p-2 hover:bg-gray-100 transition"
              aria-label="بستن"
            >
              <IoCloseCircleSharp size={20} color={category.color} />
            </button>
            <div className="flex gap-3">
              <div className="flex flex-col items-end">
                <h2 className="text-lg font-bold text-gray-900">
                  {category.title}
                </h2>

                <span className="text-[#6b72a1] text-[14px]">
                  {products?.length ?? 0} {category.title} founded
                </span>
                <div className=" my-2.5">
                  {" "}
                  <SearchBar
                    search={search}
                    setsearch={setsearch}
                    color={category.color}
                  />
                </div>
              </div>

              <div
                className="rounded-full w-4 h-4  me-19 mt-2"
                style={{ backgroundColor: category.color }}
              ></div>
            </div>
          </div>

          <div className="w-[58%] h-[1px] bg-[#d1d5db]  mx-auto mt-3 "> </div>
          {/* لیست محصولات دسته - قابل اسکرول */}
          <div className="overflow-y-auto p-5 custom-scrollbar">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <ProductSkeleton key={index} />
                ))
              : filteredProducts.map((elem) => (
                  <div
                    className="border-2 border-[#f2f3f5] rounded-2xl cursor-pointer flex p-2 w-[80%] mx-auto mt-2 justify-end transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,.08)] "
                    key={elem.id}
                  >
                    <Link
                      to={`/products/${elem.title}`}
                      className="flex gap-3  "
                    >
                      <div
                        className="flex flex-col justify-center px-2 "
                        dir="rtl"
                      >
                        <h1 className="text-[14px] font-extrabold font-fa ">
                          {elem.title}
                        </h1>
                        <span className="text-[#6b7280] text-[12px] mt-5">
                          {elem.short_desc.length > 120
                            ? `${elem.short_desc.slice(0, 120)}...`
                            : elem.short_desc}
                        </span>
                        <div className="flex w-full justify-end mt-2">
                          <button
                            className="py-1 px-3 h-7.5 rounded-full border-[#e4e5e8] border text-[11px] w-[18%] font-fa cursor-pointer"
                            style={{
                              color: category.color,
                              backgroundColor: hexToRgba(category.color, 0.08),
                            }}
                          >
                            مشاهده
                          </button>
                        </div>
                      </div>
                      <img
                        src={elem.image}
                        alt={elem.title}
                        className="w-25 h-25 rounded-xl"
                      />
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryModal;
