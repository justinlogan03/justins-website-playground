import React from "react";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import "/src/style.css";

export const BracketsHeader = () => {
  return (
    <div>
      <h2 className="flex w-1/3 p-2 text-lg font-bold teal-text">
        <p className="mr-2 icon-color">
          <ScoreboardIcon />
        </p>
        <p>Brackets, Pools, and Fun</p>
      </h2>
      <div className="flex mb-4">
        <image className="w-48 mr-4 bg-gray-400 h-36 rounded-xl min-w-48"></image>
        <div className="p-4 selectable-background rounded-xl">
          <h3 className="font-bold teal-text">NBA Playoff Pool</h3>
          <p className="text-white ">
            Here is the text for the NBA playoff pool. I will put real text here
            later but this is where a description will live. There will be a
            much larger description here with lots of text. I'm hoping this goes
            to multiple lines so I can see what it looks like. If it doesn't, I
            will have to input more text. Click to access the NBA Playoff Pool
            360.
          </p>
        </div>
      </div>
    </div>
  );
};
