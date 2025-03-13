import {AppSidebar} from "@/components/Shared/SideBar";
import {SidebarProvider} from "@/components/ui/sidebar";

const defaultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main>{children}</main>
      </SidebarProvider>
    </div>
  );
};

export default defaultLayout;
