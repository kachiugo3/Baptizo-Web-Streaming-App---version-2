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

  let src;
  switch (resolvedTheme) {
    case "light":
      src =
        "https://res.cloudinary.com/dgfsobn9i/image/upload/v1743607977/Baptizo/baptizo_light_lso6yv.webp";
      break;
    case "dark":
      src =
        "https://res.cloudinary.com/dgfsobn9i/image/upload/v1743607952/Baptizo/baptizo_dark_gi9yxb.webp";
      break;
    default:
      src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAQxklEQVR4AQCBAH7/AAT7CgAE+woABPsKAAT7CgAE+woABPsKAAT7CgAE+woKBPsKFgT7CiEE+wosBPsKNgT7Cj8E+wpHBPsKTwT7ClQE+wpYBPsKWgT7CloE+wpXBPsKUAT7CkcE+wo7BPsKKwT7ChoE+woHBPsKAAT7CgAE+woABPsKAAT7CgAE+woAAIEAfv8ABPsKAAT7CgAE+woABPsKAAT7CgAE+woFBPsKEAT7ChsE+wonBPsKMgT7CjwE+wpGBPsKTwT7ClYE+wpdBPsKYwT7CmcE+wppBPsKaAT7CmUE+wpfBPsKVgT7CkoE+wo7BPsKKgT7ChgE+woFBPsKAAT7CgAE+woABPsKAAT7CgAAgQB+/wAE+woGBPsKCQT7Cg4E+woVBPsKHQT7CicE+woxBPsKOwT7CkYE+wpQBPsKWgT7CmME+wprBPsKcgT7CngE+wp9BPsKgQT7CoME+wqDBPsKgAT7CnsE+wpyBPsKZgT7ClgE+wpIBPsKNgT7CiQE+woSBPsKAgT7CgAE+woABPsKAACBAH7/AAT7CjYE+wo4BPsKPQT7CkME+wpLBPsKUwT7ClwE+wpmBPsKbwT7CngE+wqABPsKiAT7Co8E+wqWBPsKmwT7CqAE+wqjBPsKpQT7CqUE+wqjBPsKngT7CpYE+wqMBPsKfgT7Cm8E+wpeBPsKTQT7CjwE+wotBPsKIQT7ChgE+woTAIEAfv8ABPsKbAT7Cm4E+wpxBPsKdwT7Cn0E+wqFBPsKjAT7CpQE+wqcBPsKowT7CqoE+wqxBPsKtgT7CrwE+wrBBPsKxQT7CsgE+wrKBPsKygT7CsgE+wrEBPsKvQT7CrME+wqnBPsKmQT7CooE+wp6BPsKagT7ClwE+wpRBPsKSAT7CkQAgQB+/wAE+wqgBPsKoQT7CqQE+wqpBPsKrgT7CrQE+wq6BPsKwAT7CsYE+wrMBPsK0QT7CtYE+wraBPsK3gT7CuIE+wrlBPsK6AT7CuoE+wrqBPsK6QT7CuYE+wrgBPsK2AT7Cs0E+wrBBPsKswT7CqUE+wqWBPsKiQT7Cn8E+wp3BPsKcwCBAH7/AAT7CswE+wrNBPsK0AT7CtME+wrXBPsK2wT7CuAE+wrkBPsK6AT7CusE+wruBPsK8QT7CvQE+wr2BPsK+QT7CvwE+wr+BPsK/wT7Cv8E+wr/BPsK/gT7CvoE+wrzBPsK6gT7CuAE+wrUBPsKxwT7CroE+wqvBPsKpQT7Cp4E+wqbAIEAfv8ABPsK6wT7CuwE+wruBPsK8AT7CvME+wr1BPsK+AT7CvoE+wr7BPsK/QT7Cv4E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr6BPsK8QT7CucE+wrcBPsK0QT7CscE+wq/BPsKuQT7CrUAgQB+/wAE+wr6BPsK+wT7CvwE+wr9BPsK/gT7Cv8E+wr/BPsK/wT7Cv8E+wr+BPsK/QT7CvwE+wr7BPsK+wT7CvsE+wr8BPsK/gT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7CvoE+wrzBPsK6wT7CuIE+wrZBPsK0AT7CskE+wrEBPsKwQCBAH7/AAT7CvgE+wr5BPsK+QT7CvkE+wr4BPsK+AT7CvYE+wr0BPsK8gT7Cu8E+wrsBPsK6QT7CuYE+wrkBPsK5AT7CuQE+wrlBPsK5wT7CuoE+wrsBPsK7QT7Cu0E+wrsBPsK6QT7CuUE+wrfBPsK2AT7CtAE+wrJBPsKwwT7Cr8E+wq9AIEAfv8ABPsK5wT7CucE+wrnBPsK5gT7CuQE+wriBPsK3gT7CtsE+wrWBPsK0QT7CswE+wrHBPsKwwT7CsAE+wq+BPsKvgT7Cr8E+wrBBPsKxAT7CscE+wrKBPsKzAT7CswE+wrLBPsKyQT7CsUE+wrABPsKugT7CrUE+wqwBPsKrAT7CqoAgQB+/wAE+wrLBPsKygT7CskE+wrHBPsKxAT7CsEE+wq8BPsKtgT7CrAE+wqpBPsKogT7CpwE+wqXBPsKkgT7CpAE+wqPBPsKkAT7CpIE+wqVBPsKmQT7Cp0E+wqhBPsKowT7CqQE+wqjBPsKoQT7Cp4E+wqaBPsKlgT7CpME+wqQBPsKjgCBAH7/AAT7CqgE+wqoBPsKpgT7CqME+wqfBPsKmgT7CpQE+wqNBPsKhgT7Cn0E+wp1BPsKbQT7CmcE+wpiBPsKXgT7Cl0E+wpeBPsKYAT7CmQE+wppBPsKbgT7CnIE+wp2BPsKeQT7CnoE+wp6BPsKeQT7CnYE+wp0BPsKcQT7Cm8E+wpuAIEAfv8ABPsKhgT7CoUE+wqDBPsKgAT7CnsE+wp1BPsKbgT7CmYE+wpdBPsKVAT7CkoE+wpBBPsKOgT7CjQE+wowBPsKLgT7Ci8E+woyBPsKNgT7CjsE+wpCBPsKRwT7Ck0E+wpRBPsKVAT7ClUE+wpVBPsKVQT7ClME+wpRBPsKUAT7Ck8AgQB+/wAE+wpqBPsKaQT7CmYE+wpiBPsKXQT7ClcE+wpPBPsKRgT7CjwE+woyBPsKKAT7Ch4E+woWBPsKEAT7CgsE+woJBPsKCgT7Cg0E+woSBPsKGAT7Ch8E+womBPsKLAT7CjIE+wo2BPsKOQT7CjoE+wo6BPsKOgT7CjkE+wo4BPsKOACBAH7/AAT7ClgE+wpXBPsKVAT7ClAE+wpLBPsKRAT7CjwE+wozBPsKKQT7Ch4E+woTBPsKCQT7CgAE+woABPsKAAT7CgAE+woABPsKAAT7CgAE+woDBPsKCgT7ChIE+woZBPsKIAT7CiUE+wopBPsKKwT7Ci0E+wotBPsKLQT7Ci0E+wosAIEAfv8ABPsKVAT7ClME+wpQBPsKTAT7CkcE+wpABPsKOAT7Ci8E+wokBPsKGgT7Cg8E+woFBPsKAAT7CgAE+woABPsKAAT7CgAE+woABPsKAAT7CgAE+woHBPsKDwT7ChcE+woeBPsKJAT7CikE+wosBPsKLgT7Ci8E+wovBPsKLwT7Ci8AgQB+/wAE+wpeBPsKXQT7ClsE+wpXBPsKUgT7CkwE+wpEBPsKOwT7CjEE+womBPsKHAT7ChIE+woJBPsKAgT7CgAE+woABPsKAAT7CgAE+woFBPsKDQT7ChUE+wodBPsKJgT7Ci0E+wo0BPsKOQT7CjwE+wo+BPsKQAT7CkAE+wpABPsKQACBAH7/AAT7CnUE+wp0BPsKcgT7Cm8E+wpqBPsKZAT7Cl0E+wpVBPsKSwT7CkEE+wo4BPsKLgT7CiYE+wofBPsKGwT7ChkE+woaBPsKHgT7CiME+woqBPsKMgT7CjsE+wpDBPsKSwT7ClEE+wpWBPsKWgT7ClwE+wpdBPsKXgT7Cl4E+wpeAIEAfv8ABPsKlQT7CpQE+wqTBPsKkAT7CowE+wqHBPsKgQT7CnkE+wpxBPsKaAT7Cl8E+wpWBPsKTgT7CkgE+wpFBPsKQwT7CkQE+wpHBPsKTQT7ClQE+wpbBPsKZAT7CmwE+wpzBPsKeQT7Cn4E+wqBBPsKgwT7CoQE+wqEBPsKhAT7CoQAgQB+/wAE+wq5BPsKuAT7CrcE+wq1BPsKsgT7Cq4E+wqpBPsKowT7CpwE+wqUBPsKjAT7CoQE+wp9BPsKeAT7CnQE+wpzBPsKdAT7CncE+wp8BPsKgwT7CooE+wqSBPsKmQT7CqAE+wqlBPsKqQT7CqwE+wquBPsKrgT7Cq4E+wquBPsKrgCBAH7/AAT7CtsE+wrbBPsK2gT7CtkE+wrXBPsK1AT7CtEE+wrMBPsKxgT7Cr8E+wq5BPsKsgT7CqwE+wqoBPsKpQT7CqME+wqkBPsKpwT7CqwE+wqyBPsKuQT7CsAE+wrGBPsKzAT7CtAE+wrTBPsK1QT7CtYE+wrWBPsK1gT7CtUE+wrVAIEAfv8ABPsK9gT7CvYE+wr2BPsK9gT7CvUE+wr0BPsK8QT7Cu4E+wrqBPsK5QT7CuAE+wraBPsK1QT7CtEE+wrPBPsKzgT7Cs8E+wrSBPsK1gT7CtsE+wrhBPsK5wT7CuwE+wrxBPsK9AT7CvYE+wr3BPsK9wT7CvYE+wr1BPsK9AT7CvQAgQB+/wAE+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/AT7CvgE+wr0BPsK8QT7Cu8E+wruBPsK7wT7CvIE+wr1BPsK+gT7Cv4E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wCBAH7/AAT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/AIEAfv8ABPsK+wT7CvwE+wr+BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv4AgQB+/wAE+wrjBPsK5AT7CucE+wrrBPsK7wT7CvME+wr3BPsK+gT7CvwE+wr+BPsK/gT7Cv4E+wr9BPsK/AT7CvwE+wr8BPsK/AT7Cv0E+wr/BPsK/wT7Cv8E+wr/BPsK/wT7Cv8E+wr/BPsK/AT7CvcE+wrzBPsK7gT7CusE+wroBPsK5gCBAH7/AAT7CsME+wrEBPsKxwT7CswE+wrRBPsK1gT7CtsE+wrgBPsK5AT7CuYE+wroBPsK6QT7CukE+wrpBPsK6QT7CukE+wrpBPsK6gT7CusE+wrrBPsK7AT7CusE+wrqBPsK5wT7CuQE+wrfBPsK2gT7CtQE+wrPBPsKygT7CscE+wrFAIEAfv8ABPsKnwT7CqEE+wqlBPsKqgT7CrAE+wq2BPsKvAT7CsIE+wrHBPsKygT7Cs0E+wrPBPsK0AT7CtAE+wrQBPsK0AT7CtEE+wrRBPsK0QT7CtEE+wrRBPsKzwT7Cs0E+wrJBPsKxAT7Cr8E+wq4BPsKsgT7CqwE+wqnBPsKowT7CqEAgQB+/wAE+wp+BPsKgAT7CoQE+wqKBPsKkAT7CpcE+wqeBPsKpQT7CqsE+wqvBPsKswT7CrUE+wq3BPsKtwT7CrgE+wq4BPsKuAT7CrgE+wq4BPsKtwT7CrYE+wq0BPsKsQT7CqwE+wqmBPsKoAT7CpkE+wqRBPsKiwT7CoUE+wqBBPsKfwCBAH7/AAT7CmQE+wpnBPsKawT7CnEE+wp4BPsKgAT7CocE+wqPBPsKlQT7CpoE+wqeBPsKoQT7CqME+wqkBPsKpAT7CqUE+wqlBPsKpAT7CqQE+wqjBPsKoQT7Cp4E+wqbBPsKlQT7Co8E+wqIBPsKgAT7CngE+wpxBPsKawT7CmcE+wplAYEAfv8ABPsKVwT7ClkE+wpdBPsKYwT7CmsE+wpzBPsKewT7CoIE+wqJBPsKjgT7CpME+wqWBPsKmAT7CpkE+wqaBPsKmgT7CpoE+wqaBPsKmQT7CpgE+wqWBPsKkwT7Co4E+wqJBPsKggT7CnsE+wpzBPsKawT7CmME+wpdBPsKWQT7ClfBL4Z9ZYlYLAAAAABJRU5ErkJggg==";
      break;
  }

  if (!renderUI) return null;

  return (
    <Sidebar
      collapsible='icon'
      {...props}
      className='py-[30px] px-4 !overflow-hidden hideScrollBar !border-r-slate-200 dark:!border-r-[#403f3f9f] '
    >
      <SidebarHeader className='flex items-center justify-between '>
        <Image src={src} alt='baptizo_logo' width='32' height='35' />
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
                      <project.icon
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
