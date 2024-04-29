import React from "react";
import HomePageImages from "../components/carousels/HomePageImages";
import Carousel from "../components/carousels/Carousel";

const Services = () => {
  return (
    <div>
      <div>
        <Carousel images={HomePageImages} />
      </div>
    </div>
  );
};

export default Services;
