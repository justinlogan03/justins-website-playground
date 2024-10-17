import React from "react";
import { TabOption } from "../../constants";

import { JustForFunHomePage } from "../../just-for-fun/just-for-fun-home-page";
import { NBAHomePage } from "../../nba-basketball/nba-home-page";
import { NFLHomePage } from "../../nfl-football/nfl-home-page";
import { CollegeSportsHomePage } from "../../college-sports/college-sports-home-page";

type Props = {
  selectedTab: TabOption;
};

export const TabHomePageSwitcher = ({ selectedTab }: Props) => {
  switch (selectedTab) {
    case TabOption.NBA:
      return <NBAHomePage />;
    case TabOption.NFL:
      return <NFLHomePage />;
    case TabOption.College:
      return <CollegeSportsHomePage />;
    case TabOption.Fun:
      return <JustForFunHomePage />;
  }
};
