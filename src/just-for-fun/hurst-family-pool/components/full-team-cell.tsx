import React from "react";
import { ScoreCell } from "./score-cell";
import { WinsObject } from "../hurst-family-pool-types";

type FullTeamCellProps = {
  score: number | undefined;
  wins: WinsObject | undefined;
  tooltipKey: string;
  logo: string | undefined;
};

export const FullTeamCell = ({
  score,
  wins,
  tooltipKey,
  logo,
}: FullTeamCellProps) => {
  return (
    <td className="border-r border-gray-300">
      <div className="text-center grid grid-rows-1 grid-cols-2 ">
        <img className="h-12 w-12 mx-auto my-auto " src={logo} />
        <ScoreCell score={score} wins={wins} tooltipKey={tooltipKey} />
      </div>
    </td>
  );
};
