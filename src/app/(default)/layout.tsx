import MobileNav from "@/components/Shared/MobileNav";
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
        <main className='w-full'>{children}</main>
        <MobileNav />
      </SidebarProvider>
    </div>
  );
};

export default defaultLayout;
