import React from "react";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { OpinionsSubHeader } from "../home-page/tabs/home-page-sub-headers/opinions-sub-header";
import { HomePageItem } from "../home-page/tabs/home-page-item";
import accImage from "./images/acc-sports-image.jpg";

export const CollegeSportsHomePage = () => {
  return (
    <HomePageTemplate headerLabel="College Sports">
      <OpinionsSubHeader>
        <HomePageItem
          title="ACC domination. Why the loss of the ACC is absolutely tragic."
          description="The ACC is on the brink of being lost forever. Losing this conference and it's history is a tragic lesson in conference realignment."
          image={accImage}
          isComingSoon={true}
        />
      </OpinionsSubHeader>
    </HomePageTemplate>
  );
};
