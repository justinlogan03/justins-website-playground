import React from "react";
import GamesIcon from "@mui/icons-material/Games";
import "/src/style.css";

export const GamesHeader = () => {
  return (
    <div>
      <h2 className="flex w-1/3 p-2 text-lg font-bold teal-text">
        <p className="mr-2 icon-color">
          <GamesIcon />
        </p>
        <p>Games</p>
      </h2>
      <div className="flex mb-4">
        <image className="w-48 mr-4 bg-gray-400 h-36 rounded-xl min-w-48"></image>
        <div className="p-4 selectable-background rounded-xl">
          <h3 className="font-bold teal-text">Would You Rather?</h3>
          <p className="text-white ">
            Here is the text for the would you rather game. This would contain a
            short explanation.
          </p>
        </div>
      </div>
    </div>
  );
};
