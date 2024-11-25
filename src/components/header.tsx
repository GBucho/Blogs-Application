import { Link } from "react-router-dom";
import ThemeToggle from "./themeToggle";
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl">
        <Link to="/">BitBlogs</Link>
      </h1>
      <nav className="hidden md:flex space-x-4">
        <Link to={"/home"}>Home</Link>
        <Link to={"/Write"}>Write</Link>

        <Link to={"/about"}>About</Link>
      </nav>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
