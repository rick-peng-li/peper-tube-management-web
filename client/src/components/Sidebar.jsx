import {
  FaHome,
  FaBox,
  FaUsers,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  // Get user
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-black dark:bg-gray-950 text-white fixed left-0 top-0 p-5 flex flex-col justify-between">

      {/* Top */}
      <div>

        <h1 className="text-3xl font-bold text-yellow-400 mb-10">
          Admin Panel
        </h1>

        <ul className="space-y-6 text-lg">

          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaHome />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaClipboardList />
              Orders
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaBox />
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/customers"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaUsers />
              Customers
            </Link>
          </li>

        </ul>

      </div>

      {/* Bottom */}
      <div>

        {/* User Info */}
        <div className="mb-5 border-t border-gray-700 pt-5">

          <p className="text-gray-400">
            Logged in as
          </p>

          <h2 className="text-xl font-bold mt-1">
            {user?.name}
          </h2>

        </div>

        {/* Logout */}

        <ThemeToggle />
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl transition"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Sidebar;