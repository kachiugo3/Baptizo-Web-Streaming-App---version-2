"use client";

import {Star} from "lucide-react";
import Image from "next/image";
import React from "react";

const RectangularCards = () => {
  return (
    <div className='bg-white dark:bg-[#393D43] rounded-md p-3 flex gap-x-1 w-full'>
      <div className='w-2/5'>
        <Image
          src='https://res.cloudinary.com/dgfsobn9i/image/upload/v1743779808/Baptizo/podcast_img_eitdzw.png'
          alt='img'
          priority
          width={150}
          height={150}
          className='rounded-md object-cover object-center'
        />
      </div>
      <div className='w-3/5'>
        <p className='text-lg font-semibold text-foreground'>The Great Gasby</p>

        <p className='text-[#494E56] dark:text-[#D0D0D0] text-sm'>
          Rachel hartman
        </p>
        <div>
          <div className='flex items-center gap-x-1 my-1'>
            <>
              {[1, 2, 3].map((_, idx) => {
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
          <span className='text-xs text-[#494E56] dark:text-[#D0D0D0]'>
            {" "}
            30 Reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default RectangularCards;
