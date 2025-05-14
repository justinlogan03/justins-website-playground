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

export type TeamSelection = {
  teamName: string;
  teamId: number;
  selections: {
    nbaId: NBATeamId;
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

export type WinsObject = {
  regularSeasonWins: number;
  postSeasonWins: number;
};
