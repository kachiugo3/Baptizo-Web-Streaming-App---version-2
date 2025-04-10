import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import React from "react";

interface SubtitleBlockProps {
  subtitle: string;
  link: string;
  linkText?: string;
  className?: string;
}

const SubtitleBlock: React.FC<SubtitleBlockProps> = ({
  subtitle,
  link,
  linkText,
  className = "",
}) => {
  return (
    <div className={cn("flex items-center justify-between mb-2", className)}>
      <p className='text-xl text-foreground font-semibold'>{subtitle}</p>
      <Link
        href={link}
        className='cursor-pointer flex items-center text-[#9498A3] font-semibold hover:text-black'
      >
        {linkText || "See All"}
        <ArrowRight className='ml-2' size={16} />
      </Link>
    </div>
  );
};

export default SubtitleBlock;
