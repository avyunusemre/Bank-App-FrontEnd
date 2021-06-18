import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Banner3 from "../images/banner3.png";

function Banner() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
