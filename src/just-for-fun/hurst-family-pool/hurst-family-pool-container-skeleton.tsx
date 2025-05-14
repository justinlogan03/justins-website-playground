import React from "react";

import { TEAM_SELECTIONS } from "./constants/team-selection-constants";
import classNames from "classnames";

import { HurstFamilyPoolWrapper } from "./hurst-family-pool-wrapper";

export const HurstFamilyPoolContainerSkeleton = () => {
  return (
    <HurstFamilyPoolWrapper>
      <>
        {TEAM_SELECTIONS?.map((teamSelection, index) => {
          const isLastItem = !TEAM_SELECTIONS?.[index + 1];

          const key = `${teamSelection?.teamName}-${index}`;
          return (
            <tr
              className={classNames(
                "rounded-md animate-pulse",
                { "bg-gray-100": index % 2 === 0 },
                { "bg-gray-200": index % 2 !== 0 },
                { "rounded-b-md ": isLastItem }
              )}
              key={key}
            >
              <td
                className={classNames("border-r border-gray-300", {
                  "rounded-bl-md": isLastItem,
                })}
              ></td>
              <td className="border-r border-gray-300">
                <div className="h-12"></div>
              </td>
              <td className="border-r border-gray-300">
                <div className="h-12"></div>
              </td>
              <td className="border-r border-gray-300">
                <div className="h-12"></div>
              </td>
              <td className="border-r border-gray-300">
                <div className="h-12"></div>
              </td>
              <td className="border-r border-gray-300">
                <div className="h-12"></div>
              </td>
              <td className="border-r border-gray-300">
                <div className="h-12"></div>
              </td>
              <td
                className={classNames("", {
                  "rounded-br-md": isLastItem,
                })}
              ></td>
            </tr>
          );
        })}
      </>
    </HurstFamilyPoolWrapper>
  );
};
