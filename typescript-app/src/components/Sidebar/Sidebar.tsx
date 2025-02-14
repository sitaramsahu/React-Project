import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

const Sidebar = () => {
  // State to track sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Open/Close Button (Hamburger menu for mobile) */}
      <button className="lg:hidden p-2 text-white" onClick={toggleSidebar}>
        <span className="material-icons">{isOpen ? "close" : "menu"}</span>
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-64 w-full bg-gray-800 text-white p-6 h-full transition-all duration-300 ${
          isOpen ? "block" : "hidden lg:block"
        }`}
      >
        {/* Logo Section */}
        <div className="mb-8 text-center">
          <img
            src="https://asrsnews.in/wp-content/uploads/2025/02/icon-github.jpg" // GitHub Logo URL
            alt="Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">Sidebar</h2>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <div className="space-y-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="block p-2 rounded-md hover:bg-gray-700 lg:text-xl text-lg"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="block p-2 rounded-md hover:bg-gray-700 lg:text-xl text-lg"
              >
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="block p-2 rounded-md hover:bg-gray-700 lg:text-xl text-lg"
              >
                Profile
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="block p-2 rounded-md hover:bg-gray-700 lg:text-xl text-lg"
              >
                Logout
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Sidebar;
