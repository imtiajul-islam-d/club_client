import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <section className="md:-mt-24 font-rubik">
      <section className="">
        <Carousel />
        <Featured />
      </section>
    </section>
  );
};

export default Home;
