import {
  AVG_POST_GAMES,
  AVG_REG_GAMES,
  MLB_POST_GAMES,
  MLB_REG_GAMES,
  NBA_POST_GAMES,
  NBA_REG_GAMES,
  STANDARD_POST_POINT_VALUE,
  STANDARD_REG_POINT_VALUE,
} from "./constants/calculate-score-constants";
import { WinsObject } from "./hurst-family-pool-types";

type ScoreProps = {
  wins: WinsObject | undefined;
};

export const calculateNBAScore = ({ wins }: ScoreProps) => {
  if (!wins) return undefined;
  const { regularSeasonWins, postSeasonWins } = wins;

  const nbaRegAdjust = AVG_REG_GAMES / NBA_REG_GAMES;
  const nbaPostAdjust = AVG_POST_GAMES / NBA_POST_GAMES;

  const standardizedRegularSeasonWins =
    regularSeasonWins * nbaRegAdjust * STANDARD_REG_POINT_VALUE;

  const standardizedPostSeasonWins =
    postSeasonWins * nbaPostAdjust * STANDARD_POST_POINT_VALUE;

  const totalScore = standardizedRegularSeasonWins + standardizedPostSeasonWins;
  return Number(totalScore.toFixed(0));
};

export const calculateMLBScore = ({ wins }: ScoreProps) => {
  if (!wins) return undefined;
  const { regularSeasonWins, postSeasonWins } = wins;

  const mlbRegAdjust = AVG_REG_GAMES / MLB_REG_GAMES;
  const mlbPostAdjust = AVG_POST_GAMES / MLB_POST_GAMES;

  const standardizedRegularSeasonWins =
    regularSeasonWins * mlbRegAdjust * STANDARD_REG_POINT_VALUE;

  const standardizedPostSeasonWins =
    postSeasonWins * mlbPostAdjust * STANDARD_POST_POINT_VALUE;

  const totalScore = standardizedRegularSeasonWins + standardizedPostSeasonWins;
  return Number(totalScore.toFixed(0));
};
