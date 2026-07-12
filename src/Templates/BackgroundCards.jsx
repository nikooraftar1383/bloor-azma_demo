const cards = [
  { top: "8%", left: "5%", rotate: "-8deg" },
  { top: "15%", left: "55%", rotate: "6deg" },
  { top: "48%", left: "10%", rotate: "-5deg" },
  { top: "55%", left: "60%", rotate: "7deg" },
];

export default function BackgroundCards() {
  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          className="absolute w-90 h-45 rounded-[30px] border border-gray-200  shadow-xl animate-float p-6 "
          style={{
            top: card.top,
            left: card.left,
            transform: `rotate(${card.rotate})`,
            opacity: 0.35,
          }}
        >
          <p className="text-sm text-gray-400">Design</p>

          <h3 className="mt-2 text-2xl font-semibold text-gray-700">
            Creating a brand identity
          </h3>

          <div className="mt-8 flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-red-300"></div>
            <div className="w-10 h-10 rounded-full bg-blue-300"></div>
            <div className="w-10 h-10 rounded-full bg-green-300"></div>
          </div>
        </div>
      ))}
    </>
  );
}
