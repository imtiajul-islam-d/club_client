import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from "swiper/react";

const CarouselItem = () => {
    return (
        <SwiperSlide>
          <div className="max-w-6xl mx-auto md:flex md:flex-col md:items-center md:justify-center py-14 h-full">
            <div
              className="text-3xl md:text-5xl lg:text-5xl md:text-center lg:pt-9 font-rubik font-semibold tracking-wide"
              data-swiper-parallax="-300"
            >
              <p className="leading-[57px]">
                Not all classroom have four walls
              </p>
            </div>
            <div className="flex space-x-3 mt-2 md:mt-5">
              <Link
                href="/"
                className="rounded-sm border hover:text-black hover:bg-white border-red-500 bg-red-500 text-white hover:border-white px-3 py-1 duration-300"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
              <Link
                href="/"
                className="rounded-sm bg-white text-black hover:bg-red-500 border hover:border-red-500 hover:text-white px-3 py-1 duration-300"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
            </div>
          </div>
        </SwiperSlide>
    );
};

export default CarouselItem;