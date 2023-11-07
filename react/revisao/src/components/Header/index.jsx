import { Link } from "react-router-dom";

export default function Header({ nome }) {
  return (
    <nav
      className="
            bg-sky-800 
            flex 
            justify-between 
            px-8 
            py-3 
            items-center 
            text-white"
    >
      <div>
        <Link to="/">{nome}</Link>
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          <li>
            <Link to="/fale-conosco">Fale conosco</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre nós</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
