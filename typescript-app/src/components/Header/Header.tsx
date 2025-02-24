import React from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const Header: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={`w-full ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md`}
    >
      <div className="flex justify-between items-center p-3 border-b border-gray-300">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaLinkedin size={20} />
          </a>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="relative"
        >
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Vite React App</h1>
        <Button
          className="md:hidden bg-transparent text-blue-600 hover:bg-gray-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={34} /> : <Menu size={24} />}
        </Button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-32 left-0 w-full bg-white dark:bg-gray-900 md:w-auto md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="block p-2 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="block p-2 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/Services" className="block p-2 hover:text-blue-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="/login" className="block p-2 hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block p-2 hover:text-blue-500">
              Setting
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
