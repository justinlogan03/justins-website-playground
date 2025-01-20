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
          description="Fun game where players face a series of amusing, 
          thought-provoking, or challenging scenarios and must choose 
          between two options, sparking lively debates and laughter. 
          Perfect for groups or solo play, it’s a great way to learn 
          about others' preferences and values while having a good time."
          link="/#/fun/wouldyourather"
          image={wouldYouRatherThumbnail}
          imageVerticalPosition={30}
        />
      </GamesSubHeader>
    </HomePageTemplate>
  );
};
