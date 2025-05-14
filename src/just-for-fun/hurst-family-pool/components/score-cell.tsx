import { WinsObject } from "../hurst-family-pool-types";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import React from "react";

type ScoreCellProps = {
  score: number | undefined;
  wins: WinsObject | undefined;
  tooltipKey: string;
};

export const ScoreCell = ({ score, wins, tooltipKey }: ScoreCellProps) => {
  const tooltipId = `${tooltipKey}-tooltip`;
  const noContentPlaceholder = "--";

  return (
    <div
      className="text-center my-auto"
      data-tooltip-id={tooltipId}
      key={`${tooltipId}-score-cell`}
    >
      {score ?? noContentPlaceholder}
      <Tooltip id={tooltipId} style={{ background: "#248479" }}>
        <div className="grid grid-rows-2 font-bold">
          <div>{`Regular Season Wins: ${
            wins?.regularSeasonWins ?? noContentPlaceholder
          }`}</div>
          <div>{`Post Season Wins: ${
            wins?.postSeasonWins ?? noContentPlaceholder
          }`}</div>
        </div>
      </Tooltip>
    </div>
  );
};
