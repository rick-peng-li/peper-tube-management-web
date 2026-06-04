import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <FaBoxOpen className="text-3xl text-yellow-400" />
        <h1 className="text-2xl font-bold">
          Peper Tube
        </h1>
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-8 text-lg">
        <li>
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard"
            className="hover:text-yellow-400 transition duration-300"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="hover:text-yellow-400 transition duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;