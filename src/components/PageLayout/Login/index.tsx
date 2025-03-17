"use client";

import React from "react";
import Image from "next/image";
import TextField from "@/components/Form/Elements/TextField";
import {Form} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import LoginForm from "@/components/Form/LoginForm";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
});

const LoginPageLayout = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className='flex flex-col flex-1 h-full justify-center items-center'>
      <div className='flex flex-col items-center justify-between'>
        <Image
          src='/img/baptizo_light.webp'
          alt='auth_bg-image'
          width={40}
          height={40}
        />
        <p className='text-2xl font-semibold mt-5 mb-1'>Create your account</p>
        <p className='text-base'>Adventure Starts Here</p>
      </div>

      <div className='max-w-[390px] w-full mt-5'>
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <TextField
              control={form.control}
              name='fullName'
              label='Full Name'
            />
            <Button onClick={onSubmit}>Submit</Button>
          </form>
        </Form> */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPageLayout;
