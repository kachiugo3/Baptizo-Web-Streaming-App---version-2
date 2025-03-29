import NewPasswordForm from "@/components/Form/NewPasswordForm";
import Image from "next/image";
import React from "react";

const ResetPassword = () => {
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
          <p className='text-2xl font-semibold mt-3 mb-1'>Set new password</p>
          <p className='text-base'>
            Set a new password that is different from the old one
          </p>
        </div>

        <div className='!w-full flex items-center justify-center '>
          <NewPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
