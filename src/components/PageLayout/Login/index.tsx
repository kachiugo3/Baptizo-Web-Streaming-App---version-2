"use client";

import React from "react";
import Image from "next/image";
import LoginForm from "@/components/Form/LoginForm";

const LoginPageLayout = () => {
  return (
    <div className='flex flex-col p-10 lg:p-0 flex-1 pt-5 justify-center items-center overflow-y-scroll hideScrollBar'>
      <div className='max-h-[95vh]'>
        <div className='flex flex-col items-center justify-between '>
          <Image
            src='/svg/baptizo_light_svg.svg'
            className='dark:hidden block'
            alt='baptizo_light_logo'
            width={40}
            height={40}
            priority
          />
          <Image
            src='/svg/baptizo_dark_svg.svg'
            className='hidden dark:block'
            alt='baptizo_dark_logo'
            width={40}
            height={40}
            priority
          />
          <p className='text-2xl font-semibold mt-3 mb-1'>
            Login to your account
          </p>
          <p className='text-base'>Adventure Starts Here</p>
        </div>

        <div className='w-full flex  items-center justify-center '>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPageLayout;
