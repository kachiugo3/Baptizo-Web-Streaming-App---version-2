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

type TextFieldProps = {
  label: string;
  message?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
  [key: string]: any;
} & (
  | {
      // Form context
      control: any;
      name: string;
      value?: never;
      onChange?: never;
    }
  | {
      // Non-form context
      control?: never;
      name?: never;
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
);

const TextField = ({
  label,
  message,
  control,
  name,
  placeholder,
  type,
  value,
  onChange,
  className = "",
  prependIcon,
  appendIcon,
  ...props
}: TextFieldProps) => {
  const [showIcon, setShowEyeIcon] = useState(false);
  const updateShowIcon = () => {
    setShowEyeIcon((prev) => !prev);
  };

  // Render in form context if control and name are provided
  if (control && name) {
    return (
      <FormField
        control={control}
        name={name}
        render={({field}) => (
          <FormItem className='relative'>
            <FormLabel className='absolute left-3 -top-1 z-5 !bg-background px-2 text-[#9498A3]'>
              {label}
            </FormLabel>
            <FormControl>
              <div className='relative'>
                {prependIcon && (
                  <div className='absolute left-3 top-1/2 -translate-y-1/2 text-[#9498A3]'>
                    {prependIcon}
                  </div>
                )}
                <Input
                  placeholder={placeholder}
                  type={type === "password" && !showIcon ? "password" : "text"}
                  {...field}
                  {...props}
                  className={`
                    ${type === "password" ? "!pr-10" : ""}
                    ${prependIcon ? "pl-12" : ""}
                    ${appendIcon || type === "password" ? "pr-12" : ""}
                    ${className}
                  `}
                />
                {appendIcon && (
                  <div className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9498A3]'>
                    {appendIcon}
                  </div>
                )}
                {type === "password" && (
                  <div
                    className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-[#9498A3]'
                    onClick={updateShowIcon}
                  >
                    {showIcon ? (
                      <Eye className='w-5 h-5' />
                    ) : (
                      <EyeOffIcon className='w-5 h-5' />
                    )}
                  </div>
                )}
              </div>
            </FormControl>
            <FormDescription>{message}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  // Render in non-form context with direct value/onChange handling
  return (
    <div className='relative'>
      <div className='absolute left-3 -top-1 z-5 !bg-background  px-2 text-[#9498A3]'>
        {label}
      </div>
      <div className='relative'>
        {prependIcon && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2 text-[#9498A3]'>
            {prependIcon}
          </div>
        )}
        <Input
          placeholder={placeholder}
          type={type === "password" && !showIcon ? "password" : "text"}
          value={value}
          onChange={onChange}
          {...props}
          className={`
            ${type === "password" ? "!pr-10" : ""}
            ${prependIcon ? "pl-9" : ""}
            ${appendIcon || type === "password" ? "pr-12" : ""}
            ${className}
          `}
        />
        {appendIcon && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9498A3]'>
            {appendIcon}
          </div>
        )}
        {type === "password" && (
          <div
            className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-[#9498A3]'
            onClick={updateShowIcon}
          >
            {showIcon ? (
              <Eye className='w-5 h-5' />
            ) : (
              <EyeOffIcon className='w-5 h-5' />
            )}
          </div>
        )}
      </div>
      {message && (
        <div className='text-sm text-muted-foreground'>{message}</div>
      )}
    </div>
  );
};

export default TextField;
