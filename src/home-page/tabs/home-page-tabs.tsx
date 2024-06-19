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
    <div className="relative">
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
        {/** Used to make the top border curved. Border radius and margin are to account for h-12 of tabs*/}
        <div
          className="w-full h-12 border-t-2 border-r-0 border-blue-500"
          style={{ borderTopRightRadius: "14px", marginTop: "46px" }}
        ></div>
      </div>

      <div
        className="grid w-full bg-white border-b-2 border-blue-500 border-x-2"
        style={{
          minHeight: "48rem",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        <TabBodySwitcher selectedTab={selectedTab} />
      </div>
    </div>
  );
};
