import React, { Dispatch, SetStateAction } from "react";
import { TabOption } from "../constants";
import classNames from "classnames";

type Props = {
  tabOption: TabOption;
  selectedTab: TabOption;
  setSelectedTab: Dispatch<SetStateAction<TabOption>>;
  children: JSX.Element;
};

export const TabButton = ({
  tabOption,
  children,
  selectedTab,
  setSelectedTab,
}: Props) => {
  return (
    <button
      className={classNames("w-32  ", {
        " bg-gray-500": selectedTab !== tabOption,
        " bg-gray-400": selectedTab === tabOption,
      })}
      style={{ borderTopLeftRadius: "25%", borderTopRightRadius: "25%" }}
      onClick={() => {
        setSelectedTab(tabOption);
      }}
    >
      {children}
    </button>
  );
};
