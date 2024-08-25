import React, { ReactNode } from "react";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import "/src/style.css";

type Props = {
  children: ReactNode;
};
export const BracketsSubHeader = ({ children }: Props) => {
  return (
    <div>
      <h2 className="flex w-1/3 p-2 text-lg font-bold teal-text">
        <p className="mr-2 icon-color">
          <ScoreboardIcon />
        </p>
        <p>Brackets, Pools, and Fun</p>
      </h2>
      {children}
    </div>
  );
};
