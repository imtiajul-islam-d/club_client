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
            className="w-full h-full lg:h-auto brightness-75"
            src={friends}
            alt="Im"
            sizes="100vw"
          />
        </div>
        <SwiperSlide>
          <div className="max-w-6xl mx-auto md:flex md:flex-col md:items-center md:justify-center py-14 h-full">
            <div
              className="text-3xl md:text-6xl lg:text-7xl md:text-center lg:pt-9 font-myriad font-bold"
              data-swiper-parallax="-300"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, velit?
            </div>
            <div className="flex space-x-3 mt-6 md:mt-10">
              <Link
                href="/"
                className="rounded border hover:text-black hover:bg-white border-red-500 bg-red-500 text-white hover:border-white px-3 py-1"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
              <Link
                href="/"
                className="rounded bg-white text-black hover:bg-red-500 border hover:border-red-500 hover:text-white px-3 py-1"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-7xl mx-auto md:flex md:flex-col md:items-center md:justify-center py-14 h-full">
            <div
              className="text-3xl md:text-6xl md:text-center font-bold lg:pt-9"
              data-swiper-parallax="-300"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, velit?
            </div>
            <div className="flex space-x-3 mt-6 md:mt-10">
              <Link
                href="/"
                className="subtitle border hover:text-black hover:bg-white border-white text-white px-3 py-2"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
              <Link
                href="/"
                className="subtitle  bg-white text-black hover:bg-transparent border hover:border-white hover:text-white px-3 py-2"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-7xl mx-auto md:flex md:flex-col md:items-center md:justify-center py-14 h-full">
            <div
              className="text-3xl md:text-6xl md:text-center font-bold lg:pt-9"
              data-swiper-parallax="-300"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, velit?
            </div>
            <div className="flex space-x-3 mt-6 md:mt-10">
              <Link
                href="/"
                className="subtitle border hover:text-black hover:bg-white border-white text-white px-3 py-2"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
              <Link
                href="/"
                className="subtitle  bg-white text-black hover:bg-transparent border hover:border-white hover:text-white px-3 py-2"
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
