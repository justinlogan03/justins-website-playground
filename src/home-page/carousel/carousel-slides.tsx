import React from "react";
import { CarouselSlide } from "../constants";
import celticsImage from "../images/tatum.jpg";
import patriotsImage from "../images/brady.jpg";
import uvaImage from "../images/uva.jpg";
import { Slide } from "./slide";

type Props = {
  currentSlide: CarouselSlide;
};

export const CarouselSlides = ({ currentSlide }: Props) => {
  switch (currentSlide) {
    case CarouselSlide.SlideOne:
      return <Slide image={celticsImage} verticalPosition={30} />;
    case CarouselSlide.SlideTwo:
      return <Slide image={patriotsImage} verticalPosition={50} />;
    case CarouselSlide.SlideThree:
      return <Slide image={uvaImage} verticalPosition={70} />;
  }
};
