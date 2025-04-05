import {Star, Play} from "lucide-react";
import Image from "next/image";
import React, {useState} from "react";

const SqDisplyCards = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='group cursor-pointer'>
      <div
        className='relative overflow-hidden rounded-md'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          alt='img'
          width={150}
          height={150}
          src='https://res.cloudinary.com/dgfsobn9i/image/upload/v1743820063/Baptizo/SeriesImg_sn9jme.webp'
          className='w-full h-full object-cover transition-all duration-300 group-hover:scale-105'
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-4 bottom-4 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className='bg-green-200 p-3  rounded-full transform transition-all duration-300 hover:scale-110 cursor-pointer'>
            <Play fill='black' size={22} className='stroke-1 stroke-black' />
          </button>
        </div>
      </div>

      <div className='w-full capitalize mt-2'>
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
