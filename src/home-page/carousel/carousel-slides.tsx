import React from "react";
import { CarouselSlide } from "../../constants";
import wouldYouRatherImage from "../images/would-you-rather-image.jpg";
import danMarinoImage from "../images/dan-marino.jpg";
import { Slide } from "./slide";

type Props = {
  currentSlide: CarouselSlide;
};

export const CarouselSlides = ({ currentSlide }: Props) => {
  switch (currentSlide) {
    case CarouselSlide.DanMarino:
      return (
        <Slide
          image={danMarinoImage}
          verticalPosition={15}
          link="/#/nfl/dan-marino-1984"
          isNew={true}
        />
      );
    case CarouselSlide.WouldYouRather:
      return (
        <Slide
          image={wouldYouRatherImage}
          verticalPosition={10}
          link="/#/fun/wouldyourather"
          isNew={true}
        />
      );
  }
};
