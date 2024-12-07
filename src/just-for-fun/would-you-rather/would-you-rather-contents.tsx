import React, { useState } from "react";

import { getRandomPrompts } from "./helpers/get-random-prompts";
import { CurrentPrompt } from "./types";
import { PromptCard } from "./components/prompt-card";
import { RefreshButton } from "./components/refresh-button";

export const WouldYouRatherContents = () => {
  const [isPromptOneLocked, setIsPromptOneLocked] = useState<boolean>(false);
  const [isPromptTwoLocked, setIsPromptTwoLocked] = useState<boolean>(false);
  const [currentPrompts, setCurrentPrompts] = useState<CurrentPrompt>(
    getRandomPrompts(isPromptOneLocked, isPromptTwoLocked)
  );

  const onRefresh = () => {
    setCurrentPrompts(
      getRandomPrompts(isPromptOneLocked, isPromptTwoLocked, currentPrompts)
    );
  };
  return (
    <div className="w-full flex">
      <div className="w-1/2 tab-height text-white justify-center items-center flex">
        <PromptCard
          label={currentPrompts.optionOne?.prompt}
          isLocked={isPromptOneLocked}
          setIsLocked={setIsPromptOneLocked}
        />
      </div>
      <div className="tab-height justify-center items-center flex">
        <div>
          <h1 className="text-white text-3xl font-bold text-center mb-8">
            Or...
          </h1>
          <RefreshButton onRefresh={onRefresh} />
        </div>
      </div>
      <div className="w-1/2 tab-height text-white justify-center items-center flex">
        <PromptCard
          label={currentPrompts.optionTwo?.prompt}
          isLocked={isPromptTwoLocked}
          setIsLocked={setIsPromptTwoLocked}
        />
      </div>
    </div>
  );
};
