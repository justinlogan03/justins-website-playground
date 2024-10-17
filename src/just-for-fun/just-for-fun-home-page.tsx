import React from "react";
import { GamesSubHeader } from "../home-page/tabs/home-page-sub-headers/games-sub-header";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { HomePageItem } from "../home-page/tabs/home-page-item";

export const JustForFunHomePage = () => {
  return (
    <HomePageTemplate headerLabel="Just For Fun">
      <GamesSubHeader>
        <HomePageItem
          title="Would You Rather?"
          description="Mock description for would you rather"
          link="/#/fun/wouldyourather"
        />
      </GamesSubHeader>
    </HomePageTemplate>
  );
};
