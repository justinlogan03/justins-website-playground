import React from "react";
import { OpinionsSubHeader } from "../home-page/tabs/home-page-sub-headers/opinions-sub-header";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { HomePageItem } from "../home-page/tabs/home-page-item";

export const NFLHomePage = () => {
  return (
    <HomePageTemplate headerLabel="NFL">
      <OpinionsSubHeader>
        <HomePageItem
          title="Mock NFL Opinion 1"
          description=" Here is the preview text for Mock Opinion 1. I want it to multiple
            lines so I will continue to type until it does so. This is mock text
            and the real text will be stored somewhere else. For now this is
            what I will do until I figure out the db solution."
        />
        <HomePageItem
          title="Mock NFL Opinion 2"
          description=" Here is the preview text for Mock Opinion 1. I want it to multiple
            lines so I will continue to type until it does so. This is mock text
            and the real text will be stored somewhere else. For now this is
            what I will do until I figure out the db solution."
        />
      </OpinionsSubHeader>
    </HomePageTemplate>
  );
};
