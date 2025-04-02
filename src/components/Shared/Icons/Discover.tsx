import {cn} from "@/lib/utils";

const DiscoverIcon = ({
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
      viewBox='0 0 33 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.5 31C24.7843 31 31.5 24.2843 31.5 16C31.5 7.71573 24.7843 1 16.5 1C8.21573 1 1.5 7.71573 1.5 16C1.5 24.2843 8.21573 31 16.5 31Z'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M15.345 12.2317L21.5 11L20.2683 17.155C20.1394 17.8001 19.8225 18.3927 19.3574 18.858C18.8924 19.3233 18.3 19.6407 17.655 19.77L11.5 21L12.7317 14.845C12.8609 14.2002 13.178 13.608 13.643 13.143C14.108 12.678 14.7002 12.3609 15.345 12.2317Z'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default DiscoverIcon;
