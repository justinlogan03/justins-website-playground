import { WinsObject } from "./hurst-family-pool-types";

type ScoreProps = {
  wins: WinsObject | undefined;
};
//TODO - come up with standardized forumla for scoring
export const calculateNBAScore = ({ wins }: ScoreProps) => {
  if (!wins) return undefined;
  const { regularSeasonWins, postSeasonWins } = wins;
  const standardizedRegularSeasonWins = regularSeasonWins * 0.5;

  const standardizedPostSeasonWins = postSeasonWins * 0.5;
  const postSeasonMultiplier = standardizedPostSeasonWins * 2;

  const totalScore = standardizedRegularSeasonWins + postSeasonMultiplier;
  return totalScore;
};

export const calculateMLBScore = ({ wins }: ScoreProps) => {
  if (!wins) return undefined;
  const { regularSeasonWins, postSeasonWins } = wins;
  const standardizedRegularSeasonWins = regularSeasonWins * 0.25;

  const standardizedPostSeasonWins = postSeasonWins * 0.5;
  const postSeasonMultiplier = standardizedPostSeasonWins * 2;

  const totalScore = standardizedRegularSeasonWins + postSeasonMultiplier;
  return totalScore;
};
