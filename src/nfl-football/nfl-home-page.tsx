import React from "react";
import { OpinionsHeader } from "../home-page/tabs/common-components/opinions-header";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";

export const NFLHomePage = () => {
  return (
    <HomePageTemplate headerLabel="NFL">
      <OpinionsHeader />
    </HomePageTemplate>
  );
};
