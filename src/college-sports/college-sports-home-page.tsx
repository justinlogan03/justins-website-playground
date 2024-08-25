import React from "react";
import { HomePageTemplate } from "../home-page/tabs/home-page-template";
import { OpinionsHeader } from "../home-page/tabs/common-components/opinions-header";

export const CollegeSportsHomePage = () => {
  return (
    <HomePageTemplate headerLabel="College Sports">
      <OpinionsHeader />
    </HomePageTemplate>
  );
};
