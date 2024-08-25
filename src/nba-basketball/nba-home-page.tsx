import React from "react";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { BracketsSubHeader } from "../home-page/tabs/home-page-sub-headers/brackets-sub-header";

import { HomePageItem } from "../home-page/tabs/home-page-item";
import { OpinionsSubHeader } from "../home-page/tabs/home-page-sub-headers/opinions-sub-header";

export const NBAHomePage = () => {
  return (
    <HomePageTemplate headerLabel="NBA">
      <BracketsSubHeader>
        <HomePageItem
          title="NBA Playoff Pool"
          description=" Here is the text for the NBA playoff pool. I will put real text here
            later but this is where a description will live. There will be a
            much larger description here with lots of text. I'm hoping this goes
            to multiple lines so I can see what it looks like. If it doesn't, I
            will have to input more text. Click to access the NBA Playoff Pool
            360."
        />
      </BracketsSubHeader>
      <OpinionsSubHeader>
        <HomePageItem
          title="Mock NBA Opinion 1"
          description=" Here is the preview text for Mock Opinion 1. I want it to multiple
            lines so I will continue to type until it does so. This is mock text
            and the real text will be stored somewhere else. For now this is
            what I will do until I figure out the db solution."
        />
        <HomePageItem
          title="Mock NBA Opinion 2"
          description=" Here is the preview text for Mock Opinion 1. I want it to multiple
            lines so I will continue to type until it does so. This is mock text
            and the real text will be stored somewhere else. For now this is
            what I will do until I figure out the db solution."
        />
      </OpinionsSubHeader>
    </HomePageTemplate>
  );
};
