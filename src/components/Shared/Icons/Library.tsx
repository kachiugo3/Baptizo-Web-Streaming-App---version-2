import {cn} from "@/lib/utils";

const LibraryIcon = ({
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
      viewBox='0 0 33 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.5 6.55566C1.5 4.61099 1.5 3.63866 1.90873 2.8959C2.26826 2.24255 2.84195 1.71136 3.54757 1.37846C4.34976 1 5.39987 1 7.50011 1C9.60034 1 10.6505 1 11.4526 1.37846C12.1583 1.71136 12.732 2.24255 13.0915 2.8959C13.5002 3.63866 13.5002 4.61099 13.5002 6.55566V20.4448C13.5002 22.3895 13.5002 23.3618 13.0915 24.1046C12.732 24.7579 12.1583 25.2891 11.4526 25.622C10.6505 26.0005 9.60034 26.0005 7.50011 26.0005C5.39987 26.0005 4.34976 26.0005 3.54757 25.622C2.84195 25.2891 2.26826 24.7579 1.90873 24.1046C1.5 23.3618 1.5 22.3895 1.5 20.4448V6.55566Z'
        fill='white'
        stroke='#494E56'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.5 20.4448H7.51497H7.5Z'
        fill='white'
      />
      <path
        d='M7.5 20.4448H7.51497'
        stroke='#494E56'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M1.5 6.55566H13.5002'
        stroke='#494E56'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M15.673 8.31739C15.1406 6.47007 14.8744 5.54641 15.0577 4.7445C15.219 4.03911 15.6163 3.3993 16.1927 2.91677C16.8479 2.36819 17.8413 2.1207 19.8281 1.62571C21.8149 1.13072 22.8083 0.883229 23.6708 1.05368C24.4295 1.20361 25.1176 1.57301 25.6366 2.10892C26.2266 2.71817 26.4927 3.64183 27.0251 5.48916L30.8273 18.6831C31.3597 20.5304 31.6259 21.454 31.4426 22.256C31.2813 22.9613 30.884 23.6012 30.3076 24.0837C29.6524 24.6323 28.659 24.8798 26.6722 25.3747C24.6854 25.8697 23.692 26.1172 22.8295 25.9468C22.0708 25.7968 21.3827 25.4274 20.8637 24.8915C20.2738 24.2823 20.0076 23.3586 19.4752 21.5113L15.673 8.31739Z'
        fill='white'
        stroke='#494E56'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M25.1719 20.0215L25.1849 20.0183L25.1719 20.0215Z'
        fill='white'
      />
      <path
        d='M25.1719 20.0215L25.1849 20.0183'
        stroke='#494E56'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.5 7.94557L26.2504 5.16748'
        stroke='#494E56'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default LibraryIcon;
