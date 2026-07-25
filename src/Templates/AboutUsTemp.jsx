
import { TfiCup } from "react-icons/tfi"
import pride from "../Data/prid"
let AboutUsTemp = ()=>{
    
    
    return<>
   
    <div className="flex bg-[#eef3f9] relative h-[600px] ">
        <div className="w-[80%] flex  mx-auto pt-35  ">
            <div className="flex-col justify-center item-center">
                <h1 className="text-[128px] font-semibold">About us</h1>
                <p className="text-[20px] text-[#97a4b2] w-[61%]">  Building on more than a decade of research to address unmet medical needs</p>
            </div>
                <img src="/public/images/638df34e377c682a712cf200_career-hero-p-1600.jpg" alt="" className="w-[50%] h-[600px] absolute top-0 right-[2%]  " />

        </div>
    </div>
     <div className="bg-linear-to-b to-white from-[#eef3f9] pt-10" >
     <div className="max-w-7xl mx-auto px-8">

 

      <h2 className="mt-10 text-[40px] leading-[1.15] font-light text-slate-900 max-w-[1300px]">

          We aim to develop treatment options for those diseases that have an{" "}

          <span className="bg-gradient-to-r from-[#146664] to-[#12b7a7] bg-clip-text text-transparent font-semibold">
              impact on all our lives
          </span>

          {" "}and directly benefit{" "}

          <span className="bg-gradient-to-r from-[#146664]  to-[#12b7a7] bg-clip-text text-transparent font-semibold">
              patients' survival and overall quality of life.
          </span>

      </h2>

  </div>

     </div>
    
    <div className=" w-full bg-[#12b7a7] py-20 mt-25  relative -z-20">
         <div className="max-w-7xl mx-auto">
      <h2 className="mt-10 text-[40px] leading-[1.15] font-light max-w-[1300px] text-slate-50">

         We are proud to work with a number of{" "}

          <span className="bg-gradient-to-r from-[#10253a]  to-[#146664] bg-clip-text text-transparent font-semibold">
              investors and institutes
          </span>

          {" "}, who support us on this{" "}

          <span className="bg-gradient-to-r from-[#10253a]  to-[#146664] bg-clip-text text-transparent font-semibold">
             important mission.
          </span>

      </h2>
     
    <div className="grid grid-cols-3 mt-8 gap-10 w-[90%] mx-auto">
        {pride.map((elem,index)=>(
             <div key={index} className="p-7 text-white h-[200px] border border-white rounded-xl text-end cursor-pointer font-fa bg-white/20 backdrop-blur-md transition-all duration-500 ">
              
<h1>{elem}</h1>

</div>
        ))}
   
    </div>
  </div>
 <div className="w-[72%] mx-auto text-center mt-20">
     <h2 className="mt-10 text-[40px] leading-[1.15] font-light text-white ">

          “PROSION Therapeutics’ approach represents an elegant way to{" "}

          <span className="bg-linear-to-r from-[#0a0642] to-[#096b61] bg-clip-text text-transparent font-semibold">
             develop entirely novel drugs with game-changing potential.” 
          </span>


      </h2>
 </div>
    </div>
    </>
}
export default AboutUsTemp