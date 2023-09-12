export default function Header() {
  return (
    <nav className="p-8 flex justify-between items-center border-b-2">
      <div>
        <img
          src="https://static.tildacdn.com/tild3130-6332-4064-b365-333031663538/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="flex items-center gap-8">
        <div>
          <ul className="flex items-center gap-5">
            <li>
              <a href="">Favorite project</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="">(415) 941-0957</a>
        </div>
      </div>
    </nav>
  );
}
