import { NBATeamId } from "../constants/nba-constants";
import { NBATeamScoresResponse } from "../hurst-family-pool-types";

type NbaTeamProps = {
  nbaTeamIds: NBATeamId[];
  season: 2024 | 2025; // only supported years
};

export const getNbaTeamScore = async ({
  nbaTeamIds,
}: NbaTeamProps): Promise<NBATeamScoresResponse[]> => {
  const res = await fetch("/api/getNBATeamScore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nbaTeamIds }),
  });

  const { nbaTeamScoresResponse } = await res.json();
  return nbaTeamScoresResponse as NBATeamScoresResponse[];
};
