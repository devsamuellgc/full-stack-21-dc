export default function Header({ nome, idade, cidade }) {
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
        Nome: {nome} - Idade: {idade} - Cidade: {cidade}
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          <li>Fale conosco</li>
          <li>Sobre nós</li>
        </ul>
      </div>
    </nav>
  );
}
