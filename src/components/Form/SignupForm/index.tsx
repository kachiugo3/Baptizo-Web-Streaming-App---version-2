"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {useOAuthLogin} from "@/hooks/useOAuthLogin";
import TextField from "../Elements/TextField";
import {PasswordRegex} from "@/services/constants";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import {useMutation} from "@tanstack/react-query";
import {Register, RegisterPayload} from "@/api/authActions";
import {toast} from "sonner";

const formSchema = z
  .object({
    fullName: z
      .string({
        required_error: "Please enter your full name",
      })
      .min(8, "Full name must be at least 8 characters")
      .max(30, "Full name must be at most 30 characters"),

    email: z
      .string({
        required_error: "Please enter your email",
      })
      .email("Please enter a valid email"),

    password: z
      .string({
        required_error: "Password is required",
      })
      .regex(
        PasswordRegex,
        "Password must contain at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special character",
      ),

    confirmPassword: z.string({
      required_error: "Confirm Password is required",
    }),

    terms: z.boolean().refine((value) => value === true, {
      message: "You must accept our terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Targets the confirmPassword field for errors
    message: "Passwords must match",
  });

export default function SignupForm({proceed}: {proceed: () => void}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const {googleLogin, appleLogin, loadingState} = useOAuthLogin();

  const {mutate, isPending} = useMutation({
    mutationFn: (payload: RegisterPayload) => Register(payload),
    onSuccess(data: any) {
      toast.success(data?.msg);
      proceed();
    },
    onError(err: any) {
      toast.error(err?.response?.data?.msg || "Ooops!Failed to register");
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const namesPart = values.fullName.split(" ");
    const payload = {
      email: values.email,
      password: values.password,
      firstName: namesPart[0],
      lastName: namesPart[1],
      client: "web",
    };
    try {
      await mutate(payload);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='mx-auto !max-w-[390px] mt-5 hideScrollBar'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
          <TextField
            control={form.control}
            name='fullName'
            label='Full Name'
            placeholder='Enter your full name'
          />

          <TextField
            control={form.control}
            name='email'
            label='Email Address'
            placeholder='Enter your email address'
            type='email'
          />

          <TextField
            control={form.control}
            name='password'
            label='Password'
            placeholder='Enter your password'
            type='password'
          />

          <TextField
            control={form.control}
            name='confirmPassword'
            label='Confirm Password'
            placeholder='Confirm your password'
            type='password'
          />

          <FormField
            control={form.control}
            name='terms'
            render={({field}) => (
              <FormItem className='flex -mt-3 space-x-0 items-center space-y-0'>
                <FormControl className='cursor-pointer'>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-[140%] text-sm text-[#9498A3]'>
                  By clicking create account you agree to Enfi{" "}
                  <span className='whitespace-nowrap text-foreground !font-semibold'>
                    Terms of use
                  </span>{" "}
                  and{" "}
                  <span className='whitespace-nowrap text-foreground !font-semibold'>
                    and Privacy policy
                  </span>
                </div>
              </FormItem>
            )}
          />

          <Button
            type='submit'
            size='lg'
            className='w-full'
            loading={isPending}
          >
            Sign up
          </Button>

          <div className='flex justify-center items-center w-full'>
            <div className='w-[100px] bg-[#98999cb0] h-[1px]'></div>
            <p className='px-3 !text-[#98999cb0] text-xs'>OR</p>
            <div className='w-[100px] bg-[#98999cb0]  h-[1px]'></div>
          </div>

          <Button
            variant='outline'
            size='lg'
            className='w-full'
            loading={loadingState.google}
            onClick={(e) => {
              e.preventDefault();
              googleLogin();
            }}
          >
            <div className='flex items-center justify-center space-x-2'>
              <Image
                src='/img/google_icon.webp'
                width='20'
                height='20'
                alt='google_auth_logo'
              />
              <p> Sign up with google </p>
            </div>
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='w-full'
            loading={loadingState.apple}
            onClick={(e) => {
              e.preventDefault();
              appleLogin();
            }}
          >
            <div className='flex items-center justify-center space-x-2'>
              <Image
                src='/img/apple_icon.webp'
                width='20'
                height='20'
                alt='google_auth_logo'
              />
              <p> Sign up with google </p>
            </div>
          </Button>
        </form>

        <div className='flex flex-1 justify-center mt-2 text-foreground'>
          Already have an account?{" "}
          <Link href='/login' className='font-semibold ml-1'>
            Login
          </Link>
        </div>
      </Form>
    </div>
  );
}
