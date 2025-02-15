import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const Header: React.FC<NavbarProps> = ({
  menuOpen,
  setMenuOpen,
  sidebarOpen,
  setSidebarOpen,
}) => (
  <nav className="bg-transparent shadow-md p-4 flex justify-between items-center">
    <Button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="text-gray-900 bg-transparent hover:bg-green-300"
    >
      {sidebarOpen ? <X size={24} /> : <Menu size={44} />}
    </Button>
    <h1 className="text-xl font-bold">My Vite React App</h1>
    <Button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </Button>
    <ul
      className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-white md:w-auto md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
        menuOpen ? "block" : "hidden"
      }`}
    >
      <li>
        <a href="#" className="block p-2 hover:text-blue-500">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="block p-2 hover:text-blue-500">
          About
        </a>
      </li>
      <li>
        <a href="#" className="block p-2 hover:text-blue-500">
          Services
        </a>
      </li>
      <li>
        <a href="#" className="block p-2 hover:text-blue-500">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Header;
