import React, { useState } from "react";
import { TabOption } from "../../constants";

import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SchoolIcon from "@mui/icons-material/School";
import SurfingIcon from "@mui/icons-material/Surfing";
import { TabButton } from "./tab-button";
import { TabHomePageSwitcher } from "./tab-home-page-switcher";
import "/src/style.css";

export const HomePageTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>(TabOption.Fun);
  return (
    <div className="relative">
      <div className="flex w-full h-12 ">
        {/** For Fun tab - - - - - - */}
        <TabButton
          tabOption={TabOption.Fun}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          isFirst={true}
        >
          <SurfingIcon />
        </TabButton>
        {/** NBA tab - - - - - - */}
        <TabButton
          tabOption={TabOption.NBA}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        >
          <SportsBasketballIcon />
        </TabButton>
        {/** NFL tab - - - - - - */}
        <TabButton
          tabOption={TabOption.NFL}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        >
          <SportsFootballIcon />
        </TabButton>
        {/** College tab - - - - - - */}
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
          className="w-full h-12 border-t-2 border-r-0 content-border"
          style={{ borderTopRightRadius: "14px", marginTop: "46px" }}
        ></div>
      </div>

      <div className="grid w-full border-b-2 content-border content-backdrop rounded-bottom border-x-2 rounded-b-xl rounded-tr-xl tab-height">
        <TabHomePageSwitcher selectedTab={selectedTab} />
      </div>
    </div>
  );
};
