import {HeartIcon, Play, Share2, StarIcon} from "lucide-react";

import React from "react";

const DiscoverCardBlock = () => {
  return (
    <div className='h-full !w-full flex flex-col'>
      {/* <div className='flex-[0.80] min-h-0 w-full rounded-lg border overflow-hidden'>
        <div className='relative !w-full !h-full'>
          <img
            src='https://res.cloudinary.com/dgfsobn9i/image/upload/v1743779808/Baptizo/podcast_img_eitdzw.png'
            alt='img'
            className='rounded-lg object-cover object-center absolute'
            style={{width: "100%", height: "100%"}}
          />
          <div className='flex  items-center justify-center w-12 h-12 absolute rounded-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Play className='fill-black' />
          </div>
          <div className='flex  items-center justify-center w-12 h-12 absolute rounded-full bg-white right-9 top-4'>
            <HeartIcon className='stroke-black' size={20} />
          </div>
        </div>
      </div> */}

      <div
        className='flex-[0.80] min-h-0 w-full rounded-lg border overflow-hidden relative'
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgfsobn9i/image/upload/v1743111434/Baptizo/AuthImg_3_dtjkmj.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        }}
      >
        <div className='w-full h-full'></div>

        <div className='flex items-center !cursor-pointer justify-center w-12 h-12 absolute rounded-full bg-green-200  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Play className='fill-black stroke-black' size={20} />
        </div>

        <div className='flex items-center !cursor-pointer justify-center w-12 h-12 absolute rounded-full bg-white right-9 top-4'>
          <HeartIcon className='stroke-black' size={20} />
        </div>
      </div>

      <div className='flex-[0.19] w-full py-3 overflow-hidden'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-bold truncate capitalize'>
            storm of war (The levitators chronicles)
          </h2>
          <Share2 />
        </div>
        <p className='text-sm line-clamp-2 text-[#494E56] dark:text-[#b2afaf] text-[18px]'>
          Sachel hartman
        </p>
        <div className='flex items-center gap-x-2 mt-1 z-[9999]'>
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className='flex items-center  gap-x-1 '>
              <StarIcon className='text-yellow-500 fill-yellow-400' size={16} />
            </div>
          ))}
          <span className='text-sm text-foreground font-medium'>4.5</span>

          <span className='text-sm  text-[#494E56] dark:text-[#b2afaf] font-medium'>
            (30 reviews)
          </span>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default DiscoverCardBlock;
