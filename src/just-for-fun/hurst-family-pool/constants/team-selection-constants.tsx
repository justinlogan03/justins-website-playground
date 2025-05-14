import { TeamSelection } from "../hurst-family-pool-types";
import { NBATeamId } from "./nba-constants";

// master constan that contains all team selections
export const TEAM_SELECTIONS: TeamSelection[] = [
  { teamName: "Team 1", teamId: 1, selections: { nbaId: NBATeamId.BOS } },
  { teamName: "Team 2", teamId: 2, selections: { nbaId: NBATeamId.SAS } },
  { teamName: "Team 4", teamId: 4, selections: { nbaId: NBATeamId.UTA } },
];
