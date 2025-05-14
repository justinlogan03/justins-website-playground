import { MLBTeamId } from "./constants/mlb-constants";
import { NBATeamId } from "./constants/nba-constants";

export enum TeamType {
  NBA = 1,
  NFL = 2,
  MLB = 3,
  NHL = 4,
  CBB = 5,
  CFB = 6,
}

export type NBATeamInfo = {
  id: NBATeamId;
  abbreviation: string;
  city: string;
  name: string;
  logo: string;
};

export type MLBTeamInfo = {
  id: MLBTeamId;
  logo: string;
};

export type TeamSelection = {
  teamName: string;
  teamId: number;
  selections: {
    nbaId: NBATeamId;
    mlbId: MLBTeamId;
  };
};

export type TeamScores = {
  teamId: number;
  scores: {
    nbaScore: number;
  };
};

export type NBATeamScoresResponse = {
  nbaTeamId: NBATeamId;
  wins: WinsObject;
};

export type MLBTeamScoresResponse = {
  mlbTeamId: MLBTeamId;
  wins: WinsObject;
};

export type WinsObject = {
  regularSeasonWins: number;
  postSeasonWins: number;
};

export type FullTeamScoresResponse = {
  nba: NBATeamScoresResponse[];
  mlb: MLBTeamScoresResponse[];
};
