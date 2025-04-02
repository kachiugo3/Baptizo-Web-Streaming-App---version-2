import {cn} from "@/lib/utils";

const ProfileIcon = ({
  width = 24,
  height = 24,
  className,
  ...props
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={cn(className)}
      viewBox='0 0 27 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='13.5' cy='14' r='12.5' stroke-width='1.5' />
      <path
        d='M7.875 20.25C10.7896 17.1973 16.179 17.0535 19.125 20.25M16.6189 10.875C16.6189 12.6009 15.2178 14 13.4894 14C11.7611 14 10.36 12.6009 10.36 10.875C10.36 9.14911 11.7611 7.75 13.4894 7.75C15.2178 7.75 16.6189 9.14911 16.6189 10.875Z'
        stroke-width='1.5'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default ProfileIcon;
