"use client";

import SearchWidget from "@/components/Shared/SearchWidget";
import {Bell} from "lucide-react";
import {useState} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const DiscoverPageLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const Greeting = () => {
    return (
      <div>
        <p>Welcome Benjamin 👋🏽 </p>
        <p className='font-semibold'>
          Let’s Explore the world of Enlightenment
        </p>
      </div>
    );
  };

  const tabList = [
    {
      text: "Audio Books",
      value: "audio-book",
    },
    {
      text: "Audio Drama",
      value: "audio-drama",
    },
    {
      text: "Audio Series",
      value: "audio-series",
    },
  ];

  return (
    <div className='!w-full'>
      <SearchWidget
        searchQuery={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='search by title, genre, year, author'
        beforeChildren={<Greeting />}
        afterChildren={<Bell className='text-[#9498A3] ml-4' size={20} />}
      />

      <Tabs defaultValue='audio-book'>
        <TabsList className='flex w-full'>
          {tabList.map((tab, idx) => {
            return (
              <TabsTrigger key={idx} value={tab.value}>
                {tab.text}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value='audio-book'>A</TabsContent>
        <TabsContent value='audio-drama'>B</TabsContent>
        <TabsContent value='audio-series'>C</TabsContent>
      </Tabs>
    </div>
  );
};

export default DiscoverPageLayout;
