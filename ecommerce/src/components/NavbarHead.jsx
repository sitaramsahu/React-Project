import {
  EqualApproximatelyIcon,
  LayoutDashboardIcon,
  NfcIcon,
  Search,
  TruckIcon,
  WrenchIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";

const NavbarHead = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-9">
            <div>
              <Link to="/" className="flex items-center py-4 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2970ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-user"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                </svg>
                <span className="font-semibold text-gray-500 text-lg">
                  My Logo
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/dashboard"
                className="py-4 px-2 flex text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                {/* <LayoutDashboardIcon /> */}
                Dashboard
              </Link>

              <Link
                to="/services"
                className="py-4 flex px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                {/* <WrenchIcon /> */}
                Services
              </Link>
              <Link
                to="/contact"
                className="py-4 px-2 flex text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                {/* <NfcIcon /> */}
                Contact
              </Link>
              <Link
                to="/about"
                className="py-4 px-2 flex text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                {/* <EqualApproximatelyIcon /> */}
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Link
              to="/login"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/tracking"
              className="flex py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              <TruckIcon /> Track Order
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
        >
          About
        </Link>
        <Link
          to="/services"
          className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavbarHead;
