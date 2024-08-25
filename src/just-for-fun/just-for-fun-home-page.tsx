import React from "react";
import { GamesHeader } from "../home-page/tabs/common-components/games-header";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";

export const JustForFunHomePage = () => {
  return (
    <HomePageTemplate headerLabel="Just For Fun">
      <GamesHeader />
    </HomePageTemplate>
  );
};
