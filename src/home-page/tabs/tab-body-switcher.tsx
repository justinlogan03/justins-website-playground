import React from "react";
import { TabOption } from "../constants";
import { NBATabBody } from "./tab-bodies/nba-tab-body";
import { NFLTabBody } from "./tab-bodies/nfl-tab-body";
import { CollegeTabBody } from "./tab-bodies/college-tab-body";
import { FunTabBody } from "./tab-bodies/fun-tab-body";

type Props = {
  selectedTab: TabOption;
};

export const TabBodySwitcher = ({ selectedTab }: Props) => {
  switch (selectedTab) {
    case TabOption.NBA:
      return <NBATabBody />;
    case TabOption.NFL:
      return <NFLTabBody />;
    case TabOption.College:
      return <CollegeTabBody />;
    case TabOption.Fun:
      return <FunTabBody />;
  }
};
