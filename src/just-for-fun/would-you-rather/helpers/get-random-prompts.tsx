import { MOCK_WOULD_YOU_RATHER_LIST } from "../constants";
import { CurrentPrompt, PromptValue } from "../types";

export const getRandomPrompts = (
  currentPrompt?: CurrentPrompt
): CurrentPrompt => {
  const availablePrompts = currentPrompt
    ? MOCK_WOULD_YOU_RATHER_LIST.filter((prompt) => {
        return (
          prompt.id !== currentPrompt.optionOne.id &&
          prompt.id !== currentPrompt.optionTwo.id
        );
      })
    : MOCK_WOULD_YOU_RATHER_LIST;
  console.log(availablePrompts);
  const newPromptOne: PromptValue =
    availablePrompts[Math.floor(Math.random() * (availablePrompts.length - 1))];

  const updatedAvailablePrompts = availablePrompts.filter((prompt) => {
    return prompt.id !== newPromptOne.id;
  });
  const newPromptTwo: PromptValue =
    updatedAvailablePrompts[
      Math.floor(Math.random() * (availablePrompts.length - 1))
    ];

  return { optionOne: newPromptOne, optionTwo: newPromptTwo };
};
