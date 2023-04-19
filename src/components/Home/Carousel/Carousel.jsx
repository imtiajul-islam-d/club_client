import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css"

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
// swiper end
import React, { Suspense } from "react";
import friends from "../../../../public/assets/images/friends.jpg";
import Link from "next/link";
import CarouselItem from "./CarouselItem/CarouselItem";
const Carousel = () => {
  return (
    <section className="md:h-[100svh] relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper relative w-full h-full"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          // style={{
          //   "background-image":
          //     "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          // }}
          data-swiper-parallax="-23%"
        >
          <Image
            className="w-full h-full lg:h-auto brightness-[.4]"
            src={friends}
            alt="Im"
            sizes="100vw"
          />
        </div>
        <CarouselItem/>
        <SwiperSlide>
          <div className="max-w-6xl px-4 2xl:max-w-7xl mx-auto md:flex md:flex-col md:items-center md:justify-center py-14 h-full">
            <div
              className="text-3xl md:text-5xl lg:text-5xl md:text-center lg:pt-9 font-rubik font-semibold tracking-wide"
              data-swiper-parallax="-300"
            >
              <p className="leading-[57px]">
                Not all classroom have four walls
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
        <SwiperSlide>
          <div className="max-w-6xl px-4 2xl:max-w-7xl mx-auto md:flex md:flex-col md:items-center md:justify-center py-14 h-full">
            <div
              className="text-3xl md:text-5xl lg:text-5xl md:text-center lg:pt-9 font-rubik font-semibold tracking-wide"
              data-swiper-parallax="-300"
            >
              <p className="leading-[57px]">
                Not all classroom have four walls
                Not all classroom have four walls
                Not all classroom have four walls
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
      </Swiper>
      {/* content goes here */}
      {/* <div className="md:pt-20">Hello ff</div> */}
    </section>
  );
};

export default Carousel;
