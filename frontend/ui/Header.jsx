import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex items-center justify-between border-b border-gray-500 bg-black/80 px-6 py-4 shadow-lg text-green-400">
      {/* Left: Logo/Title */}
      <div>
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:scale-105 transform transition-all duration-300"
        >
          Surat Box Cricket
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <nav>
        <ul className="flex items-center gap-8 text-lg">
          <li>
            <Link
              to="/"
              className="hover:underline hover:text-green-200 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/box"
              className="hover:underline hover:text-green-200 transition-all duration-300"
            >
              Book Box
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:underline hover:text-green-200 transition-all duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right: Login */}
      <div>
        <Link
          to="/login"
          className="flex items-center gap-2 hover:text-green-200 transition-all duration-300"
        >
          <FiLogIn className="text-2xl" /> {/* Login Icon */}
          <span className="hidden sm:inline">Login</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
