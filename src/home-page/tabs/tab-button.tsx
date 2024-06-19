import React, { Dispatch, SetStateAction } from "react";
import { TabOption } from "../constants";
import classNames from "classnames";

type Props = {
  tabOption: TabOption;
  selectedTab: TabOption;
  setSelectedTab: Dispatch<SetStateAction<TabOption>>;
  children: JSX.Element;
  isFirst?: boolean;
  isLast?: boolean;
};

export const TabButton = ({
  tabOption,
  children,
  selectedTab,
  setSelectedTab,
  isFirst = false,
  isLast = false,
}: Props) => {
  return (
    <button
      className={classNames("w-32   border-blue-500 border-t-2", {
        " bg-blue-200 border-b-2": selectedTab !== tabOption,
        " bg-white": selectedTab === tabOption,
        "border-l-2 border-r": isFirst,
        "border-l border-r-2": isLast,
        "border-x-2": !isFirst && !isLast,
      })}
      style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
      onClick={() => {
        setSelectedTab(tabOption);
      }}
    >
      {children}
    </button>
  );
};
