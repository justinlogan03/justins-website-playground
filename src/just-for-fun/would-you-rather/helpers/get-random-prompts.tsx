import { MOCK_WOULD_YOU_RATHER_LIST } from "../constants";
import { CurrentPrompt, PromptValue } from "../types";

export const getRandomPrompts = (
  isPromptOneLocked: boolean,
  isPromptTwoLocked: boolean,
  currentPrompt?: CurrentPrompt
): CurrentPrompt => {
  if (isPromptOneLocked && isPromptTwoLocked && currentPrompt) {
    return currentPrompt;
  }

  const availablePrompts = currentPrompt
    ? MOCK_WOULD_YOU_RATHER_LIST.filter((prompt) => {
        return (
          prompt.id !== currentPrompt.optionOne.id &&
          prompt.id !== currentPrompt.optionTwo.id
        );
      })
    : MOCK_WOULD_YOU_RATHER_LIST;

  const newPromptOne: PromptValue =
    availablePrompts[Math.floor(Math.random() * (availablePrompts.length - 1))];

  const updatedAvailablePrompts = availablePrompts.filter((prompt) => {
    return prompt.id !== newPromptOne.id;
  });
  const newPromptTwo: PromptValue =
    updatedAvailablePrompts[
      Math.floor(Math.random() * (availablePrompts.length - 1))
    ];

  return {
    optionOne:
      isPromptOneLocked && currentPrompt
        ? currentPrompt?.optionOne
        : newPromptOne,
    optionTwo:
      isPromptTwoLocked && currentPrompt
        ? currentPrompt?.optionTwo
        : newPromptTwo,
  };
};
