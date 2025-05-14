import { WinsObject } from "../hurst-family-pool-types";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import React from "react";

type ScoreCellProps = {
  score: number;
  wins: WinsObject;
  tooltipKey: string;
};

export const ScoreCell = ({ score, wins, tooltipKey }: ScoreCellProps) => {
  const tooltipId = `${tooltipKey}-tooltip`;
  console.log(wins);
  console.log(tooltipId);
  return (
    <div
      className="text-center my-auto"
      data-tooltip-id={tooltipId}
      key={`${tooltipId}-score-cell`}
    >
      {score}
      <Tooltip id={tooltipId} style={{ background: "#248479" }}>
        <div className="grid grid-rows-2 font-bold">
          <div>{`Regular Season Wins: ${wins.regularSeasonWins}`}</div>
          <div>{`Post Season Wins: ${wins.postSeasonWins}`}</div>
        </div>
      </Tooltip>
    </div>
  );
};
