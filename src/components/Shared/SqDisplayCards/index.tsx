import {Star} from "lucide-react";
import Image from "next/image";
import React from "react";

const SqDisplyCards = () => {
  return (
    <div>
      <div>
        <Image
          alt='img'
          width={150}
          height={150}
          src='https://res.cloudinary.com/dgfsobn9i/image/upload/v1743820063/Baptizo/SeriesImg_sn9jme.webp'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full capitalize'>
        <p className='text-sm font-semibold text-foreground truncate'>
          the maze runner(volume 2 epi 02)
        </p>

        <p className='text-[#494E56] dark:text-[#D0D0D0] text-sm'>
          Rachel hartman
        </p>
        <div>
          <div className='flex items-center gap-x-1 my-1'>
            <>
              {[1, 2, 3, 4].map((_, idx) => {
                return (
                  <Star
                    key={idx}
                    size={14}
                    className='text-yellow-500 fill-yellow-400'
                  />
                );
              })}
            </>
            <p className='text-sm text-[#494E56] dark:text-[#D0D0D0] font-medium'>
              4.5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SqDisplyCards;
