import React, { useEffect, useState } from "react";
import { CarouselSlide, HOME_CAROUSEL_SLIDES } from "../constants";
import { CarouselSlides } from "./carousel-slides";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { changeSlide } from "../helpers/carousel-helpers";

export const HomePageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<CarouselSlide>(
    HOME_CAROUSEL_SLIDES[0]
  );

  const onSlideChange = (changeAmount: number) => {
    setCurrentSlide((prev) => {
      const newSlide = changeSlide({
        changeAmount,
        slideList: HOME_CAROUSEL_SLIDES,
        currentSlide: prev,
      });
      return newSlide;
    });
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log(currentSlide);
      onSlideChange(1);
    }, 10000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div
      className="relative flex w-full mb-8 bg-blue-300 h-96"
      style={{ borderRadius: "12px" }}
    >
      <div>
        <CarouselSlides currentSlide={currentSlide} />
      </div>
      <button
        className="absolute w-12 h-12 my-48 ml-8 bg-gray-200 opacity-50 hover:opacity-80"
        style={{ borderRadius: "50%" }}
        onClick={() => {
          onSlideChange(-1);
        }}
      >
        <ArrowBackIosNewIcon />
      </button>
      <button
        className="absolute right-0 w-12 h-12 my-48 mr-8 bg-gray-200 opacity-50 hover:opacity-80"
        style={{ borderRadius: "50%" }}
        onClick={() => {
          onSlideChange(1);
        }}
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};
