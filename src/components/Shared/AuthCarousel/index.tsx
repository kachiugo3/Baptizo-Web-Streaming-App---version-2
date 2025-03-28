"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, {useMemo} from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const AuthCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
  const [, setCount] = React.useState(0);

  const images = [
    "https://res.cloudinary.com/dgfsobn9i/image/upload/v1743111430/Baptizo/AuthImage_1_ceodnf.webp",
    "https://res.cloudinary.com/dgfsobn9i/image/upload/v1743111437/Baptizo/AuthImg_2_r1tzgc.webp",
    "https://res.cloudinary.com/dgfsobn9i/image/upload/v1743111434/Baptizo/AuthImg_3_dtjkmj.webp",
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const getCurrentText = useMemo<{text: string; subtitle: string}>(() => {
    switch (current) {
      case 1:
        return {
          text: "Adventure Starts Here",
          subtitle:
            "From audiobooks to dramas and series, experience storytelling that comes alive in your ears.",
        };
      case 2:
        return {
          text: "Immerse yourself in every word",
          subtitle:
            "Transform your daily routine with captivating narratives that transport you beyond the ordinary.",
        };
      case 3:
        return {
          text: "Make Every Moment Count",
          subtitle:
            "Whether you’re chilling or on the go, dive into stories that entertain, inspire, and stay with you.",
        };
      default:
        return {
          text: "Adventure Starts Here",
          subtitle:
            "From audiobooks to dramas and series, experience storytelling that comes alive in your ears.",
        };
    }
  }, [current]);

  return (
    <div className='hidden xl:block h-full overflow-hidden w-3/6 relative'>
      <div className='absolute z-50 left-[80px] bottom-[200px] !max-w-[543px]'>
        <h2 className='text-white text-5xl font-bold line'>
          {getCurrentText.text}
        </h2>
        <p className='text-xl text-[#D0D0D0] mt-3.5'>
          {getCurrentText.subtitle}
        </p>

        <div className='flex gap-x-2 mt-4'>
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`${
                Number(current) == Number(idx + 1)
                  ? "bg-alert-error-100 w-16"
                  : "bg-white w-5"
              } h-1 bg-accent rounded-md`}
            ></div>
          ))}
        </div>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
          Fade(),
        ]}
        setApi={setApi}
        className='w-full h-full'
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Image
                src={img}
                alt='baptizo_authentication_image'
                width={824}
                height={825}
                className='w-full h-full !object-cover'
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden' />
        <CarouselNext className='hidden' />
      </Carousel>
    </div>
  );
};

export default AuthCarousel;
