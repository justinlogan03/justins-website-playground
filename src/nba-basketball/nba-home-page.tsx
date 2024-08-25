import React from "react";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { BracketsHeader } from "../home-page/tabs/common-components/brackets-header";
import { OpinionsHeader } from "../home-page/tabs/common-components/opinions-header";

export const NBAHomePage = () => {
  return (
    <HomePageTemplate headerLabel="NBA">
      <BracketsHeader />
      <OpinionsHeader />
    </HomePageTemplate>
  );
};
