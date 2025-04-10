import {Form} from "@/components/ui/form";
import React from "react";
import TextField from "../Elements/TextField";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {useMutation} from "@tanstack/react-query";
import {forgotPassword} from "@/api/authActions";

const EmailStep = ({
  proceed,
  updateEmail,
}: {
  proceed: () => void;
  updateEmail: (val: string) => void;
}) => {
  const router = useRouter();

  const formSchema = z.object({
    email: z
      .string({
        required_error: "Please enter your email",
      })
      .email("Please enter a valid email"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const {mutate, isPending} = useMutation({
    mutationFn: (payload: {client: string; email: string}) =>
      forgotPassword(payload),
    onSuccess: () => {
      proceed();
      toast.success("Please check your email for reset link");
    },
    onError: () => {
      toast.error("Failed to send password reset link");
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const payload = {
        client: "web",
        email: values.email,
      };
      await mutate(payload);
      updateEmail(values.email);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <div className='mx-auto !w-full mt-5'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
          <TextField
            control={form.control}
            name='email'
            label='Email Address'
            placeholder='Enter your email address'
            type='email'
          />

          <div>
            <Button
              variant='default'
              size='lg'
              className='w-full'
              loading={isPending}
            >
              Reset password
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='w-full mt-4'
              onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
            >
              Back to login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EmailStep;
