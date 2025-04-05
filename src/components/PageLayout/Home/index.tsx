"use client";

import RectangularCards from "@/components/Shared/RectDisplayCards";
import SearchWidget from "@/components/Shared/SearchWidget";
import SqDisplyCards from "@/components/Shared/SqDisplayCards";
import SubtitleBlock from "@/components/Shared/SubtitleBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Bell} from "lucide-react";
import React, {useState} from "react";

const HomeLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const tabList = [
    {
      text: "All",
      value: "all",
    },
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

  const Greeting = () => {
    return (
      <div>
        <p>Welcome Benjamin 👋🏽 </p>
        <p className='font-semibold'>
          Let{"'"}s Explore the world of Enlightenment
        </p>
      </div>
    );
  };

  return (
    <div>
      {/* <h3 className='mb-1 font-semibold text-lg'>Home</h3> */}
      <SearchWidget
        className='grid grid-cols-1 xl:grid-cols-3 gap-2 mb-3'
        childrenClass='col-span-2'
        searchQuery={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search by title, genre, year, author'
        afterChildren={<Bell className='text-[#9498A3] ml-4' size={20} />}
        beforeChildren={<Greeting />}
        textFieldClassName='col-span-1 w-[60vw] xl:w-[600px] h-10'
      />

      <Tabs defaultValue='all'>
        <TabsList className='flex w-full gap-x-6 mb-5'>
          {tabList.map((tab, idx) => {
            return (
              <TabsTrigger key={idx} value={tab.value}>
                {tab.text}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value='all'>
          <div>
            <SubtitleBlock subtitle='New Arrival' link='/' />

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
              {[1, 2, 3].map((item, idx) => {
                return <RectangularCards key={idx} />;
              })}
            </div>

            <SubtitleBlock
              subtitle='Recommended series'
              link='/series'
              className='mt-[30px]'
            />
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-4'>
              {Array.from({length: 5}).map((item, idx) => {
                return <SqDisplyCards key={idx} />;
              })}
            </div>

            <SubtitleBlock
              subtitle='Most Viewed series'
              link='/series'
              className='mt-[30px]'
            />
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-4'>
              {Array.from({length: 5}).map((item, idx) => {
                return <SqDisplyCards key={idx} />;
              })}
            </div>
          </div>
        </TabsContent>

        <TabsContent value='audio-book'>B</TabsContent>

        <TabsContent value='audio-drama'>C</TabsContent>

        <TabsContent value='audio-series'>D</TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeLayout;
