import React, { useState } from "react";
import { CarouselSlide, HOME_CAROUSEL_SLIDES } from "../constants";
import { CarouselSlides } from "./carousel-slides";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { changeSlide } from "../helpers/carousel-helpers";

export const HomePageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<CarouselSlide>(
    CarouselSlide.SlideOne
  );

  const onSlideChange = (changeAmount: number) => {
    const newSlide = changeSlide({
      changeAmount,
      slideList: HOME_CAROUSEL_SLIDES,
      currentSlide,
    });
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative flex w-full bg-blue-300 h-96">
      <div>
        <CarouselSlides currentSlide={currentSlide} />
      </div>
      <button
        className="absolute w-12 h-12 my-48 ml-8 hover:bg-gray-200 hover:opacity-40"
        style={{ borderRadius: "50%" }}
        onClick={() => {
          onSlideChange(-1);
        }}
      >
        <ArrowBackIosNewIcon />
      </button>
      <button
        className="absolute right-0 w-12 h-12 my-48 mr-8 hover:bg-gray-200 hover:opacity-40"
        style={{ borderRadius: "50%" }}
        onClick={() => {
          onSlideChange(+1);
        }}
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};