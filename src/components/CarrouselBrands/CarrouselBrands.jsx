import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brand1 from "./../../assets/brand1.png";
import brand2 from "./../../assets/brand2.png";
import brand3 from "./../../assets/brand3.png";
import brand4 from "./../../assets/brand4.png";
import "./carrousel.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CarrouselBrands = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={3500}
      autoPlay={true}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    >
      <div className="wrapperBrand">
        <img
          loading="lazy"
          className="brand"
          src={brand1}
          alt="brand wester digital"
        />
      </div>
      <div className="wrapperBrand">
        <img
          loading="lazy"
          className="brand"
          src={brand2}
          alt="brand samnsung"
        />
      </div>
      <div className="wrapperBrand">
        <img loading="lazy" className="brand" src={brand3} alt="brand acer" />
      </div>
      <div className="wrapperBrand">
        <img loading="lazy" className="brand" src={brand4} alt="brand HM" />
      </div>
    </Carousel>
  );
};

export default CarrouselBrands;
