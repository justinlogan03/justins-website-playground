import { WinsObject } from "./hurst-family-pool-types";

export const calculateNBAScore = ({
  regularSeasonWins,
  postSeasonWins,
}: WinsObject) => {
  const standardizedRegularSeasonWins = regularSeasonWins * 0.5;

  const standardizedPostSeasonWins = postSeasonWins * 0.5;
  const postSeasonMultiplier = standardizedPostSeasonWins * 2;

  const totalScore = standardizedRegularSeasonWins + postSeasonMultiplier;
  return totalScore;
};
