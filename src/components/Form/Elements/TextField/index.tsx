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

const TextField = ({
  label,
  message,
  control,
  name,
  placeholder,
}: {
  name: string;
  label: string;
  control: any;
  message?: string;
  placeholder?: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{message}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextField;
