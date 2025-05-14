import { MLBTeamId } from "../constants/mlb-constants";

import { MLBTeamScoresResponse } from "../hurst-family-pool-types";

type MlbTeamProps = {
  mlbTeamIds: MLBTeamId[];
  season: 2024 | 2025; // only supported years
};

export const getMlbTeamScore = async ({
  mlbTeamIds,
  season,
}: MlbTeamProps): Promise<MLBTeamScoresResponse[]> => {
  const res = await fetch("/api/getMLBTeamScore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mlbTeamIds, season }),
  });

  const { mlbTeamScoresResponse } = await res.json();

  return mlbTeamScoresResponse as MLBTeamScoresResponse[];
};
