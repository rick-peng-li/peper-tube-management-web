import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {

  const { darkMode, toggleTheme } = useTheme();

  return (

    <button
      onClick={toggleTheme}
      className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-2xl mt-5 transition"
    >

      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}

    </button>

  );

}

export default ThemeToggle;