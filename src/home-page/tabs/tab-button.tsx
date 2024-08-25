import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { TabOption } from "../constants";
import classNames from "classnames";
import "/src/style.css";

type Props = {
  tabOption: TabOption;
  selectedTab: TabOption;
  setSelectedTab: Dispatch<SetStateAction<TabOption>>;
  children: ReactNode;
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
      className={classNames(
        "w-32 content-border border-t-2 rounded-t-xl icon-color",
        {
          "selectable-background border-b-2": selectedTab !== tabOption,
          "content-backdrop": selectedTab === tabOption,
          "border-l-2 border-r": isFirst,
          "border-l border-r-2": isLast,
          "border-x-2": !isFirst && !isLast,
        }
      )}
      onClick={() => {
        setSelectedTab(tabOption);
      }}
    >
      {children}
    </button>
  );
};
