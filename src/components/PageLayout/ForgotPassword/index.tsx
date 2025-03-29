"use client";

import Image from "next/image";
import {useMemo, useState} from "react";
import EmailStep from "@/components/Form/EmailStepForm";
import NewPasswordForm from "@/components/Form/NewPasswordForm";
import {CheckEmail} from "@/components/PageComponent/CheckEmail";

const ForgotPasswordLayout = () => {
  const [step, setStep] = useState(1);
  const [currentEmail, setCurrentEmail] = useState("");

  const headerText = useMemo<{title: string; subtitle: string}>(() => {
    switch (step) {
      case 1:
        return {
          title: "Forgot Password",
          subtitle: "Enter your email to reset password",
        };
      case 2:
        return {
          title: "Check your email for reset link",
          subtitle: `we have sent  an OTP to ${currentEmail}`,
        };

      default:
        return {
          title: "Forgot Password",
          subtitle: "Enter your email to reset password",
        };
    }
  }, [step, currentEmail]);

  return (
    <div className='flex flex-col p-5 lg:p-0 flex-1 pt-5 justify-center items-center overflow-y-scroll'>
      <div className='max-h-[95vh] w-full max-w-[390px] '>
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

        <div className='!w-full flex items-center justify-center '>
          {step === 1 && (
            <EmailStep
              proceed={() => setStep(2)}
              updateEmail={(val) => setCurrentEmail(val)}
            />
          )}
          {step === 2 && <CheckEmail />}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordLayout;
