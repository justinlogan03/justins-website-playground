import { MLBTeamInfo } from "../hurst-family-pool-types";

export enum MLBTeamId {
  ARI = "ARI", // Arizona Diamondbacks
  ATL = "ATL", // Atlanta Braves
  BAL = "BAL", // Baltimore Orioles
  BOS = "BOS", // Boston Red Sox
  CHC = "CHC", // Chicago Cubs
  CWS = "CWS", // Chicago White Sox
  CIN = "CIN", // Cincinnati Reds
  CLE = "CLE", // Cleveland Guardians
  COL = "COL", // Colorado Rockies
  DET = "DET", // Detroit Tigers
  HOU = "HOU", // Houston Astros
  KC = "KC", // Kansas City Royals
  LAA = "LAA", // Los Angeles Angels
  LAD = "LAD", // Los Angeles Dodgers
  MIA = "MIA", // Miami Marlins
  MIL = "MIL", // Milwaukee Brewers
  MIN = "MIN", // Minnesota Twins
  NYM = "NYM", // New York Mets
  NYY = "NYY", // New York Yankees
  OAK = "OAK", // Oakland Athletics
  PHI = "PHI", // Philadelphia Phillies
  PIT = "PIT", // Pittsburgh Pirates
  SD = "SD", // San Diego Padres
  SEA = "SEA", // Seattle Mariners
  SF = "SF", // San Francisco Giants
  STL = "STL", // St. Louis Cardinals
  TB = "TB", // Tampa Bay Rays
  TEX = "TEX", // Texas Rangers
  TOR = "TOR", // Toronto Blue Jays
  WSH = "WSH", // Washington Nationals
}

const getMLBLogo = (id: MLBTeamId) => {
  const lowerCaseId = id.toLocaleLowerCase();
  return `https://a.espncdn.com/i/teamlogos/mlb/500/${lowerCaseId}.png`;
};

export const MLB_TEAM_INFO: MLBTeamInfo[] = [
  {
    id: MLBTeamId.ARI,
    logo: getMLBLogo(MLBTeamId.ARI),
  },
  {
    id: MLBTeamId.ATL,
    logo: getMLBLogo(MLBTeamId.ATL),
  },
  {
    id: MLBTeamId.BAL,
    logo: getMLBLogo(MLBTeamId.BAL),
  },
  {
    id: MLBTeamId.BOS,
    logo: getMLBLogo(MLBTeamId.BOS),
  },
  {
    id: MLBTeamId.CHC,
    logo: getMLBLogo(MLBTeamId.CHC),
  },
];
