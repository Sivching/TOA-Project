import React from "react";
import Slider from "./Slider";
import Product from "./Product";
import Video from "./Video";
import Knowledge from "./Knowledge";
import OurInformation from "./OurInformation";

const Home = () => {
  return (
    <div>
      <Slider />
      <Product />
      <Video />
      <Knowledge />
      <OurInformation />
    </div>
  );
};

export default Home;
