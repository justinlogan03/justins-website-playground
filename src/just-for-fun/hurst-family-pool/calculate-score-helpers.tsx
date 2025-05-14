export const calculateNBAScore = ({
  regularSeasonWins,
  postSeasonWins,
}: {
  regularSeasonWins: number;
  postSeasonWins: number;
}) => {
  const standardizedRegularSeasonWins = regularSeasonWins * 0.5;

  const standardizedPostSeasonWins = postSeasonWins * 0.5;
  const postSeasonMultiplier = standardizedPostSeasonWins * 2;

  const totalScore = standardizedRegularSeasonWins + postSeasonMultiplier;
  return totalScore;
};
