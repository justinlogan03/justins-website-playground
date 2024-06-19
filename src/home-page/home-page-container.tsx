import React from "react";
import { HomePageCarousel } from "./carousel/home-page-carousel";
import { HomePageTabs } from "./tabs/home-page-tabs";
import "/src/style.css";

export const HomePageContainer = () => {
  return (
    <div className="container mx-auto backdrop">
      <div className="pt-8">
        <HomePageCarousel />
      </div>
      <div className="pb-8 ">
        <HomePageTabs />
      </div>
    </div>
  );
};
