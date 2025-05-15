import { MLBTeamInfo } from "../hurst-family-pool-types";

export enum MLBTeamId {
  ARI = 29, // Arizona Diamondbacks
  ATL = 15, // Atlanta Braves
  BAL = 1, // Baltimore Orioles
  BOS = 2, // Boston Red Sox
  CHC = 16, // Chicago Cubs
  CWS = 4, // Chicago White Sox
  CIN = 17, // Cincinnati Reds
  CLE = 5, // Cleveland Guardians
  COL = 27, // Colorado Rockies
  DET = 6, // Detroit Tigers
  HOU = 18, // Houston Astros
  KC = 7, // Kansas City Royals
  LAA = 3, // Los Angeles Angels
  LAD = 19, // Los Angeles Dodgers
  MIA = 28, // Miami Marlins
  MIL = 8, // Milwaukee Brewers
  MIN = 9, // Minnesota Twins
  NYM = 21, // New York Mets
  NYY = 10, // New York Yankees
  OAK = 11, // Oakland Athletics
  PHI = 22, // Philadelphia Phillies
  PIT = 23, // Pittsburgh Pirates
  SD = 25, // San Diego Padres
  SEA = 12, // Seattle Mariners
  SF = 26, // San Francisco Giants
  STL = 24, // St. Louis Cardinals
  TB = 30, // Tampa Bay Rays
  TEX = 13, // Texas Rangers
  TOR = 14, // Toronto Blue Jays
  WSH = 20, // Washington Nationals
}

export enum MLBTeamAbbreviation {
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

const getMLBLogo = (id: MLBTeamAbbreviation) => {
  const lowerCaseId = id.toLocaleLowerCase();
  return `https://a.espncdn.com/i/teamlogos/mlb/500/${lowerCaseId}.png`;
};

export const MLB_TEAM_INFO: MLBTeamInfo[] = [
  {
    id: MLBTeamId.ARI,
    logo: getMLBLogo(MLBTeamAbbreviation.ARI),
  },
  {
    id: MLBTeamId.ATL,
    logo: getMLBLogo(MLBTeamAbbreviation.ATL),
  },
  {
    id: MLBTeamId.BAL,
    logo: getMLBLogo(MLBTeamAbbreviation.BAL),
  },
  {
    id: MLBTeamId.BOS,
    logo: getMLBLogo(MLBTeamAbbreviation.BOS),
  },
  {
    id: MLBTeamId.CHC,
    logo: getMLBLogo(MLBTeamAbbreviation.CHC),
  },
  {
    id: MLBTeamId.CWS,
    logo: getMLBLogo(MLBTeamAbbreviation.CWS),
  },
  {
    id: MLBTeamId.CIN,
    logo: getMLBLogo(MLBTeamAbbreviation.CIN),
  },
  {
    id: MLBTeamId.CLE,
    logo: getMLBLogo(MLBTeamAbbreviation.CLE),
  },
  {
    id: MLBTeamId.COL,
    logo: getMLBLogo(MLBTeamAbbreviation.COL),
  },
  {
    id: MLBTeamId.DET,
    logo: getMLBLogo(MLBTeamAbbreviation.DET),
  },
  {
    id: MLBTeamId.HOU,
    logo: getMLBLogo(MLBTeamAbbreviation.HOU),
  },
  {
    id: MLBTeamId.KC,
    logo: getMLBLogo(MLBTeamAbbreviation.KC),
  },
  {
    id: MLBTeamId.LAA,
    logo: getMLBLogo(MLBTeamAbbreviation.LAA),
  },
  {
    id: MLBTeamId.LAD,
    logo: getMLBLogo(MLBTeamAbbreviation.LAD),
  },
  {
    id: MLBTeamId.MIA,
    logo: getMLBLogo(MLBTeamAbbreviation.MIA),
  },
  {
    id: MLBTeamId.MIL,
    logo: getMLBLogo(MLBTeamAbbreviation.MIL),
  },
  {
    id: MLBTeamId.MIN,
    logo: getMLBLogo(MLBTeamAbbreviation.MIN),
  },
  {
    id: MLBTeamId.NYM,
    logo: getMLBLogo(MLBTeamAbbreviation.NYM),
  },
  {
    id: MLBTeamId.NYY,
    logo: getMLBLogo(MLBTeamAbbreviation.NYY),
  },
  {
    id: MLBTeamId.OAK,
    logo: getMLBLogo(MLBTeamAbbreviation.OAK),
  },
  {
    id: MLBTeamId.PHI,
    logo: getMLBLogo(MLBTeamAbbreviation.PHI),
  },
  {
    id: MLBTeamId.PIT,
    logo: getMLBLogo(MLBTeamAbbreviation.PIT),
  },
  {
    id: MLBTeamId.SD,
    logo: getMLBLogo(MLBTeamAbbreviation.SD),
  },
  {
    id: MLBTeamId.SEA,
    logo: getMLBLogo(MLBTeamAbbreviation.SEA),
  },
  {
    id: MLBTeamId.SF,
    logo: getMLBLogo(MLBTeamAbbreviation.SF),
  },
  {
    id: MLBTeamId.STL,
    logo: getMLBLogo(MLBTeamAbbreviation.STL),
  },
  {
    id: MLBTeamId.TB,
    logo: getMLBLogo(MLBTeamAbbreviation.TB),
  },
  {
    id: MLBTeamId.TEX,
    logo: getMLBLogo(MLBTeamAbbreviation.TEX),
  },
  {
    id: MLBTeamId.TOR,
    logo: getMLBLogo(MLBTeamAbbreviation.TOR),
  },
  {
    id: MLBTeamId.WSH,
    logo: getMLBLogo(MLBTeamAbbreviation.WSH),
  },
];
