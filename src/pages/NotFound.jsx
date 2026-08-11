import { Link } from "react-router-dom";
import { LuBox } from "react-icons/lu";
import { MdOutlineArticle } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { ImHeadphones } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

let NotFound = () => {
  let referral = [
    {
      title: "Products",
      link: "/products",
      des: "Explore our laboratory instrumnets",
      color: "text-teal-500",
      bg: "bg-teal-100",
      icon: LuBox,
    },
    {
      title: "Articles",
      link: "/Article",
      des: "Read our Latest insight",
      color: "text-blue-500",
      bg: "bg-blue-100",
      icon: MdOutlineArticle,
    },
    {
      title: "AboutUs",
      link: "/AboutUs",
      des: "learn more about bloorazma",
      color: "text-purple-500",
      bg: "bg-purple-100",
      icon: GoPeople,
    },
    {
      title: "ContactUs",
      link: "/ContactUs",
      des: "Get in touch with our team",
      color: "text-pink-500",
      bg: "bg-pink-100",
      icon: ImHeadphones,
    },
  ];
  return (
    <>
      <div
        className="min-h-screen p-32
bg-white
Pt-20
[background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
[background-size:22px_22px] "
      >
        <div className="w-[71%] flex items-center justify-between  mx-auto">
          <div className="flex justify-center items-center w-[50%]">
            <img src="/public/images/NotFound/ChatGPT Image Aug 11, 2026, 08_41_49 AM.png" alt="" />
          </div>
          <div className="w-[50%] flex flex-col items-start">
            <h1 className="text-[130px] text-[#8364f5] font-extrabold my-4">404</h1>
            <h3 className="text-[34px] font-extrabold my-4">Oops!Page Not Found</h3>
            <span className="text-[15px] text-[#6b7280] mb-5">
              the page youre looking for is not exist or has been moved.Lets get
              you back.
            </span>
            <Link to="/" className="flex rounded-[30px] px-5 py-3 border border-[#12a593] bg-white items-center gap-2">
            <FaHome color="#12a593" />
            <span className="text-[#12a593] text-[14px] ">Back to Home</span>
            </Link>
          </div>
        </div>
        <div className="w-[71%] mx-auto flex flex-col p-11 rounded-3xl bg-[#f6f6f8] mt-14">
          <h1 className="text-[20px] font-extrabold mb-6.5">
            You might be Looking for
          </h1>
          <div className="flex w-full gap-3 ">
            {referral.map((itm,index) => {
              return (
                
                  <Link
                    className=" bg-white border w-[25%] flex flex-col items-center gap-3 p-6 rounded-3xl border-[#ecedf3] shadow-md"
                    to={itm.link}
                    key={index}
                  >
                    <div className={`p-3 rounded-xl ${itm.bg}`}>
                        <itm.icon className={`${itm.color}`} size={18} />
                    </div>
                    <h1 className="text-[15px] font-bold mb-1.5">
                      {itm.title}
                    </h1>
                    <span className="text-[13px] text-center text-[#7e7280] mb-4 h-10">
                      {itm.des}
                    </span>
                  </Link>
            
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
