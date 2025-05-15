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
  {
    id: MLBTeamId.CWS,
    logo: getMLBLogo(MLBTeamId.CWS),
  },
  {
    id: MLBTeamId.CIN,
    logo: getMLBLogo(MLBTeamId.CIN),
  },
  {
    id: MLBTeamId.CLE,
    logo: getMLBLogo(MLBTeamId.CLE),
  },
  {
    id: MLBTeamId.COL,
    logo: getMLBLogo(MLBTeamId.COL),
  },
  {
    id: MLBTeamId.DET,
    logo: getMLBLogo(MLBTeamId.DET),
  },
  {
    id: MLBTeamId.HOU,
    logo: getMLBLogo(MLBTeamId.HOU),
  },
  {
    id: MLBTeamId.KC,
    logo: getMLBLogo(MLBTeamId.KC),
  },
  {
    id: MLBTeamId.LAA,
    logo: getMLBLogo(MLBTeamId.LAA),
  },
  {
    id: MLBTeamId.LAD,
    logo: getMLBLogo(MLBTeamId.LAD),
  },
  {
    id: MLBTeamId.MIA,
    logo: getMLBLogo(MLBTeamId.MIA),
  },
  {
    id: MLBTeamId.MIL,
    logo: getMLBLogo(MLBTeamId.MIL),
  },
  {
    id: MLBTeamId.MIN,
    logo: getMLBLogo(MLBTeamId.MIN),
  },
  {
    id: MLBTeamId.NYM,
    logo: getMLBLogo(MLBTeamId.NYM),
  },
  {
    id: MLBTeamId.NYY,
    logo: getMLBLogo(MLBTeamId.NYY),
  },
  {
    id: MLBTeamId.OAK,
    logo: getMLBLogo(MLBTeamId.OAK),
  },
  {
    id: MLBTeamId.PHI,
    logo: getMLBLogo(MLBTeamId.PHI),
  },
  {
    id: MLBTeamId.PIT,
    logo: getMLBLogo(MLBTeamId.PIT),
  },
  {
    id: MLBTeamId.SD,
    logo: getMLBLogo(MLBTeamId.SD),
  },
  {
    id: MLBTeamId.SEA,
    logo: getMLBLogo(MLBTeamId.SEA),
  },
  {
    id: MLBTeamId.SF,
    logo: getMLBLogo(MLBTeamId.SF),
  },
  {
    id: MLBTeamId.STL,
    logo: getMLBLogo(MLBTeamId.STL),
  },
  {
    id: MLBTeamId.TB,
    logo: getMLBLogo(MLBTeamId.TB),
  },
  {
    id: MLBTeamId.TEX,
    logo: getMLBLogo(MLBTeamId.TEX),
  },
  {
    id: MLBTeamId.TOR,
    logo: getMLBLogo(MLBTeamId.TOR),
  },
  {
    id: MLBTeamId.WSH,
    logo: getMLBLogo(MLBTeamId.WSH),
  },
];
