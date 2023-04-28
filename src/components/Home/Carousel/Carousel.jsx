import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css"

// import required modules
import SwiperCore, { Parallax, Pagination, Navigation, Autoplay } from "swiper";
// swiper end
import React, { Suspense } from "react";
import friends from "../../../../public/assets/images/friends.jpg";
import Link from "next/link";
const Carousel = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="lg:h-[100svh] relative">
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        // navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
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
        {/* <CarouselItem /> */}
        <SwiperSlide>
          <div className="slider-content">
            <div className="slider-holder" data-swiper-parallax="-300">
              <p className="slider-content-line">
                Not all classroom have four walls
              </p>
            </div>
            <div className="flex space-x-3 mt-2 md:mt-5">
              <Link
                href="/"
                className="slider-first-button"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
              <Link
                href="/"
                className="slider-second-button"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <div className="slider-holder" data-swiper-parallax="-300">
              <p className="slider-content-line">
                Not all classroom have four walls Not all classroom have four
                walls
              </p>
            </div>
            <div className="flex space-x-3 mt-2 md:mt-5">
              <Link
                href="/"
                className="slider-first-button"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
              <Link
                href="/"
                className="slider-second-button"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="slider-content">
            <div className="slider-holder" data-swiper-parallax="-300">
              <p className="slider-content-line">
                Not all classroom have four walls Not all classroom have four
                walls
              </p>
            </div>
            <div className="flex space-x-3 mt-2 md:mt-5">
              <Link
                href="/"
                className="slider-first-button"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
              <Link
                href="/"
                className="slider-second-button"
                data-swiper-parallax="-200"
              >
                Donate
              </Link>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      {/* content goes here */}
      {/* <div className="md:pt-20">Hello ff</div> */}
    </section>
  );
};

export default Carousel;
