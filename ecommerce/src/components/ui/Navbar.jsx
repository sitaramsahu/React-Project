import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Search, User, ShoppingCart, ChevronDown, Link } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update `isScrolled` based on the scroll position
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
        <div>
    <ul className='flex space-x-8 justify-center p-3 bg-slate-200'>
        <li><Instagram /> </li>
        <li><Facebook /> </li>
        <li><Twitter /> </li>
        <li><Linkedin /></li>
        <li><Youtube /></li>
        <p className='font-semibold'>India's Largest : Stationery I Art & Craft Store | <a href="#">Explore Now</a></p>
    </ul>
</div>
    <nav
      className={`sticky top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? "py-0" : "top-24"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <img src="https://asrsnews.in/wp-content/uploads/2025/01/asrs-tagline-1.webp" alt="Stationary" />
              Stationary Logo
            </Link>
          </div>

          {/* Dropdown */}
          <div className=" md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                Menu
                <ChevronDown className="ml-2 -mr-0.5 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/products">Products</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Bar */}
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

          {/* Profile and Cart Icons */}
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">View profile</span>
              <User className="h-6 w-6" />
            </button>
            <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">View shopping cart</span>
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
