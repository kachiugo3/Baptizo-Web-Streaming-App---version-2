"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";

import {ArrowRight} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
  BookOpenIcon,
  DiscoverIcon,
  HomeIcon,
  LibraryIcon,
  ProfileIcon,
} from "../Icons";
import {usePathname, useRouter} from "next/navigation";
import {useMemo} from "react";
import {ModeToggle} from "../ThemeSwitcher";
import {Logout} from "@/api/authActions";
import {useAppContext} from "@/context/AuthContext";
import {useMutation} from "@tanstack/react-query";

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();
  const {dispatch} = useAppContext();
  const router = useRouter();

  const {mutate} = useMutation({
    mutationFn: Logout,
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const logOut = () => {
    mutate();
  };

  const navItems = useMemo(
    () => [
      {
        title: "Home",
        url: "/home",
        icon: HomeIcon,
        isActive: pathName.includes("/home"),
      },
      {
        title: "Library",
        url: "/library",
        icon: LibraryIcon,
        isActive: pathName.includes("/library"),
      },
      {
        title: "AudioBooks",
        url: "/series",
        icon: BookOpenIcon,
        isActive: pathName.includes("/series"),
      },
      {
        title: "Discover",
        url: "/discover",
        icon: DiscoverIcon,
        isActive: pathName.includes("/discover"),
      },
      {
        title: "Profile",
        url: "/profile",
        icon: ProfileIcon,
        isActive: pathName.includes("/profile"),
      },
    ],
    [pathName],
  );

  return (
    <Sidebar
      collapsible='icon'
      {...props}
      className='py-[30px] px-4 !overflow-hidden hideScrollBar !border-r-slate-200 dark:!border-r-[#403f3f9f] '
    >
      <SidebarHeader className='flex items-center justify-between '>
        <Image
          src='/img/baptizo_light.webp'
          alt='baptizo_logo'
          width='32'
          height='35'
        />
      </SidebarHeader>

      <SidebarContent className='mt-[117px]'>
        <SidebarMenu>
          {navItems.map((project, idx) => (
            <SidebarMenuItem key={idx}>
              <SidebarMenuButton asChild>
                <Link
                  href={project.url}
                  className={`${
                    project.isActive ? "!bg-[#02FE0A] p-2 !rounded-full" : ""
                  }`}
                >
                  <div className='w-full flex items-center'>
                    <div className=" className='!h-8 !w-8'">
                      <project.icon
                        className={`${project.isActive && "w-5 h-5 mr-1 "}`}
                      />
                    </div>
                    {project.isActive && (
                      <span className='text-xs dark:text-black'>
                        {project.title}
                      </span>
                    )}
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className='flex flex-col flex-1 gap-y-2 items-center '>
          <ModeToggle />
          <Button variant='ghost' asChild onClick={() => logOut()}>
            <div className='!rounded-full flex justify-center items-center w-9 h-9 !bg-white dark:!bg-transparent !border !border-border !p-1'>
              <ArrowRight />
            </div>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
