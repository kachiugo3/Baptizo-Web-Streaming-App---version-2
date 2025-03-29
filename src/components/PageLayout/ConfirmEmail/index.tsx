"use client";

import React, {useEffect, useState, useMemo} from "react";
import Image from "next/image";
import {CheckEmail} from "@/components/PageComponent/CheckEmail";
import {useSearchParams, useRouter} from "next/navigation";
import {toast} from "sonner";
import {verifyEmail} from "@/api/authActions";

const EmailConfirmationLayout = () => {
  const queryParams = useSearchParams();
  const router = useRouter();
  const [verificationStatus, setVerificationStatus] = useState("pending");

  const token = queryParams.get("token");
  const email = queryParams.get("email");

  useEffect(() => {
    const handleEmailVerification = async () => {
      if (!token || !email) {
        setVerificationStatus("error");
        return;
      }

      try {
        await verifyEmail({token, email});
        setVerificationStatus("success");
        toast.success("Verification Successful!");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } catch () {
        toast.error("Email verification failed");
        setVerificationStatus("error");
      }
    };

    handleEmailVerification();
  }, [token, email, router]);

  const getVerificationText = useMemo(() => {
    const textContent = {
      pending: {
        title: "Email Verification in Progress",
        message:
          "You will be redirected to login page upon successful verification",
      },
      success: {
        title: "Email Verified Successfully!",
        message: "You will be redirected to the login page shortly.",
      },
      error: {
        title: "Verification Failed",
        message:
          "There was an issue verifying your email. Please try again or contact support.",
      },
    } as Record<
      "pending" | "success" | "error",
      {title: string; message: string}
    >;

    return textContent[verificationStatus];
  }, [verificationStatus]);

  return (
    <div className='flex flex-col p-5 lg:p-0 flex-1 pt-5 justify-center items-center overflow-y-scroll hideScrollBar'>
      <div className='max-h-[95vh] max-w-[390px] w-full'>
        <div className='flex flex-col items-center justify-between'>
          <Image
            src='/img/baptizo_light.webp'
            alt='auth_bg-image'
            width={40}
            height={40}
            placeholder='blur'
            priority
          />
          <p className='text-2xl font-semibold mt-3 mb-1'>
            {getVerificationText.title}
          </p>
          <p className='text-base text-center'>{getVerificationText.message}</p>
        </div>

        <div className='w-full flex items-center justify-center max-w-[390px]'>
          <CheckEmail lottieImg='https://res.cloudinary.com/dgfsobn9i/raw/upload/v1743221065/Baptizo/verification_qx71xx.json' />
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationLayout;
