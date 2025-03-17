"use client";
// import {toast} from "sonner";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// import {PasswordInput} from "@/components/ui/password-input";
import TextField from "../Elements/TextField";

const formSchema = z.object({
  fullName: z.string().min(1).min(8).max(30),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      //   toast(
      //     <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
      //       <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
      //     </pre>,
      //   );
    } catch (error) {
      console.error("Form submission error", error);
      //   toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
