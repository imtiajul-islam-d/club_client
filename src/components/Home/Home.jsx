import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <section className="md:-mt-24 2xl:-mt-28 font-roboto">
      <section className="">
        <Carousel />
        <Featured />
      </section>
    </section>
  );
};

export default Home;
