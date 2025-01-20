import React from "react";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { BracketsSubHeader } from "../home-page/tabs/home-page-sub-headers/brackets-sub-header";

import { HomePageItem } from "../home-page/tabs/home-page-item";
import { OpinionsSubHeader } from "../home-page/tabs/home-page-sub-headers/opinions-sub-header";
import sgaImage from "./images/sga-image.jpg";
import nbaPlayoffsImage from "./images/nba-bracket-image.jpg";

export const NBAHomePage = () => {
  return (
    <HomePageTemplate headerLabel="NBA">
      <BracketsSubHeader>
        <HomePageItem
          title="NBA Playoff Pool"
          description="NBA Playoff Pool portal."
          isComingSoon={true}
          image={nbaPlayoffsImage}
          imageVerticalPosition={20}
        />
      </BracketsSubHeader>
      <OpinionsSubHeader>
        <HomePageItem
          title="Is SGA overrated?"
          description="Tatum vs. SGA, the answer isn't what you would expect."
          isComingSoon={true}
          image={sgaImage}
        />
      </OpinionsSubHeader>
    </HomePageTemplate>
  );
};
