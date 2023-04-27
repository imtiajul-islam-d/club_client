import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Featured from "./Featured/Featured";
import Subscribe from "./Subscribe/Subscribe";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
  return (
    <section className="md:-mt-24 2xl:-mt-28 font-roboto">
      <section className="">
        <Carousel />
        <Featured />
        <Sponsor/>
        <Subscribe/>
      </section>
    </section>
  );
};

export default Home;
