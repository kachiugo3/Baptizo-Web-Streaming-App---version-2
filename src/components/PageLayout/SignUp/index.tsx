"use client";

import React from "react";
import Image from "next/image";
import SignupForm from "@/components/Form/SignupForm";

const SignUpPageLayout = () => {
  return (
    <div className='flex flex-col p-5 lg:p-0 flex-1 pt-5 justify-center items-center overflow-y-scroll hideScrollBar'>
      <div className='max-h-[95vh]'>
        <div className='flex flex-col items-center justify-between '>
          <Image
            src='/img/baptizo_light.webp'
            alt='auth_bg-image'
            width={40}
            height={40}
          />
          <p className='text-2xl font-semibold mt-3 mb-1'>
            Create your account
          </p>
          <p className='text-base'>Adventure Starts Here</p>
        </div>

        <div className='w-full flex  items-center justify-center '>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPageLayout;
