import React from "react";
import { HomePageCarousel } from "./home-page-carousel";
import { HomePageTabs } from "./home-page-tabs";

export const HomePageContainer = () => {
  return (
    <div>
      <HomePageCarousel />
      <HomePageTabs />
    </div>
  );
};
