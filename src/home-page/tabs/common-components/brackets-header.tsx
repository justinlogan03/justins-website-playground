import React from "react";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import "/src/style.css";

export const BracketsHeader = () => {
  return (
    <h2 className="flex w-1/3 p-2 mb-48 text-lg font-bold teal-text">
      <p className="mr-2 icon-color">
        <ScoreboardIcon />
      </p>
      <p>Brackets, Pools, and Fun</p>
    </h2>
  );
};
