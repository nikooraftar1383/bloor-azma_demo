import "../css/BorderStyle.css";

function HeroCards() {
  return (
    <section className="flex justify-center py-24">
      <div className="hero-card">
        <div className="hero-left">
          <span className="hero-small">KARO STUDIO</span>

          <h2>For founders and businesses</h2>

          <p>Build with one connected team, from idea to launch.</p>
          <span className="text-[#71757e] text-[14px] mt-3 mb-8">
            Design, product, technology, and growth. Shaped around one clear
            direction.
          </span>

          <div className="buttons">
            <button className="primary hover:scale-105 cursor-pointer">Contact us</button>

            <button className="secondary text-[#b8babf] hover:scale-105 cursor-pointer ">
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
