"use client";

import React from "react";
import Image from "next/image";
import LoginForm from "@/components/Form/LoginForm";

const LoginPageLayout = () => {
  return (
    <div className='flex flex-col flex-1 h-full justify-center items-center'>
      <div className='hidden xl:flex flex-col items-center justify-between '>
        <Image
          src='/img/baptizo_light.webp'
          alt='auth_bg-image'
          width={40}
          height={40}
        />
        <p className='text-2xl font-semibold mt-3 mb-1'>Create your account</p>
        <p className='text-base'>Adventure Starts Here</p>
      </div>

      <div className='!max-w-[390px] w-full mt-5'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPageLayout;
