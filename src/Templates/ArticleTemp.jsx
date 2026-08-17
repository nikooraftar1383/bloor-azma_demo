import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

let ArticleTemp = () => {
  let [article, setarticle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const totalPages = Math.ceil(article.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  const currentArticles = article.slice(startIndex, endIndex);
  const palette = [
    "#14b8a6",
    "#3b82f6",
    "#8b5cf6",
    "#EC4899",
    "#f59e0b",
    "#9f0ea1",
  ];
  let getData = async () => {
    try {
      let res = await fetch("http://localhost:4000/article");
      if (res.status == 200) {
        let data = await res.json();
        setarticle(data);
      } else {
        console.log("status failed");
      }
    } catch (err) {
      console.log("we couldent connect to json");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      
      <div
        dir="rtl"
        className="min-h-screen lg:p-32
        md:px-10
        bg-white
        pt-32
        p-10
        [background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
        [background-size:22px_22px]"
      >
        {/*هیرو صفحه مقالات شامل عکس متن  */}
        <div className="2xl:w-[71%] xl:w-[80%] lg:w-[90%] md:w-full mx-auto flex justify-between items-center bg-[#eeecfb] md:py-14 md:px-15.5 rounded-[28px] gap-3 sm:flex-row flex-col px-7 py-7">
          <div className="w-[50%] h-[260px]  flex items-center ">
            <img src="/images/article.jpg" alt="" />
          </div>
          <div className="flex flex-col md:w-[50%] w-full ">
            <div className="flex items-center gap-2 mb-4.5">
              <div className="rounded-full bg-[#a434d3] w-2 h-2"></div>
              <span className="text-[13px] font-semibold">Our Articles</span>
            </div>
            <h1 className="mb-4.5 md:text-[35px] lg:text-[44px] text-[30px] font-bold">
              Articles & Insights
            </h1>
            <p className="text-[#84879a] md:text-[15.5px] text-[12px] ">
              Explore the latest articles, insights and resources about
              laboratory instruments, chemistry and scientific innovations.
            </p>
          </div>
        </div>
        {/*مقاله ها */}
        <div className="2xl:w-[71%] xl:w-[80%] lg:w-[90%] md:w-full grid md:grid-cols-2 grid-cols-1 mt-10 gap-5  lg:h-[1300px] md:h-[1500px] h-[2200px] mx-auto">
          {currentArticles.map((elem, index) => {
            const categoryColor = palette[index % palette.length];

            return (
              <Link
                to={`/Article/${elem.title}`}
                key={elem.id}
                className="p-4 rounded-[22px] border border-[#ecedf3] mt-5 bg-white shadow-lg flex justify-between items-center gap-4.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,.08)]"
              >
                <img
                  src={elem.image}
                  alt=""
                  className="xl:w-[150px] xl:h-[150px] sm:w-[100px] sm:h-[100px] rounded-[16px]"
                />

                <div className="flex flex-col items-start justify-between w-full">
                  <div className="flex items-center gap-1 mb-2">
                    <span
                      className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                      style={{ backgroundColor: categoryColor }}
                    />

                    <span className="text-[12px] font-semibold text-[#84879a]">
                      {elem.createdAt}
                    </span>
                  </div>

                  <h3 className="mb-2 font-fa text-[15.5px] font-bold">
                    {elem.title}
                  </h3>

                  <p className="text-[12.5px] text-[#84879a] mb-3.5">
                    {elem.short_desc}
                  </p>

                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-1">
                      <CiClock2 size={18} color="#84879a" />

                      <p className="text-[12.5px] text-[#84879a]">
                        {Math.ceil(elem.time)} دقیقه
                      </p>
                    </div>

                    <div
                      className="flex py-2 px-3 items-center gap-3 rounded-full"
                      style={{
                        border: `1px solid ${categoryColor}`,
                        color: categoryColor,
                      }}
                    >
                      <p className="text-[12px]">Read Article</p>
                      <FaArrowLeftLong size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className=" p-2 rounded-full border border-[#ecedf3] disabled:opacity-40 cursor-pointer "
          >
            <IoIosArrowForward />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-9 h-9 rounded-full transition-all cursor-pointer ${
                currentPage === index + 1
                  ? "bg-[#6d5bf0] text-white"
                  : "border border-[#ecedf3] text-[#84879a]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-[#ecedf3] disabled:opacity-40 cursor-pointer "
          >
            <IoIosArrowBack />
          </button>
        </div>
      </div>
    </>
  );
};
export default ArticleTemp;
