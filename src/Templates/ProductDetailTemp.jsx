import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHeadphones, FaTruck } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SiAdguard } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineFilePdf, AiOutlineProduct } from "react-icons/ai";
import { SlCloudDownload } from "react-icons/sl";
import { BsFiletypePdf } from "react-icons/bs";
import SwiperProduct from "./SwiperProduct";

let ProductDetailTemp = () => {
  //4 تا تیکت جزئیات
  let Facilities = [
    {
      title: "Original Product",
      color: "text-teal-500",
      bg: "bg-teal-100",
      icon: CiSearch,
      shortdesc: "Precise results you can trust",
    },
    {
      title: "24 Month Warranty",
      icon: SiAdguard,
      color: "text-blue-500",
      bg: "bg-blue-100",
      shortdesc: "Built for daily lab use",
    },
    {
      title: "Technical Support",
      icon: FaHeadphones,
      color: "text-purple-500",
      bg: "bg-purple-100",
      shortdesc: "Stable & consistent results",
    },
    {
      title: "Global Standards",
      icon: FaTruck,
      color: "text-pink-500",
      bg: "bg-pink-100",
      shortdesc: "CE Certified",
    },
  ];
  //pdf های قابل دانلود
  let pdfs = [
    {
      title: "Brochure (PDF)",
      file: "/public/pdf/waiting.pdf",
      bg: "bg-teal-100",
    },
    {
      title: "Datasheet (PDF)",
      file: "/public/pdf/waiting.pdf",
      bg: "bg-blue-100",
    },
    {
      title: "User Manual (PDF)",
      file: "/public/pdf/waiting.pdf",
      bg: "bg-purple-100",
    },
  ];
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  let getData = async () => {
    try {
      let res = await fetch(`http://localhost:4000/products/`);
      if (res.status == 200) {
        let data = await res.json();
        let result = data.find((itm) => itm.title.trim() == id);
        setProduct(result);
      } else {
        console.log("eror");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        className="min-h-screen p-5 sm:p-10 sm:pt-23 md:pt-30 md:p-20 lg:p-32
bg-white
pt-20
[background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
[background-size:22px_22px]"
      >
        <div className="w-full lg:w-[85%] xl:w-[71%] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          <img
            src="/public/images/eventsection/1724134657631B-SulfideAE201.webp"
            alt=""
            className="w-[70%] sm:w-[55%] md:w-[50%]"
          />
          {/*عنوان محصول */}
          <div className="flex flex-col items-start gap-2 w-full md:w-auto">
            <div className="py-1.5 px-3.5 rounded-[99px] bg-[#efeafd] flex justify-center items-center mb-3 sm:mb-5 ">
              <span className="text-[12.5px] text-[#987df1] font-semibold ">
                Spectrophotometers
              </span>
            </div>
            <h1 className="mb-1 text-[22px] sm:text-[25px] md:text-[27px] font-extrabold">
              UV-Visible Spectrophotometer
            </h1>
            <p className="text-[16px] sm:text-[18px] mb-3.5 text-[#987df1] font-extrabold">
              BA-UV1100
            </p>
            {/* توضیح کوتاه */}
            <span className="text-[14px] sm:text-[15px] text-[#8a8e9f]">
              High performance UV-Visible spectrophotometer for accurate and
              reliable analysis in laboratories.
            </span>
            {/* 4 تا ویژگی حمل و... */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-3  w-full mb-5.5">
              {Facilities.map((elem, index) => (
                <div key={index}>
                  <div className="p-3.5 flex  items-center rounded-[13px] bg-white shadow-md w-full gap-1.5 border border-[#ececef] ">
                    <div
                      className={`w-9 h-9 rounded-[10px] flex justify-center items-center shrink-0 ${elem.bg}`}
                    >
                      <elem.icon className={`${elem.color}`} />
                    </div>
                    <span className="text-[13.5px] font-extrabold">
                      {elem.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* دکمه ها*/}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 ">
              <button className=" text-center text-white bg-gradient-to-r from-[#14b8a6]  to-[#0adbc2] w-full px-5.5 py-3.5 rounded-xl text-[14.5px] font-extrabold hover:scale-105  ">
                Request Quote
              </button>
              <button className=" text-center  bg-white w-full border border-[#ececef] px-5.5 py-3.5 rounded-xl text-[14.5px] font-extrabold hover:scale-105 ">
                Download Catalog{" "}
              </button>
            </div>
          </div>
        </div>
        {/* 4 تا ویژگی حمل و... */}
        <div className="p-5 sm:p-7   w-full lg:w-[85%] xl:w-[71%] mx-auto bg-[#f8f8f8] mt-9 rounded-[20px] flex flex-col sm:flex-row flex-wrap justify-between gap-3 sm:gap-0">
          {Facilities.map((elem, index) => (
            <div key={index}>
              <div className="py-3 flex  items-center gap-1.5 ">
                <div
                  className={`w-11 h-11 rounded-[10px] flex justify-center items-center shrink-0 ${elem.bg}`}
                >
                  <elem.icon className={`${elem.color}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold mb-1">
                    {elem.title}
                  </span>
                  <span className="text-[12px] text-[#9d8d8a]">
                    {elem.shortdesc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*توضیحات و معرقی محصول */}
        <div className="w-full lg:w-[85%] xl:w-[71%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-10 ">
          <div className="w-full border border-[#e1e1e3] shadow-lg p-5 sm:p-6.5 rounded-[20px] bg-white">
            <h1 className="mb-4 text-[16px] sm:text-[17px] font-extrabold">
              Product Overview
            </h1>
            <p className="text-[#767a90] text-[14px] sm:text-[14.5px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quod
              quisquam, voluptas dolorum exercitationem itaque atque facilis
              ipsa quam nam illo eum amet qui cumque veritatis enim! Iusto,
              cumque quidem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Id quiat? Et, veniam quae nihil fuga impedit ducimus magnam
              qui!
            </p>
          </div>
          <div className="w-full border border-[#e1e1e3] shadow-lg p-5 sm:p-6.5 rounded-[20px] bg-white">
            <h1 className="mb-4 text-[16px] sm:text-[17px] font-extrabold">
              Specifications
            </h1>
            {/* جدول ویژگی های دستگاه */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="border-b-[0.5px] border-dashed border-[#e1e1e3] flex items-center justify-between py-3 gap-2"
              >
                <span className="text-[13px] sm:text-[13.5px] font-semibold text-[#767a90]">
                  Wavelength Range
                </span>
                <span className="text-[13px] sm:text-[13.5px] font-bold text-right">
                  190 – 1100 nm
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* سوئیپر اسلایدر*/}
        <div className="w-full lg:w-[85%] xl:w-[71%] mx-auto flex flex-col mt-8 py-4 ">
          <SwiperProduct />
        </div>
        {/*دانلود ها */}
        <div className="w-full lg:w-[85%] xl:w-[71%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-10 ">
          <div className="p-5 sm:p-6.5 rounded-[20px] border border-[#e1e1e3] bg-white shadow-lg">
            <h3 className="text-[16px] sm:text-[17px] font-extrabold mb-4">
              Downloads
            </h3>
            {pdfs.map((elem, index) => (
              <div
                className="px-3 sm:px-4 py-3.5 sm:py-4.5 rounded-xl bg-[#f7f7fb] flex justify-between items-center mt-2 gap-2"
                key={index}
              >
                <div className="flex gap-2 items-center min-w-0">
                  <div
                    className={`rounded-[9px] flex justify-center items-center p-2 shrink-0 ${elem.bg}`}
                  >
                    <AiOutlineFilePdf />
                  </div>
                  <p className="text-[13px] sm:text-[14px] font-bold truncate">
                    {elem.title}
                  </p>
                </div>
                <a
                  className="flex justify-center items-center shrink-0 "
                  href={elem.file}
                >
                  <SlCloudDownload size={20} />
                </a>
              </div>
            ))}
          </div>
          {/* قسمت سوالات متداول */}
          <div className="bg-white border border-[#e9e9f1] rounded-2xl p-5 sm:p-[26px] shadow-[0_2px_4px_rgba(16,18,35,0.04),0_14px_30px_-16px_rgba(16,18,35,0.12)]">
            <h3 className="text-[16px] sm:text-[17px] font-extrabold mb-4">
              FAQ
            </h3>

            <div className="divide-y divide-[#e9e9f1]">
              <details className="group py-[14px] first:pt-0">
                <summary className="flex items-center justify-between gap-3 text-[13.5px] sm:text-[14px] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  What is the wavelength range?
                  <span className="text-[#6d5bf0] transition-transform duration-200 group-open:rotate-180 shrink-0">
                    ⌄
                  </span>
                </summary>
                <p className="text-[#767a90] text-sm mt-3">
                  190 – 1100 nm, covering the full UV and visible spectral
                  range.
                </p>
              </details>

              <details className="group py-[14px]">
                <summary className="flex items-center justify-between gap-3 text-sm cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  What is included with the device?
                  <span className="text-[#6d5bf0] transition-transform duration-200 group-open:rotate-180 shrink-0">
                    ⌄
                  </span>
                </summary>
                <p className="text-[#767a90] text-sm mt-3">
                  The device, power cable, cuvette set, dust cover and user
                  manual are included as standard.
                </p>
              </details>

              <details className="group py-[14px]">
                <summary className="flex items-center justify-between gap-3 text-sm cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  Do you provide installation?
                  <span className="text-[#6d5bf0] transition-transform duration-200 group-open:rotate-180 shrink-0">
                    ⌄
                  </span>
                </summary>
                <p className="text-[#767a90] text-sm mt-3">
                  Yes, on-site installation and setup is available upon request.
                </p>
              </details>

              <details className="group py-[14px]">
                <summary className="flex items-center justify-between gap-3 text-sm cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  Is training available?
                  <span className="text-[#6d5bf0] transition-transform duration-200 group-open:rotate-180 shrink-0">
                    ⌄
                  </span>
                </summary>
                <p className="text-[#767a90] text-sm mt-3">
                  Our technical team provides free training sessions for new
                  customers.
                </p>
              </details>
            </div>
          </div>
        </div>
        {/*باتن انتهایی صفحه ریسپانسیو شده */}
        <div
          className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-4 rounded-3xl px-6 py-6 sm:px-8 lg:px-11.5 lg:py-9.5 bg-[#11af9f] xl:w-[71%] lg:w-[80%] md:w-[90%] w-full mx-auto mt-5"
          dir="ltr"
        >
          <div className="rounded-full w-14 h-14 shrink-0 bg-[#7fcfc7] flex justify-center items-center">
            <AiOutlineProduct color="white" size={26} />
          </div>

          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-white mb-1.5 text-lg sm:text-[21px] font-extrabold">
              Ready to Find the Right Parts?
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-[#c8e3e3]">
              Choose your vehicle now and discover compatible parts.
            </p>
          </div>

          <div className="flex justify-center w-full sm:w-auto">
            <button className="px-7 rounded-full text-[#14b8a6] py-3.5 bg-white hover:scale-110 transition w-full sm:w-auto">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[14px] font-semibold leading-5 whitespace-nowrap">
                  Browse Products
                </span>
                <FaArrowRightLong color="#14b8a6" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailTemp;
