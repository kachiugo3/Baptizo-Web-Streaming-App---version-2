// // "use client";

// // import SearchWidget from "@/components/Shared/SearchWidget";
// // import {Bell} from "lucide-react";
// // import {useState} from "react";
// // import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// // } from "@/components/ui/carousel";
// // import DiscoverCardBlock from "@/components/Shared/DiscoverCardBlock";
// // import {WheelGesturesPlugin} from "embla-carousel-wheel-gestures";
// // import Image from "next/image";

// // const DiscoverPageLayout = () => {
// //   const [searchQuery, setSearchQuery] = useState("");

// //   const Greeting = () => {
// //     return (
// //       <div>
// //         <p>Welcome Benjamin 👋🏽 </p>
// //         <p className='font-semibold'>
// //           Let’s Explore the world of Enlightenment
// //         </p>
// //       </div>
// //     );
// //   };

// //   const tabList = [
// //     {
// //       text: "Audio Books",
// //       value: "audio-book",
// //     },
// //     {
// //       text: "Audio Drama",
// //       value: "audio-drama",
// //     },
// //     {
// //       text: "Audio Series",
// //       value: "audio-series",
// //     },
// //   ];

// //   return (
// //     <div className='!w-full'>
// //       <SearchWidget
// //         className='flex-col lg:flex-row gap-2'
// //         searchQuery={searchQuery}
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //         placeholder='search by title, genre, year, author'
// //         beforeChildren={<Greeting />}
// //         afterChildren={<Bell className='text-[#9498A3] ml-4' size={20} />}
// //       />

// //       <Tabs defaultValue='audio-book'>
// //         <TabsList className='flex w-full'>
// //           {tabList.map((tab, idx) => {
// //             return (
// //               <TabsTrigger key={idx} value={tab.value}>
// //                 {tab.text}
// //               </TabsTrigger>
// //             );
// //           })}
// //         </TabsList>

// //         <TabsContent value='audio-book'>
// //           <Carousel plugins={[WheelGesturesPlugin()]} orientation='vertical'>
// //             <CarouselContent className=' border-y-amber-500 h-[calc(100vh-240px)] xl:h-[calc(100vh-200px)] w-full py-2'>
// //               <CarouselItem>
// //                 <DiscoverCardBlock />
// //               </CarouselItem>

// //               <CarouselItem className='border-t-amber-500'>
// //                 <DiscoverCardBlock />
// //               </CarouselItem>

// //               <CarouselItem>
// //                 <DiscoverCardBlock />
// //               </CarouselItem>
// //             </CarouselContent>
// //           </Carousel>
// //         </TabsContent>
// //         <TabsContent value='audio-drama'>B</TabsContent>
// //         <TabsContent value='audio-series'>C</TabsContent>
// //       </Tabs>
// //     </div>
// //   );
// // };

// // export default DiscoverPageLayout;

// "use client";

// import SearchWidget from "@/components/Shared/SearchWidget";
// import {Bell} from "lucide-react";
// import {useState, useEffect, useRef} from "react";
// import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   useCarousel,
// } from "@/components/ui/carousel";
// import DiscoverCardBlock from "@/components/Shared/DiscoverCardBlock";
// import {WheelGesturesPlugin} from "embla-carousel-wheel-gestures";
// import Image from "next/image";

// const DiscoverPageLayout = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);
//   const [carouselApi, setCarouselApi] = useState(null);

//   useEffect(() => {
//     if (carouselApi) {
//       // Handle carousel change events
//       const onSelect = () => {
//         setCurrentIndex(carouselApi.selectedScrollSnap());
//       };

//       carouselApi.on("select", onSelect);
//       // Initial check
//       onSelect();

//       return () => {
//         carouselApi.off("select", onSelect);
//       };
//     }
//   }, [carouselApi]);

//   const Greeting = () => {
//     return (
//       <div>
//         <p>Welcome Benjamin 👋🏽 </p>
//         <p className='font-semibold'>
//           Let's Explore the world of Enlightenment
//         </p>
//       </div>
//     );
//   };

//   const tabList = [
//     {
//       text: "Audio Books",
//       value: "audio-book",
//     },
//     {
//       text: "Audio Drama",
//       value: "audio-drama",
//     },
//     {
//       text: "Audio Series",
//       value: "audio-series",
//     },
//   ];

//   return (
//     <div className='!w-full'>
//       <SearchWidget
//         className='flex-col lg:flex-row gap-2'
//         searchQuery={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder='search by title, genre, year, author'
//         beforeChildren={<Greeting />}
//         afterChildren={<Bell className='text-[#9498A3] ml-4' size={20} />}
//       />

//       <Tabs defaultValue='audio-book'>
//         <TabsList className='flex w-full'>
//           {tabList.map((tab, idx) => {
//             return (
//               <TabsTrigger key={idx} value={tab.value}>
//                 {tab.text}
//               </TabsTrigger>
//             );
//           })}
//         </TabsList>

//         <TabsContent value='audio-book'>
//           <Carousel
//             ref={carouselRef}
//             onApiChange={setCarouselApi}
//             plugins={[WheelGesturesPlugin()]}
//             orientation='vertical'
//           >
//             <CarouselContent className='border-y-amber-500 h-[calc(100vh-240px)] xl:h-[calc(100vh-200px)] w-full py-2'>
//               {[0, 1, 2].map((idx) => (
//                 <CarouselItem key={idx}>
//                   <DiscoverCardBlock />
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//         </TabsContent>
//         <TabsContent value='audio-drama'>B</TabsContent>
//         <TabsContent value='audio-series'>C</TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default DiscoverPageLayout;

"use client";

import SearchWidget from "@/components/Shared/SearchWidget";
import {Bell} from "lucide-react";
import {useState, useEffect, useMemo} from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    // Initialize the current index
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  // Use useMemo to compute item classes based on the current index
  const getItemClass = useMemo(() => {
    return (idx) => {
      const baseClass = "transition-all duration-300";
      const activeClass = "opacity-100 visible";
      const inactiveClass = "opacity-0 invisible";

      return `${baseClass} ${
        currentIndex === idx ? activeClass : inactiveClass
      }`;
    };
  }, [currentIndex]);

  const Greeting = () => {
    return (
      <div>
        <p>Welcome Benjamin 👋🏽 </p>
        <p className='font-semibold'>
          Let's Explore the world of Enlightenment
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
      <p className='mb-1 font-semibold text-lg'>Discover</p>
      <SearchWidget
        className='flex-col lg:flex-row gap-2 mb-3'
        searchQuery={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='search by title, genre, year, author'
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
