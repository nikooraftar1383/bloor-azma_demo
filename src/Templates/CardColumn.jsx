import Card from "./Card";

export default function CardColumn({ cards, speed = "scroll-medium" }) {
  return (
    <div className={`${speed} flex flex-col gap-0`}>

      {[...cards, ...cards].map((card, index) => (
        <Card
          key={index}
          card={card}
        />
      ))}

    </div>
  );
}