import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHeadphones, FaTruck } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SiAdguard } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
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
  console.log(product);

  return (
    <>
      <div
        className="min-h-screen p-32
bg-white
Pt-20
[background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
[background-size:22px_22px]"
      >
        <div className="w-[71%] mx-auto flex justify-between items-center">
          <img src="" alt="" className="w-[50%]" />
          <div className="flex flex-col items-start gap-2">
            <div className="py-1.5 px-3.5 rounded-[99px] bg-[#efeafd] flex justify-center items-center mb-5 ">
              <span className="text-[12.5px] text-[#987df1] font-semibold ">
                Spectrophotometers
              </span>
            </div>
            <h1 className="mb-1 text-[27px] font-extrabold">
              UV-Visible Spectrophotometer
            </h1>
            <p className="text-[18px] mb-3.5 text-[#987df1] font-extrabold">
              BA-UV1100
            </p>
            <span className="text-[15px] text-[#8a8e9f]">
              High performance UV-Visible spectrophotometer for accurate and
              reliable analysis in laboratories.
            </span>
            <div className="grid grid-cols-2 gap-5 mt-3  w-full mb-5.5">
              {Facilities.map((elem) => (
                <>
                  <div className="p-3.5 flex  items-center rounded-[13px] bg-white shadow-md w-full gap-1.5 border border-[#ececef] ">
                    <div
                      className={`w-9 h-9 rounded-[10px] flex justify-center items-center ${elem.bg}`}
                    >
                      <elem.icon className={`${elem.color}`} />
                    </div>
                    <span className="text-[13.5px] font-extrabold">
                      {elem.title}
                    </span>
                  </div>
                </>
              ))}
            </div>
            <div className="w-full grid grid-cols-2 gap-5 ">
              <button className=" text-center text-white bg-gradient-to-r from-[#14b8a6]  to-[#0adbc2] w-full px-5.5 py-3.5 rounded-xl text-[14.5px] font-extrabold hover:scale-105  ">
                Request Quote
              </button>
              <button className=" text-center  bg-white w-full border border-[#ececef] px-5.5 py-3.5 rounded-xl text-[14.5px] font-extrabold hover:scale-105 ">
                Download Catalog{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="p-7   w-[71%] mx-auto bg-[#f8f8f8] mt-9 rounded-[20px] flex justify-between">
              {Facilities.map((elem) => (
                <>
                  <div className="py-3 flex  items-center gap-1.5 ">
                    <div
                      className={`w-11 h-11 rounded-[10px] flex justify-center items-center ${elem.bg}`}
                    >
                      <elem.icon className={`${elem.color}`} />
                    </div>
                   <div className="flex flex-col">
                     <span className="text-[13px] font-semibold mb-1">
                      {elem.title}
                    </span>
                    <span className="text-[12px] text-[#9d8d8a]">{elem.shortdesc}</span>
                   </div>
                  </div>
                </>
              ))}
        </div>
        <div className="w-[71%] mx-auto grid grid-cols-2 gap-2.5 mt-10 ">
              <div className="w-full border border-[#e1e1e3] shadow-lg p-6.5 rounded-[20px] bg-white" >
                <h1 className="mb-4 text-[17px] font-extrabold">Product Overview</h1>
                <p className="text-[#767a90] text-[14.5px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quod quisquam, voluptas dolorum exercitationem itaque atque facilis ipsa quam nam illo eum amet qui cumque veritatis enim! Iusto, cumque quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quiat? Et, veniam quae nihil fuga impedit ducimus magnam qui!</p>
              </div>
               <div className="w-full border border-[#e1e1e3] shadow-lg p-6.5 rounded-[20px] bg-white" >
                <h1 className="mb-4 text-[17px] font-extrabold">Specifications</h1>
               
               {Array.from({ length: 12 }).map((_, index) => (
  <div
    key={index}
    className="border-b-[0.5px] border-dashed border-[#e1e1e3] flex items-center justify-between py-3"
  >
    <span className="text-[13.5px] font-semibold text-[#767a90]">
      Wavelength Range
    </span>
    <span className="text-[13.5px] font-bold">
      190 – 1100 nm
    </span>
  </div>
))}
              </div>
        </div>
        <div className="flex justify-between rounded-3xl px-11.5 py-9.5 bg-[#11af9f] w-[71%] mx-auto mt-5 ">
                      <div className="rounded-full w-14 h-14 bg-[#7fcfc7] flex justify-center items-center ">
                        <AiOutlineProduct color="white" size={26} />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-white mb-1.5  text-[21px] font-extrabold">Ready to Find the Right Parts?</h3>
                        <p className="text-[13.5px] text-[#c8e3e3] ">Choose your vehicle now and discover compatible parts.</p>
                      </div>
                       <div className="flex justify-center">
                  <button className="px-7 rounded-full text-[#14b8a6] mt-6 py-3.5 bg-white hover:scale-110 transition ">
                    <div className="flex items-center gap-2 justify-center  ">
                      <span className="text-[14px]  font-semibold leading-5">
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
