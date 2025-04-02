"use client";

import TextField from "@/components/Form/Elements/TextField";
import {Bell, Search} from "lucide-react";
import {useState} from "react";

const DiscoverPageLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className='p-[30px] !w-full'>
      <div className='!w-full flex items-center justify-between flex-1'>
        <TextField
          value={searchQuery}
          placeholder='search by title, genre, year, author'
          className='h-10 w-[65vw] lg:w-[700px]'
          prependIcon={<Search size={16} />}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Bell />
      </div>
    </div>
  );
};

export default DiscoverPageLayout;
