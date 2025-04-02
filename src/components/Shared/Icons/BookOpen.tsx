import {cn} from "@/lib/utils";

const BookOpenIcon = ({
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
      viewBox='0 0 29 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.47343 1.38058C10.9284 2.2288 13.5835 4.00308 14.4993 5.02171C15.4152 4.00308 18.0703 2.2288 22.5253 1.38058C24.7822 0.950871 25.9106 0.736017 26.8716 1.55952C27.8327 2.38303 27.8327 3.7203 27.8327 6.39482V16.0066C27.8327 18.4521 27.8327 19.6748 27.2159 20.4382C26.5991 21.2016 25.2411 21.4602 22.5253 21.9773C20.1042 22.4382 18.2148 23.1727 16.8471 23.9108C15.5015 24.6369 14.8287 25 14.4993 25C14.17 25 13.4972 24.6369 12.1516 23.9108C10.7839 23.1727 8.89445 22.4382 6.47343 21.9773C3.75755 21.4602 2.39961 21.2016 1.78281 20.4382C1.16602 19.6748 1.16602 18.4521 1.16602 16.0066V6.39482C1.16602 3.7203 1.16602 2.38303 2.12706 1.55952C3.0881 0.736017 4.21655 0.950871 6.47343 1.38058Z'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14.5 5L14.5 23.6667'
        stroke-width='1.5'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default BookOpenIcon;
