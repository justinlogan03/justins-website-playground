import React from "react";
import { CarouselSlide } from "../../constants";
import celticsImage from "../images/celtics-championship-image.jpg";
import danMarinoImage from "../images/dan-marino.jpg";
import uvaImage from "../images/uva-image.jpg";
import { Slide } from "./slide";

type Props = {
  currentSlide: CarouselSlide;
};

export const CarouselSlides = ({ currentSlide }: Props) => {
  switch (currentSlide) {
    case CarouselSlide.Celtics:
      return <Slide image={celticsImage} verticalPosition={15} />;
    case CarouselSlide.Patriots:
      return <Slide image={danMarinoImage} verticalPosition={20} />;
    case CarouselSlide.UVA:
      return <Slide image={uvaImage} verticalPosition={50} />;
  }
};
