"use client";

import React, {useState} from "react";
import Image from "next/image";
import SignupForm from "@/components/Form/SignupForm";
import {CheckEmail} from "@/components/PageComponent/CheckEmail";

const SignUpPageLayout = () => {
  const [step, setStep] = useState(1);

  const formattedText = {
    title: step === 1 ? "Create your account" : "Check your email",
    subtitle:
      step === 1 ? "Adventure Starts Here" : "We have sent a verification link",
  };

  return (
    <div className='flex flex-col p-5 lg:p-0 flex-1 pt-5 justify-center items-center overflow-y-scroll hideScrollBar'>
      <div className='max-h-[95vh] max-w-[390px] w-full'>
        <div className='flex flex-col items-center justify-between'>
          <Image
            src='/img/baptizo_light.webp'
            alt='auth_bg-image'
            width={40}
            height={40}
          />
          <p className='text-2xl font-semibold mt-3 mb-1'>
            {formattedText.title}
          </p>
          <p className='text-base'>{formattedText.subtitle}</p>
        </div>

        <div className='w-full flex items-center justify-center max-w-[390px]'>
          {step === 1 ? (
            <SignupForm proceed={() => setStep(2)} />
          ) : (
            <CheckEmail />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPageLayout;
