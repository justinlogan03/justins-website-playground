import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import { getRandomPrompts } from "./helpers/get-random-prompts";
import { CurrentPrompt } from "./types";

export const WouldYouRatherContents = () => {
  const [currentPrompts, setCurrentPrompts] = useState<CurrentPrompt>(
    getRandomPrompts()
  );

  const onRefresh = () => {
    setCurrentPrompts(getRandomPrompts(currentPrompts));
  };
  return (
    <div className="w-full flex">
      <div className="w-1/2 tab-height text-white justify-center items-center flex">
        {currentPrompts.optionOne?.prompt}
      </div>
      <div className="tab-height justify-center items-center flex">
        <div>
          <h1 className="text-white text-3xl font-bold text-center mb-8">
            Or...
          </h1>
          <button
            className="selectable-background h-12 w-12 rounded-xl icon-color"
            onClick={onRefresh}
          >
            <AutorenewIcon fontSize="large" />
          </button>
        </div>
      </div>
      <div className="w-1/2 tab-height text-white justify-center items-center flex">
        {currentPrompts.optionTwo?.prompt}
      </div>
    </div>
  );
};
