import { Link } from "react-router-dom";

export default function NaoEcontrada() {
  const img =
    "https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg?w=2000";
  return (
    <div className="flex w-full flex-col h-screen justify-center items-center">
      <img className="max-w-sm" src={img} />
      <p>
        Página não encontrada, retorne para
        <Link className="underline ml-1" to="/">
          Home
        </Link>
      </p>
    </div>
  );
}
