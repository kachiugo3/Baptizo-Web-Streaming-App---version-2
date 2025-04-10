"use client";
import {motion} from "framer-motion";
import Image from "next/image";

const Loader = () => {
  const text = "Baptizo";

  const letterVariants = {
    hidden: {opacity: 0, y: 20},
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh] bg-background'>
      <div className='flex flex-col gap-y-2 items-center'>
        <Image
          src='/svg/baptizo_light_svg.svg'
          className='dark:hidden block'
          alt='baptizo_light_logo'
          width={100}
          height={100}
          priority
        />
        <Image
          src='/svg/baptizo_dark_svg.svg'
          className='hidden dark:block'
          alt='baptizo_dark_logo'
          width={100}
          height={100}
          priority
        />

        <div className='flex overflow-hidden'>
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial='hidden'
              animate='visible'
              className='font-bold tracking-wider text-4xl'
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
