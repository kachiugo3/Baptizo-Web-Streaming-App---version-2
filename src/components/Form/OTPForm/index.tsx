"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {useRouter} from "next/router";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export function InputOTPForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='pin'
          render={({field}) => (
            <FormItem className='mt-4 '>
              <FormControl>
                <div className='w-full justify-center'>
                  <InputOTP
                    maxLength={4}
                    {...field}
                    containerClassName='w-full flex justify-center'
                  >
                    <InputOTPGroup className='flex justify-between'>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </FormControl>

              <FormMessage className='mt-1' />
            </FormItem>
          )}
        />
        <div className='flex flex-col justify-center'>
          <Button variant='default' size='lg' type='submit' className='w-full'>
            Verify now
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
          <p className='text-center'>
            Didn’t receive any code?{" "}
            <span className='font-semibold'>Resend now</span>
          </p>
        </div>
      </form>
    </Form>
  );
}
