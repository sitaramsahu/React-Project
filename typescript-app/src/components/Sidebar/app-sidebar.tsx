import LogoImage from "@/assets/images/Logo.jpg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <img
          src={LogoImage}
          className="w-[150px] h-[75] items-center flex flex-col"
        />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavProjects projects={data.projects} /> */}
        My Project
      </SidebarContent>
      <SidebarFooter>
        <SidebarContent>Account</SidebarContent>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
