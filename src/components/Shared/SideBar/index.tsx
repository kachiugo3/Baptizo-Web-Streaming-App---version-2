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
import {usePathname} from "next/navigation";
import {useEffect, useMemo, useState} from "react";
import {ModeToggle} from "../ThemeSwitcher";
import {Logout} from "@/api/authActions";
import {useMutation} from "@tanstack/react-query";
import {useTheme} from "next-themes";

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  const [renderUI, setRenderUI] = useState(false);
  const pathName = usePathname();
  const {resolvedTheme} = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      setRenderUI(true);
    }
  }, [resolvedTheme]);

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

  if (!renderUI) return null;

  return (
    <Sidebar
      collapsible='icon'
      {...props}
      className='py-[30px] px-4 !overflow-hidden hideScrollBar !border-r-slate-200 dark:!border-r-[#403f3f9f] '
    >
      <SidebarHeader className='flex items-center justify-between '>
        <Image
          src='/svg/baptizo_light_svg.svg'
          className='dark:hidden block'
          alt='baptizo_light_logo'
          width={32}
          height={32}
          priority
        />
        <Image
          src='/svg/baptizo_dark_svg.svg'
          className='hidden dark:block'
          alt='baptizo_dark_logo'
          width={32}
          height={32}
          priority
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
                    project.isActive
                      ? "!bg-[#02FE0A] p-2 !rounded-full"
                      : "hover:!bg-inherit"
                  } transition-all duration-100 ease-in-out relative overflow-hidden`}
                >
                  {/* Background transition effect - left to right */}
                  <div
                    className={`
                      absolute inset-0 bg-[#02FE0A] rounded-full 
                      transition-all duration-200 ease-in-out
                      ${project.isActive ? "w-full" : "w-0"}
                    `}
                    style={{zIndex: 0, transformOrigin: "left center"}}
                  >
                    {" "}
                  </div>

                  <div
                    className='w-full flex !items-center relative'
                    style={{zIndex: 1}}
                  >
                    <div className=" className='!h-8 !w-8'">
                      {/* <project.icon
                        className={`${project.isActive && "w-5 h-5 mr-1"} ${
                          resolvedTheme === "dark" && project.isActive
                            ? "fill-black  stroke-green-400 "
                            : resolvedTheme === "dark" && !project.isActive
                            ? "!stroke-white fill-transparent"
                            : resolvedTheme === "light" && project.isActive
                            ? "!stroke-black fill-black"
                            : "stroke-[#494E56] !fill-transparent"
                        }'!stroke-[1.5]'  ${
                          project.title === "AudioBooks" &&
                          project.isActive &&
                          "!w-4 !h-5"
                        } transition-all duration-300 ease-in-out`}
                      /> */}
                      <project.icon
                        className={`
                          transition-all duration-300 ease-in-out !stroke-[1.5]
                          ${project.isActive ? "w-5 h-5 mr-1" : ""}
                          ${
                            project.title === "AudioBooks" && project.isActive
                              ? "!w-4 !h-5"
                              : ""
                          }
                          ${
                            project.isActive
                              ? "dark:!stroke-green-400 dark:fill-black stroke-green-300 fill-black !stroke-[1.5]"
                              : "dark:!stroke-white dark:fill-transparent stroke-[#494E56] fill-transparent !stroke-[1.5]"
                          }
                        `}
                      />
                    </div>
                    {project.isActive && (
                      <span
                        className={`text-xs dark:text-black ${
                          project.title === "AudioBooks" && "!text-[10px]"
                        } ${
                          project.isActive && "!font-semibold"
                        } transition-opacity duration-300 ease-in-out`}
                      >
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
