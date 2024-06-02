import { CarouselSlide } from "../constants";

export const changeSlide = ({
  changeAmount,
  slideList,
  currentSlide,
}: {
  changeAmount: number;
  slideList: CarouselSlide[];
  currentSlide: CarouselSlide;
}) => {
  const position =
    (slideList.indexOf(currentSlide) + changeAmount) % slideList.length;
  if (position < 0) {
    return slideList[slideList.length - 1];
  }
  return slideList[position];
};
