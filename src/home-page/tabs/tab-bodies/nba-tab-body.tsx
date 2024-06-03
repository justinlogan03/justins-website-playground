import React from "react";
import { BodyTemplate } from "./body-template";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import ArticleIcon from "@mui/icons-material/Article";

export const NBATabBody = () => {
  return (
    <BodyTemplate headerLabel="NBA">
      <h2 className="flex w-1/3 p-2 mb-48 text-lg font-bold bg-blue-200 border-b-2 border-black">
        <p className="mr-2">
          <ScoreboardIcon />
        </p>
        <p>Brackets, Pools, and Fun</p>
      </h2>
      <h2 className="flex w-1/3 p-2 text-lg font-bold bg-blue-200 border-b-2 border-black">
        <p className="mr-2">
          <ArticleIcon />
        </p>
        <p> My Opinions</p>
      </h2>
    </BodyTemplate>
  );
};
