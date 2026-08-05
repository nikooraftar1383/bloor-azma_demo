import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { TfiCheck } from "react-icons/tfi";
import ourAdvantages from "../Data/Aboutus";
import { SiCircle } from "react-icons/si";
import { howWeWorkData } from "../Data/Howtowork";

let AboutUsTemp = () => {
  let chooseus = [
    "Accurate product categorization",
    "Smart and fast search",
    "Complete product specifications",
    "Trusted global and local brands",
    "Competitive prices",
  ];
  let prid = [
    { rank: "700+", desc: "Product" },
    { rank: "20+", desc: "Vehicle Brands" },
    { rank: "100+", desc: "Trusted Suppliers" },
    { rank: "24/7", desc: "Support" },
  ];
  return (
    <>
      <div
        className="min-h-screen
bg-white
Pt-20
[background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
[background-size:22px_22px]"
      >
        <div className="pt-30 flex justify-center items-center mb-5  ">
          <div className="bg-[#f4eaff] flex justify-center items-center rounded-full py-1.5 px-4 ">
            <GoDotFill color="#7642cc" size={15} />
            <span className="text-[13px]  text-[#7642cc]  font-bold">
              About Us{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[42px] font-black">Building Better</h1>
          <div className="flex gap-0 justify-center text-[42px] font-black gap-1">
            <h1 className="text-[#13b8a7]">Automotive</h1>
            <h1>Experiences</h1>
          </div>
        </div>
        <div className="flex mt-4 w-[40%] mx-auto justify-center">
          <span className="text-[#6b7280] text-center text-[15.5px] font-light">
            We're more than just a car parts store — we build a smarter, faster
            and more reliable way to find the right parts.
          </span>
        </div>
        <div className="flex justify-center">
          <button className="px-7 rounded-full bg-[#14b8a6] mt-6 py-3.5  hover:scale-110 transition ">
            <div className="flex items-center gap-2 justify-center  ">
              <span className="text-[14px] text-white font-semibold leading-5">
                Explore Products
              </span>
              <FaArrowRightLong color="white" />
            </div>
          </button>
        </div>
        <div className="w-[61%] mt-6 border border-[#e4e5e8] bg-[#fbfbfc] mx-auto flex p-11 rounded-[26px] ">
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center mb-4">
              <GoDotFill color="#0d8f90" size={30} />
              <h1 className="text-[22px] text-[#0d8f90] font-extrabold">
                Our Story
              </h1>
            </div>
            <h3 className="text-[16px] font-bold mb-3 ps-2">
              Finding the right part shouldn't be hard.
            </h3>
            <p className="text-[14px] text-[#6b7280] mb-3 ps-2">
              We started with a simple idea: making it easier for everyone to
              find compatible, high-quality car parts.
            </p>
            <p className="text-[14px] text-[#6b7280] mb-3 ps-2">
              That's why we've built a platform with precise vehicle categories,
              smart search and complete product information — so you can buy
              with confidence.
            </p>
          </div>
          <img
            src="/public/images/about us/ChatGPT Image Aug 1, 2026, 04_02_49 PM.png"
            alt=""
            className="w-[48%] "
          />
        </div>
        <div className="flex mx-auto   pt-19 flex-col items-center">
          <div className="flex justify-center gap-1 mb-2">
            <h2 className="text-black text-[28px] font-extrabold">
              What Makes Us
            </h2>
            <h2 className="text-[28px] font-extrabold text-[#0d8f90]">
              Different
            </h2>
          </div>
          <span className="text-[14px] text-[#6b7280]">
            A better way to shop for car parts.
          </span>
        </div>

        <div className="w-[61%] mx-auto mt-12 flex justify-between items-start gap-2">
          {ourAdvantages.map((elem, index) => (
            <div
              className=" border border-[#e4e5e8] bg-white px-4 py-6.5 rounded-[18px]  flex flex-col items-center text-center w-[19%]"
              key={index}
            >
              <div
                className={`rounded-full w-[52px] h-[52px] ${elem.bg} flex justify-center items-center mb-4`}
              >
                <elem.icon className={`w-5 h-5 font-black ${elem.color}`} />
              </div>
              <h1 className="text-[14.5px] font-semibold ">{elem.title}</h1>
              <p className="text-[12px] text-[#6b7280]">{elem.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-[61%] border border-[#e4e5e8] bg-[#fbfbfc] mx-auto mt-12 px-5 py-7.5  rounded-[20px] flex ">
          {prid.map((elem, index) => (
            <div
              className={`flex w-[25%] items-center flex-col ${index < 3 ? " border-e-1 border-[#e4e5e8]" : ""} `}
            >
              <h1 className="text-[26px] font-extrabold text-[#0d8f90] ">
                {elem.rank}
              </h1>
              <span className="mt-1 text-[12.5px] text-[#6b7280]">
                {elem.desc}
              </span>
            </div>
          ))}
        </div>

        <div className="flex w-[61%] mx-auto bg-[#e9f9f6] rounded-[22px] gap-3  mt-5 px-9 py-9 justify-between">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
            <SiCircle size={30} color="#0d8f90" />
          </div>
          <div className="flex flex-col w-[90%] ">
            <h1 className="text-[18px] font-extrabold">Our Mission</h1>
            <span className="text-[14px] text-[#6b7280]">
              Our mission is to create a modern, reliable and simple experience
              for buying car parts. From choosing your vehicle to finding the
              right part, everything should be fast, easy and trustworthy.
            </span>
          </div>
        </div>
        <div className="flex mx-auto   pt-19 flex-col items-center">
          <div className="flex justify-center gap-1 mb-2">
            <h2 className="text-black text-[28px] font-extrabold">How We</h2>
            <h2 className="text-[28px] font-extrabold text-[#0d8f90]">Work</h2>
          </div>
          <span className="text-[14px] text-[#6b7280]">
            From vehicle to your doorstep — in just a few steps.
          </span>
        </div>
        <div className="w-[61%] mx-auto mt-5 flex justify-between items-start gap-5">
            {howWeWorkData.map((elem,index)=>(<>
          <div className="w-[20%] rounded-[18px] py-6 px-4.5 border border-[#e4e5e8] bg-[#fbfbfc] flex flex-col items-center"key={index}>
            <div className={`w-12 h-12 rounded-full flex justify-center items-center ${elem.bg}`}>
                <elem.icon className={`${elem.color}`} />
            </div>
            <h1 className="text-[14px] mt-4.5 font-semibold mb-1.5">{elem.title}</h1>
            <span className="text-[12px] text-center text-[#6b7280]">{elem.desc}</span>
          </div>

           </> ))}
        </div>
        <div className="w-[61%] mt-10 border border-[#e4e5e8] bg-[#fbfbfc] mx-auto flex p-11 rounded-[26px] justify-between ">
          <img
            src="/public/images/about us/ChatGPT Image Aug 1, 2026, 05_04_34 PM.png"
            alt=""
            className="w-[45%] "
          />

          <div className="flex flex-col items-start ">
            <div className="flex gap-1 items-center mb-4">
              <h1 className="text-[22px] text-[#0d8f90] font-extrabold ">
                Why Choose Us
              </h1>
            </div>
            <p className="text-[14px] text-[#6b7280] mb-3 ">
              Everything you need for a better car parts shopping experience.
            </p>
            <ul className="gap-2 flex flex-col">
              {chooseus.map((elem, index) => (
                <div className="flex gap-2" key={index}>
                  <div className="rounded-full bg-[#e9f9f6] p-1.5">
                    <TfiCheck color="#0d8f90" size={12} />
                  </div>
                  <li>{elem}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
       <div className="flex mx-auto   pt-19 flex-col items-center">
          <div className="flex justify-center gap-1 mb-2">
            <h2 className="text-black text-[28px] font-extrabold">
              Trusted
            </h2>
            <h2 className="text-[28px] font-extrabold text-[#0d8f90]">
              Brands
            </h2>
          </div>
          <span className="text-[14px] text-[#6b7280]">
           We work with the world's most reliable automotive brands.
          </span>
        </div>
        <div className="flex justify-between rounded-3xl px-11.5 py-9.5 bg-[#11af9f] w-[61%] mx-auto mt-5 ">
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
export default AboutUsTemp;
