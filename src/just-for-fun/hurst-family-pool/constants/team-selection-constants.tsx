import { TeamSelection } from "../hurst-family-pool-types";
import { MLBTeamId } from "./mlb-constants";
import { NBATeamId } from "./nba-constants";

// master constan that contains all team selections
export const TEAM_SELECTIONS: TeamSelection[] = [
  {
    teamName: "Justin",
    teamId: 1,
    selections: { nbaId: NBATeamId.BOS, mlbId: MLBTeamId.ARI },
  },
  {
    teamName: "Michael",
    teamId: 2,
    selections: { nbaId: NBATeamId.CLE, mlbId: MLBTeamId.ATL },
  },
  {
    teamName: "Evan",
    teamId: 3,
    selections: { nbaId: NBATeamId.UTA, mlbId: MLBTeamId.BOS },
  },
  // { teamName: "Nicolas", teamId: 4, selections: { nbaId: NBATeamId.SAS } },
  // { teamName: "Mom", teamId: 5, selections: { nbaId: NBATeamId.OKC } },
  // { teamName: "Dad", teamId: 3, selections: { nbaId: NBATeamId.IND } },
  // { teamName: "Erin", teamId: 4, selections: { nbaId: NBATeamId.SAC } },
  // { teamName: "Amanda", teamId: 5, selections: { nbaId: NBATeamId.DEN } },
];
