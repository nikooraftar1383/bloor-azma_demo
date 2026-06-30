import { FaArrowRight } from "react-icons/fa";
import Background from "./Background";


 function Build() {
  return (
    <section className="relative h-125 overflow-hidden bg-[#ffffff]    ">

      {/* بک گراند */}
      <div className="absolute inset-0 flex justify-center">
  <div className="relative w-[50%] h-full overflow-hidden ">
    <Background />
  </div>
</div>
      <div
  className="
  absolute
  inset-0
  z-10
 
  "
  style={{
    background:
      "radial-gradient(circle at center, transparent 18%, rgba(250,250,250,.15) 35%, rgba(250,250,250,.55) 60%, rgba(250,250,250,.95) 100%)",
  }}
/>
<div
  className="
  absolute
left-1/2
top-1/2
w-350
h-350
rounded-full
bg-white
opacity-90
blur-[250px]

-translate-x-1/2
-translate-y-1/2
  "
></div>
      {/* متن */}
      <div className="relative z-50 flex h-full items-center justify-center">

        <div className="text-center">

          <p className="uppercase  text-gray-400 text-[11px]">
            Processes
          </p>

          <h1 className="mt-4 text-[48px] font-black leading-none text-[#111827]">
            Build in public
          </h1>

          <p className="mt-6  text-[16px] text-gray-500 w-[50%] mx-auto">
            Turn your progress into visibility. Share updates, get feedback, and let the right people discover what you're making.
          </p>
            <div>
                 <button className="px-6 rounded-full bg-[#ebebeb] mt-6 py-2.5 border border-gray-300  hover:scale-110 transition">
                    <div className="flex items-center gap-2">
                                <span className="text-[14px]  font-semibold leading-5">
                                  Start a process
                                </span>
                                <FaArrowRight  />
                              </div>
                 </button>
            </div>
        </div>

      </div>

    </section>
  );
}
export default Build