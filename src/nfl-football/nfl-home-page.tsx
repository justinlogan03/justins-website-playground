import React from "react";
import { OpinionsSubHeader } from "../home-page/tabs/home-page-sub-headers/opinions-sub-header";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { HomePageItem } from "../home-page/tabs/home-page-item";
import danMarinoImage from "./images/dan-marino.jpg";

export const NFLHomePage = () => {
  return (
    <HomePageTemplate headerLabel="NFL">
      <OpinionsSubHeader>
        <HomePageItem
          title=" Dan Marino - Why 1984 was the best sports season ever"
          description="Step into the ultimate sports debate: can greatness 
          truly be defined by championship rings? This article dives deep into 
          the career of Dan Marino, the legendary quarterback who shattered 
          records in 1984 with a season so extraordinary it still defies 
          comparison—proving that sometimes, a single moment of brilliance 
          can outshine a lifetime of trophies."
          link="/#/nfl/dan-marino-1984"
          image={danMarinoImage}
          imageVerticalPosition={15}
        />
      </OpinionsSubHeader>
    </HomePageTemplate>
  );
};
