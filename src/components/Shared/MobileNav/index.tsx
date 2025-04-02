"use client";

import {useSidebar} from "@/components/ui/sidebar";
import Link from "next/link";
import {useMemo} from "react";
import {
  BookOpenIcon,
  DiscoverIcon,
  HomeIcon,
  LibraryIcon,
  ProfileIcon,
} from "../Icons";
import {usePathname} from "next/navigation";

const MobileNav = () => {
  const {isMobile} = useSidebar();
  const pathName = usePathname();

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
    <>
      {isMobile && (
        <div className='absolute bottom-0 border-t !border-t-slate-200 w-full py-3 px-6 flex flex-1 justify-between'>
          {navItems.map((project, idx) => (
            <Link
              key={idx}
              href={project.url}
              className={`${
                project.isActive ? "!bg-[#02FE0A] p-2 px-3 !rounded-full" : ""
              } h-10 flex items-center`}
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
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNav;
