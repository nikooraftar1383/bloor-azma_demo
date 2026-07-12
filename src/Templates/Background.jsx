import cards from "../Data/cards";
import CardColumn from "./CardColumn";


export default function Background() {
  return (
    <div
      className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
      "
      style={{
    perspective: "2500px",
    perspectiveOrigin: "center center",
}}
    >
      {/* کل بک گراند */}
      <div
        className="absolute inset-0   "
        style={{
          transform: "rotateX(50deg) rotateZ(10deg) scale(1.45)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute left-10 -top-150">
          <CardColumn cards={cards} speed="scroll-slow" />
        </div>

        <div className="absolute left-105 -top-62.5">
          <CardColumn cards={cards} speed="scroll-fast" />
        </div>

        <div className="absolute right-105 -top-137.5">
          <CardColumn cards={cards} speed="scroll-medium" />
        </div>

        
      </div>
    </div>
  );
}
