import {cn} from "@/lib/utils";

const LibraryIcon = ({
  width = 26,
  height = 22,
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
      viewBox='0 0 26 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 5.44444C1 3.88874 1 3.11089 1.32698 2.51669C1.6146 1.99402 2.07354 1.56907 2.63803 1.30276C3.27976 1 4.11984 1 5.8 1C7.48016 1 8.32024 1 8.96197 1.30276C9.52646 1.56907 9.9854 1.99402 10.273 2.51669C10.6 3.11089 10.6 3.88874 10.6 5.44444V16.5556C10.6 18.1113 10.6 18.8891 10.273 19.4833C9.9854 20.006 9.52646 20.4309 8.96197 20.6972C8.32024 21 7.48016 21 5.8 21C4.11984 21 3.27976 21 2.63803 20.6972C2.07354 20.4309 1.6146 20.006 1.32698 19.4833C1 18.8891 1 18.1113 1 16.5556V5.44444Z'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M5.79993 16.5557H5.8119'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M1 5.44434H10.6'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.3384 6.85381C11.9125 5.37598 11.6996 4.63706 11.8462 3.99554C11.9752 3.43125 12.2931 2.91941 12.7542 2.53338C13.2784 2.09453 14.0731 1.89654 15.6625 1.50056C17.2519 1.10458 18.0466 0.906585 18.7366 1.04294C19.3435 1.16289 19.894 1.4584 20.3091 1.88712C20.7811 2.37451 20.9941 3.11343 21.42 4.59126L24.4617 15.1462C24.8876 16.624 25.1005 17.3629 24.9539 18.0045C24.8249 18.5688 24.507 19.0806 24.0459 19.4666C23.5217 19.9055 22.727 20.1035 21.1376 20.4994C19.5482 20.8954 18.7535 21.0934 18.0635 20.9571C17.4566 20.8371 16.9061 20.5416 16.491 20.1129C16.019 19.6255 15.806 18.8866 15.3801 17.4087L12.3384 6.85381Z'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M19.9375 16.217L19.9479 16.2145'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M13 6.55568L20.8002 4.33325'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default LibraryIcon;
