"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Eye, EyeOffIcon} from "lucide-react";
import {useState} from "react";

const TextField = ({
  label,
  message,
  control,
  name,
  placeholder,
  type,
  ...props
}: {
  name: string;
  label: string;
  message?: string;
  placeholder?: string;
  type?: string;
  control: any;
  [key: string]: any;
}) => {
  const [showIcon, setShowEyeIcon] = useState(false);
  const updateShowIcon = () => {
    setShowEyeIcon((prev) => !prev);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({field}) => (
        <FormItem className='relative'>
          <FormLabel className='absolute left-3 -top-1 bg-background px-2 text-[#9498A3]'>
            {label}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type === "password" && !showIcon ? "password" : "text"}
              {...field}
              {...props}
              className={`${type === "password" && "!pr-10"}`}
            />
          </FormControl>
          {type === "password" && (
            <div
              className='absolute top-4 right-3 cursor-pointer text-[#9498A3]'
              onClick={updateShowIcon}
            >
              {showIcon ? (
                <Eye className='w-5 h-5' />
              ) : (
                <EyeOffIcon className='w-5 h-5' />
              )}
            </div>
          )}
          <FormDescription>{message}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextField;
