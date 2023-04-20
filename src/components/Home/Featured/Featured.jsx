import Link from "next/link";
import React from "react";
import FeaturedItem from "./FeaturedItem/FeaturedItem";

const Featured = () => {
  return (
    <section className="px-6">
      <section className="max-w-6xl 2xl:max-w-7xl py-6 mx-auto flex items-center justify-between mt-6">
        <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">FEATURED NEWS</h3>
        <Link className="btn-featured" href="/">See all</Link>
      </section>
      <section className="">
        <div className="container max-w-6xl 2xl:max-w-7xl mx-auto space-y-6 sm:space-y-12 ">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 hover:shadow-md hover:scale-105 duration-300"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
            />
            <div className="p-6 space-y-2 2xl:space-y-3 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl 2xl:text-5xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <p className="text-xs 2xl:text-sm">February 19, 2021</p>
              <p className="2xl:text-xl">
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedItem/>
            <FeaturedItem/>
            <FeaturedItem/>
            <FeaturedItem/>
            <FeaturedItem/>
            <FeaturedItem/>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="btn-featured mb-3"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Featured;
