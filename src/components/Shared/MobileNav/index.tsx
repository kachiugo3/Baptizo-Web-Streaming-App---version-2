"use client";

import {useSidebar} from "@/components/ui/sidebar";
import Link from "next/link";
import {useEffect, useMemo, useState} from "react";
import {
  BookOpenIcon,
  DiscoverIcon,
  HomeIcon,
  LibraryIcon,
  ProfileIcon,
} from "../Icons";
import {usePathname} from "next/navigation";
import {useTheme} from "next-themes";

const MobileNav = () => {
  const [renderUI, setRenderUI] = useState(false);
  const {isMobile} = useSidebar();
  const pathName = usePathname();
  const {resolvedTheme} = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      setRenderUI(true);
    }
  }, [resolvedTheme]);

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
    <>
      {isMobile && (
        <div className='absolute bottom-0 border-t !border-t-slate-200 dark:!border-t-slate-600 w-full py-5 px-6 flex flex-1 items-center justify-between h-[80px]'>
          {navItems.map((project, idx) => (
            <Link
              key={idx}
              href={project.url}
              className={`${
                project.isActive
                  ? "!bg-[#02FE0A] p-2 !rounded-full"
                  : "hover:!bg-inherit"
              } transition-all duration-300 ease-in-out relative overflow-hidden `}
            >
              {/* Background transition effect - left to right */}
              <div
                className={`
                    absolute inset-0 bg-[#02FE0A] rounded-full 
                    transition-all duration-300 ease-in-out
                    ${project.isActive ? "w-full" : "w-0"}
                  `}
                style={{zIndex: 0, transformOrigin: "left center"}}
              >
                {" "}
              </div>

              <div
                className='w-full flex items-center relative'
                style={{zIndex: 1}}
              >
                <div className=" className='!h-8 !w-8'">
                  <project.icon
                    className={`${
                      resolvedTheme === "dark" && project.isActive
                        ? "fill-black stroke-green-400 "
                        : resolvedTheme === "dark" && !project.isActive
                        ? "!stroke-white fill-transparent"
                        : resolvedTheme === "light" && project.isActive
                        ? "!stroke-black fill-black"
                        : "stroke-[#494E56] !fill-transparent"
                    } 
                    'stroke-[1.5]' transition-all duration-300 ease-in-out`}
                  />
                </div>
                {project.isActive && (
                  <span
                    className={`${project.isActive ? "ml-1" : ""} 
                    text-xs dark:text-black transition-opacity duration-300 ease-in-out`}
                  >
                    {project.title}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNav;
