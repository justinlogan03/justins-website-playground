import React from "react";
import { GamesSubHeader } from "../home-page/tabs/home-page-sub-headers/games-sub-header";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { HomePageItem } from "../home-page/tabs/home-page-item";
import wouldYouRatherThumbnail from "./images/would-you-rather-image.jpg";

export const JustForFunHomePage = () => {
  return (
    <HomePageTemplate headerLabel="Just For Fun">
      <GamesSubHeader>
        <HomePageItem
          title="Would You Rather?"
          description="Mock description for would you rather"
          link="/#/fun/wouldyourather"
          image={wouldYouRatherThumbnail}
          imageVerticalPosition={30}
        />
      </GamesSubHeader>
    </HomePageTemplate>
  );
};
