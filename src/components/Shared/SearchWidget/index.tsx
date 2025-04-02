"use client";

import React, {ReactNode} from "react";
import TextField from "@/components/Form/Elements/TextField";
import {Search} from "lucide-react";

interface SearchWidgetProps {
  searchQuery: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  textFieldClassName?: string;
  beforeChildren?: ReactNode;
  afterChildren?: ReactNode;
}

const SearchWidget = ({
  searchQuery,
  onChange,
  placeholder = "Search...",
  className = "!w-full flex flex-1 items-center justify-between",
  textFieldClassName = "h-10 w-[65vw] lg:w-[700px]",
  beforeChildren,
  afterChildren,
}: SearchWidgetProps) => {
  const searchField = (
    <TextField
      value={searchQuery}
      placeholder={placeholder}
      className={textFieldClassName}
      prependIcon={<Search size={16} />}
      onChange={onChange}
    />
  );

  return (
    <div className={className}>
      {beforeChildren}
      {searchField}
      {afterChildren}
    </div>
  );
};

export default SearchWidget;
