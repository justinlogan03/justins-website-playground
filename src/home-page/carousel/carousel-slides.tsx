import React from "react";
import { CarouselSlide } from "../constants";
import bostonImage from "../images/boston.jpg";
import richmondImage from "../images/homes-richmond.jpg";
import spaceImage from "../images/space_4_copy.jpg";

type Props = {
  currentSlide: CarouselSlide;
};

export const CarouselSlides = ({ currentSlide }: Props) => {
  switch (currentSlide) {
    case CarouselSlide.SlideOne:
      return (
        <div className="flex">
          <img
            src={bostonImage}
            style={{
              height: "24rem",
              width: "100rem",
              objectFit: "cover",
            }}
          />
        </div>
      );
    case CarouselSlide.SlideTwo:
      return (
        <div className="flex">
          <img
            src={richmondImage}
            style={{ height: "24rem", width: "100rem", objectFit: "cover" }}
          />
        </div>
      );
    case CarouselSlide.SlideThree:
      return (
        <div className="flex">
          <img
            src={spaceImage}
            style={{ height: "24rem", width: "100rem", objectFit: "cover" }}
          />
        </div>
      );
  }
};
