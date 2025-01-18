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
          description="Why is Dan Marino in such high regard with such little playoff success? The answer is 1984. Many considered Dan Marino ahead of his time.
          His success in 1984 will never be replicated"
          link="/#/nfl/dan-marino-1984"
          image={danMarinoImage}
          imageVerticalPosition={15}
        />
      </OpinionsSubHeader>
    </HomePageTemplate>
  );
};
