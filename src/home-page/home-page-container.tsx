import React from "react";
import { HomePageCarousel } from "./carousel/home-page-carousel";
import { HomePageTabs } from "./tabs/home-page-tabs";
import "/src/style.css";

export const HomePageContainer = () => {
  return (
    <div>
      <div className="pt-4">
        <HomePageCarousel />
      </div>
      <div className="pb-8 ">
        <HomePageTabs />
      </div>
    </div>
  );
};
