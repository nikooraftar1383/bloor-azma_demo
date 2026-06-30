export default function Card({ card }) {
  return (
    <div
      className="
w-50
h-37.5
rounded-[28px]
border
border-white/20
bg-white/75
shadow-[0_40px_80px_rgba(0,0,0,.08)]
p-2
backdrop-blur-xl
"
    >
      <p className="text-sm ">{card.category}</p>

      <div className="mt-10 flex justify-between">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-pink-300"></div>

          <div className="w-6 h-6 rounded-full bg-blue-300"></div>

          <div className="w-6 h-6 rounded-full bg-green-300"></div>
        </div>

        <p className=" text-[12px]">{card.followers} followers</p>
      </div>
    </div>
  );
}
