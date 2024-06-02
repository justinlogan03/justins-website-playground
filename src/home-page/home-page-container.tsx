import React from "react";
import { HomePageCarousel } from "./carousel/home-page-carousel";
import { HomePageTabs } from "./tabs/home-page-tabs";

export const HomePageContainer = () => {
  return (
    <div className="container mx-auto bg-gray-300">
      <div className="pt-8">
        <HomePageCarousel />
      </div>
      <div className="pb-8 ">
        <HomePageTabs />
      </div>
    </div>
  );
};
