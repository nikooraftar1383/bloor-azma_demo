import "../css/BorderStyle.css";

function HeroCards() {
  return (
    <section className="flex justify-center py-24 px-8">
      <div className="bg-black lg:w-[61%] md:mx-8 md:w-full rounded-[34px] flex w-full ">
        <div className="p-12 mb-3 flex flex-col justify-center">
          <span className="font-semibold text-[11px] text-[#6b7280]">KARO STUDIO </span>

          <h2 className="text-9 font-bold mb-3 mt-4 text-white ">For founders and businesses</h2>

          <p className="text-[18px] text-white">Build with one connected team, from idea to launch.</p>
          <span className="text-[#71757e] text-[14px] mt-3 mb-8">
            Design, product, technology, and growth. Shaped around one clear
            direction.
          </span>

          <div className="flex gap-[20px]">
            <button className="bg-white text-black text-[14px] px-6 rounded-full hover:scale-105 cursor-pointer">Contact us</button>

            <button className="border border-[#4b5563] text-[#b8babf] hover:scale-105 cursor-pointer px-6 py-2 rounded-full ">
              Explore Products
            </button>
          </div>
        </div>

        <div className="hero-right">
             
    
        </div>
      </div>
     
    </section>
  );
}
export default HeroCards;
