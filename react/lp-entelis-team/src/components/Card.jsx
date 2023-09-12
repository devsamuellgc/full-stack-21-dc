export default function Card(props) {
  return (
    <div className="w-48 flex flex-col gap-5">
      <img src={props.src} alt="Imagem elemento tal" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
