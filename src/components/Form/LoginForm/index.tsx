"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {useMutation} from "@tanstack/react-query";
import TextField from "../Elements/TextField";
import {PasswordRegex} from "@/services/constants";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {toast} from "sonner";
import {OAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "@/firebase-config";

import Image from "next/image";
import {Login} from "@/app/api/authActions";
import {useAppContext} from "@/context/AuthContext";

const formSchema = z.object({
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

  terms: z.boolean().optional(),
});

export default function LoginForm() {
  const {dispatch} = useAppContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const {mutate, isPending} = useMutation({
    mutationFn: (payload: {email: string; password: string}) => Login(payload),
    onSuccess: (data) => {
      dispatch({type: "UPDATE_USER", payload: data});
      return;
    },
    onError: (error) => {
      console.error("Login failed", error);
      toast.error("Login failed");
    },
  });

  const {handleSubmit} = form;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    try {
      const res = await mutate(payload);
      dispatch({type: "UPDATE_USER", payload: res});
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  return (
    <div className='mx-auto !max-w-[390px] mt-5'>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
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

          <div className='flex items-center justify-between'>
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
                    Remember me
                  </div>
                </FormItem>
              )}
            />

            <Link
              href='/forgot-password'
              className='text-sm -mt-3 text-[#292D32]  font-semibold'
            >
              Forgot Password
            </Link>
          </div>

          <Button
            type='submit'
            size='lg'
            className='w-full'
            loading={isPending}
          >
            Sign In
          </Button>

          <div className='flex justify-center items-center w-full'>
            <div className='w-[100px] bg-[#98999cb0] h-[1px]'></div>
            <p className='px-3 !text-[#98999cb0] text-xs'>OR</p>
            <div className='w-[100px] bg-[#98999cb0]  h-[1px]'></div>
          </div>

          <Button
            variant='outline'
            size='lg'
            className='!w-full'
            onClick={(e) => {
              e.preventDefault();
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
          <Button variant='outline' size='lg' className='!w-full'>
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
          Don{"'"}t have an account?{" "}
          <Link href='/sign-up' className='font-semibold ml-1'>
            Signup
          </Link>
        </div>
      </Form>
    </div>
  );
}
