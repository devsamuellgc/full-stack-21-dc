import Card from "./Card";

export default function Cards(props) {
  return (
    <div className="flex items-center gap-12">
      {props.data.map((card) => {
        return <Card title={card.title} text={card.text} src={card.src} />;
      })}
    </div>
  );
}
