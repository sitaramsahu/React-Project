import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const Layout: React.FC<SidebarProps> = ({ sidebarOpen }) => (
  <aside
    className={`absolute top-12 left-0 w-64 h-full p-4 transition-transform duration-300 ease-in-out 
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      bg-transparent backdrop-blur-md`}
    // style={{ background: "none" }}
  >
    {sidebarOpen && (
      <ul className="bg-white/10 p-4 rounded-lg backdrop-blur-md">
        <li>
          <a href="#" className="block p-2 hover:text-blue-500">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:text-blue-500">
            Profile
          </a>
        </li>
        <li>
          <Drawer>
            <DrawerTrigger asChild>
              <a href="#" className="block p-2 hover:text-blue-500">
                Working
              </a>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </li>

        <li>
          <a href="#" className="block p-2 hover:text-blue-500">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:text-blue-500">
            Logout
          </a>
        </li>
      </ul>
    )}
  </aside>
);

export default Layout;
