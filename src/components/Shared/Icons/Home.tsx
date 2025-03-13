import {cn} from "@/lib/utils";

const HomeIcon = ({
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
      viewBox='0 0 27 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.5822 3.43511L1.81882 10.2284C1.15306 10.811 1.59944 11.8457 2.51651 11.8457C3.07679 11.8457 3.53098 12.2652 3.53098 12.7827V17.1074C3.53098 20.828 3.53098 22.6883 4.78235 23.8442C6.03372 25 8.04776 25 12.0759 25H14.9241C18.9522 25 20.9663 25 22.2177 23.8442C23.469 22.6883 23.469 20.828 23.469 17.1074V12.7827C23.469 12.2652 23.9232 11.8457 24.4835 11.8457C25.4006 11.8457 25.8469 10.811 25.1812 10.2284L17.4178 3.43511C15.5626 1.8117 14.635 1 13.5 1C12.365 1 11.4374 1.8117 9.5822 3.43511Z'
        stroke='#292D32'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M13.5 18.333H13.512'
        stroke='#292D32'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default HomeIcon;
