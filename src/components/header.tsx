import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./themeToggle";
import LanguageSwitcher from "./languageSwitcher";
// import { useContext } from "react";
// import { AuthContext } from "../context";
// import { useAuthContext } from "../context/useAuthContext";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../supabase/auth";
import { useAtom } from "jotai";
import { userAtom } from "../store/auth";

const Header = () => {
  const [user] = useAtom(userAtom);

  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });

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
        {user ? (
          <div className="flex gap-x-5">
            <NavLink to="Profile">Profile</NavLink>
            <span onClick={() => handleLogout()} className="cursor-pointer">
              Logout
            </span>
          </div>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
