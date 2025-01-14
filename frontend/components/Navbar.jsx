import { Link } from "react-router-dom";
import { FaHome, FaBox, FaEnvelope, FaUser, FaBars } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // state to handle hamburger menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-3xl font-bold text-white hover:text-gray-200"
          >
            Box Cricket
          </Link>
          {/* Hamburger icon (only visible on small screens) */}
          <button className="lg:hidden text-2xl" onClick={toggleMenu}>
            <FaBars />
          </button>
          {/* Menu items */}
          <div
            className={`flex items-center space-x-8 ${
              isOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link
              to="/"
              className="flex items-center space-x-1 text-lg font-medium hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/box"
              className="flex items-center space-x-1 text-lg font-medium hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <FaBox />
              <span>Box</span>
            </Link>
            <Link
              to="/contact-us"
              className="flex items-center space-x-1 text-lg font-medium hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope />
              <span>Contact Us</span>
            </Link>

            {/* Aligning the user section to the right */}
            <div className="flex items-center space-x-4 ml-auto">
              {user ? (
                <>
                  <span className="flex items-center space-x-1">
                    <FaUser />
                    <span>{user.name}</span>
                  </span>
                  <button
                    onClick={logout}
                    className="hover:text-gray-200 text-lg font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="hover:text-gray-200 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="hover:text-gray-200 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
