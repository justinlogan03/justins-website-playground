import React from "react";
import { CarouselSlide } from "../constants";

type Props = {
  currentSlide: CarouselSlide;
};

export const CarouselSlides = ({ currentSlide }: Props) => {
  switch (currentSlide) {
    case CarouselSlide.SlideOne:
      return (
        <div className="flex w-full h-96">
          {/**Image tag goes here. figure out jpg extension */}
        </div>
      );
    case CarouselSlide.SlideTwo:
      return <div className="flex w-full h-96">Two</div>;
    case CarouselSlide.SlideThree:
      return <div className="flex w-full h-96">Three</div>;
  }
};
