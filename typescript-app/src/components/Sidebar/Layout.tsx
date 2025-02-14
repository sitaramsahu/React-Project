"use client";
import {
  Home,
  Upload,
  Settings,
  LogOut,
  Search,
  Bell,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex  bg-gray-100">
        <Sidebar>
          <SidebarHeader className="p-4">
            <h1 className="text-xl font-bold">My App</h1>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/">
                    <Home className="mr-2" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/upload">
                    <Upload className="mr-2" />
                    <span>Upload</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings">
                    <Settings className="mr-2" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LogOut className="mr-2" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Sticky Navbar */}
          <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center">
                <SidebarTrigger className="mr-4 " />
                <h1 className="text-lg font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-full"
                  />
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Bell size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <User size={20} />
                </Button>
              </div>
            </div>
          </header>
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
