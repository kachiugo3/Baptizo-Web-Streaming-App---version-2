import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import Image from "next/image";
import React, {useId} from "react";

const Login = () => {
  const id = useId();
  return (
    <div className='flex flex-col flex-1 h-full justify-center items-center'>
      <div className='flex flex-col items-center justify-between'>
        <Image src='/img/baptizo_light.webp' width={40} height={40} />
        <p className='text-2xl font-semibold mt-5 mb-1'>Create your account</p>
        <p className='text-base'>Adventure Starts Here</p>
      </div>

      <form>
        <div className='group relative'>
          <label
            htmlFor={id}
            className='bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50'
          >
            Input with overlapping label
          </label>
          <Input id={id} className='h-10' placeholder='Email' type='email' />
        </div>
      </form>
    </div>
  );
};

export default Login;
