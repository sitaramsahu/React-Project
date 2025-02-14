import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      <SidebarInset>
        <Header />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
