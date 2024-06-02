import React from "react";
import { HomePageCarousel } from "./carousel/home-page-carousel";
import { HomePageTabs } from "./home-page-tabs";

export const HomePageContainer = () => {
  return (
    <div className="container mx-auto bg-blue-950">
      <div className="pt-8">
        <HomePageCarousel />
      </div>
      <div className="pb-8">
        <HomePageTabs />
      </div>
    </div>
  );
};
