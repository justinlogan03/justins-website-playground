import { TeamSelection } from "../hurst-family-pool-types";
import { MLBTeamId } from "./mlb-constants";
import { NBATeamId } from "./nba-constants";

// master constan that contains all team selections
export const TEAM_SELECTIONS: TeamSelection[] = [
  {
    teamName: "Justin",
    teamId: 1,
    selections: { nbaId: NBATeamId.BOS, mlbId: MLBTeamId.WSH },
  },
  {
    teamName: "Michael",
    teamId: 2,
    selections: { nbaId: NBATeamId.CLE, mlbId: MLBTeamId.PIT },
  },
  {
    teamName: "Evan",
    teamId: 3,
    selections: { nbaId: NBATeamId.UTA, mlbId: MLBTeamId.MIA },
  },
  {
    teamName: "Nicolas",
    teamId: 4,
    selections: { nbaId: NBATeamId.SAS, mlbId: MLBTeamId.CWS },
  },
  {
    teamName: "Mom",
    teamId: 5,
    selections: { nbaId: NBATeamId.OKC, mlbId: MLBTeamId.BAL },
  },
  {
    teamName: "Dad",
    teamId: 3,
    selections: { nbaId: NBATeamId.IND, mlbId: MLBTeamId.BOS },
  },
  {
    teamName: "Erin",
    teamId: 4,
    selections: { nbaId: NBATeamId.SAC, mlbId: MLBTeamId.DET },
  },
  {
    teamName: "Amanda",
    teamId: 5,
    selections: { nbaId: NBATeamId.DEN, mlbId: MLBTeamId.CIN },
  },
];
