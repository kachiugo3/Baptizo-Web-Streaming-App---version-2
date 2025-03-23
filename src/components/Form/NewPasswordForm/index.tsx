import React from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import {PasswordRegex} from "@/services/constants";
import TextField from "../Elements/TextField";
import {useRouter} from "next/navigation";

const formSchema = z
  .object({
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Targets the confirmPassword field for errors
    message: "Passwords must match",
  });

const NewPasswordForm = ({proceed}: {proceed: () => void}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      proceed();
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <div className='mx-auto w-full !max-w-[390px] mt-5'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
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

          <div className='flex flex-col justify-center'>
            <Button
              variant='default'
              size='lg'
              type='submit'
              className='w-full'
            >
              Reset password
            </Button>

            <Button
              type='button'
              onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
              variant='outline'
              size='lg'
              className='w-full mt-2 mb-4'
            >
              Back to login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewPasswordForm;
