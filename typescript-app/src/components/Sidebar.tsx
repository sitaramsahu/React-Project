import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Utility for combining class names (from shadcn/ui or similar)
import Link from "react-dom"; // Example using next/link (or your routing library)

// Define default theme styles (can be overridden)
const defaultTheme = {
  sidebar:
    "bg-gray-100 w-64 h-screen fixed top-0 left-0 transition-transform duration-300",
  overlay:
    "fixed top-0 left-0 w-full h-full bg-black/50 z-40 transition-opacity duration-300",
  content: "p-4",
  item: "block py-2 text-gray-800 hover:bg-gray-200 hover:text-black rounded",
  activeItem: "bg-blue-500 text-white",
  button:
    "fixed top-4 left-4 z-50 bg-gray-200 p-2 rounded-md hover:bg-gray-300",
};

const Sidebar = ({
  isOpen,
  onClose,
  theme = {}, // Allow custom theme overrides
  items = [], // Array of sidebar items with labels and links
}) => {
  const mergedTheme = { ...defaultTheme, ...theme }; // Merge default and custom themes
  const [activeItem, setActiveItem] = useState(null); // Keep track of the active item

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (onClose && isOpen) {
      onClose(); // Close sidebar on item click (optional)
    }
  };

  return (
    <div>
      {/* Overlay (for closing sidebar on click) */}
      {isOpen && (
        <div
          className={cn(
            mergedTheme.overlay,
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={cn(
          mergedTheme.sidebar,
          isOpen ? "translate-x-0 z-50" : "-translate-x-full" // Slide in/out animation
        )}
      >
        <div className={mergedTheme.content}>
          {/* Dynamically render items from the 'items' prop */}
          {items.map((item) => (
            <Link href={item.link} key={item.label} passHref legacyBehavior>
              {" "}
              {/* Use legacyBehavior for next/link in older versions */}
              <a // Important: Wrap with <a> tag for next/link
                className={cn(
                  mergedTheme.item,
                  activeItem === item.label && mergedTheme.activeItem // Apply active style
                )}
                onClick={() => handleItemClick(item.label)}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </aside>

      {/* Button to toggle the sidebar */}
      <button className={mergedTheme.button} onClick={onClose}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Sidebar;

// Example usage:
import Sidebar from "./Sidebar";
import { useState } from "react";

const MyPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { label: "Home", link: "/home" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Profile", link: "/profile" }, // Example with a different link
  ];

  return (
    <div>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        items={sidebarItems}
      >
        {/* No longer need to pass children here */}
      </Sidebar>

      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {/* ... rest of your page content */}
    </div>
  );
};

export default MyPage;
