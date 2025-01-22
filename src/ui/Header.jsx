import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  // State to toggle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 flex items-center justify-between border-b border-gray-500 bg-black/80 px-4 py-3 shadow-lg text-green-400 sm:px-6 sm:py-4">
      {/* Left: Logo/Title */}
      <div>
        <Link
          to="/"
          className="text-lg sm:text-2xl font-bold tracking-wide hover:scale-105 transform transition-all duration-300"
        >
          Surat Box Cricket
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <nav>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex items-center gap-4 sm:gap-8 text-sm sm:text-lg`}
        >
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
        </ul>
      </nav>

      {/* Right: Contact Us */}
      <div>
        <Link
          to="/contact-us"
          className="text-sm sm:text-lg hover:underline hover:text-green-200 transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu (Hamburger Icon) */}
      <div className="sm:hidden">
        <button
          className="text-green-400 hover:text-green-200 focus:outline-none transition-all duration-300"
          aria-label="Open Menu"
          onClick={toggleMenu} // Toggle the menu on click
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
