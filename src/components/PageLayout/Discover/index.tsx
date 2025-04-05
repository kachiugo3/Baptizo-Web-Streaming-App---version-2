"use client";

import SearchWidget from "@/components/Shared/SearchWidget";
import {Bell} from "lucide-react";
import {useState, useEffect} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import DiscoverCardBlock from "@/components/Shared/DiscoverCardBlock";
import {WheelGesturesPlugin} from "embla-carousel-wheel-gestures";

const DiscoverPageLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);

    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

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
      {/* <h3 className='mb-1 font-semibold text-lg'>Discover</h3> */}
      <SearchWidget
        className='flex-col lg:flex-row gap-2 mb-3'
        searchQuery={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search by title, genre, year, author'
        afterChildren={<Bell className='text-[#9498A3] ml-4' size={20} />}
      />

      <Tabs defaultValue='audio-book'>
        <TabsList className='flex w-full gap-x-2'>
          {tabList.map((tab, idx) => {
            return (
              <TabsTrigger key={idx} value={tab.value}>
                {tab.text}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value='audio-book'>
          <Carousel
            plugins={[WheelGesturesPlugin()]}
            orientation='vertical'
            onApiChange={setCarouselApi}
          >
            <CarouselContent className='h-[calc(100dvh-210px)] xl:h-[calc(100dvh-90px)] !w-full py-3'>
              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>

              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>

              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </TabsContent>

        <TabsContent value='audio-drama'>
          <Carousel
            plugins={[WheelGesturesPlugin()]}
            orientation='vertical'
            onApiChange={setCarouselApi}
          >
            <CarouselContent className='h-[calc(100dvh-230px)] xl:h-[calc(100dvh-90px)] !w-full py-3'>
              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>

              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>

              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </TabsContent>

        <TabsContent value='audio-series'>
          <Carousel
            plugins={[WheelGesturesPlugin()]}
            orientation='vertical'
            onApiChange={setCarouselApi}
          >
            <CarouselContent className='h-[calc(100dvh-220px)] xl:h-[calc(100dvh-90px)] !w-full py-3'>
              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>

              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>

              <CarouselItem>
                <DiscoverCardBlock />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DiscoverPageLayout;
