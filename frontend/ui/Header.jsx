import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-green-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Surat Box Cricket
      </Link>
    </header>
  );
}

export default Header;