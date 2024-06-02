import React, { useState } from "react";
import { TabOption } from "../constants";

import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SchoolIcon from "@mui/icons-material/School";
import { TabButton } from "./tab-button";
import { TabBodySwitcher } from "./tab-body-switcher";

export const HomePageTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>(TabOption.NBA);
  return (
    <div>
      <div className="flex w-full h-12 ">
        <TabButton
          tabOption={TabOption.NBA}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          isFirst={true}
        >
          <SportsBasketballIcon />
        </TabButton>

        <TabButton
          tabOption={TabOption.NFL}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        >
          <SportsFootballIcon />
        </TabButton>
        <TabButton
          tabOption={TabOption.College}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          isLast={true}
        >
          <SchoolIcon />
        </TabButton>
        <div className="w-full border-b-2 border-r-0 border-blue-500"></div>
      </div>
      <div
        className="flex w-full bg-white border-t-0 border-b-2 border-blue-500 border-x-2"
        style={{
          minHeight: "48rem",
        }}
      >
        <TabBodySwitcher selectedTab={selectedTab} />
      </div>
    </div>
  );
};
