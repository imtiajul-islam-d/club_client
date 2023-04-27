import React from "react";

const Subscribe = () => {
  return (
    <section className="py-14 font-roboto">
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl font-bold leading-none">Stay Connected</h1>
        </div>
        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 border rounded-sm lg:justify-end">
          <div className="flex flex-row text-sm lg:text-lg">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 focus:outline-none rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-sm sm:w-1/3 bg-red-500 text-white hover:bg-white hover:text-red-500 duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
