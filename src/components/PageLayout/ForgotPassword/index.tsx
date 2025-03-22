"use client";

import Image from "next/image";
import LoginForm from "@/components/Form/LoginForm";
import {useMemo, useState} from "react";

const ForgotPasswordLayout = () => {
  const [step, setStep] = useState(1);

  const headerText = useMemo<{title: string; subtitle: string}>(() => {
    switch (step) {
      case 1:
        return {
          title: "Forgot Password",
          subtitle: "Enter your email to reset password",
        };
      case 2:
        return {
          title: "Enter verification code",
          subtitle: "we have sent  an OTP to bencarter@gmail.com",
        };
      case 3:
        return {
          title: "Set new password",
          subtitle: "Set a new password that is different from the old one",
        };
      default:
        return {
          title: "Forgot Password",
          subtitle: "Enter your email to reset password",
        };
    }
  }, [step]);

  return (
    <div className='flex flex-col p-5 lg:p-0 flex-1 pt-5 justify-center items-center overflow-y-scroll'>
      <div className='max-h-[95vh]'>
        <div className='flex flex-col items-center justify-between '>
          <Image
            src='/img/baptizo_light.webp'
            alt='auth_bg-image'
            width={40}
            height={40}
          />
          <p className='text-2xl font-semibold mt-3 mb-1'>{headerText.title}</p>
          <p className='text-base'>{headerText.subtitle}</p>
        </div>

        <div className='w-full flex  items-center justify-center '>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordLayout;
