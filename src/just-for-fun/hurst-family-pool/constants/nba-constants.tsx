import { NBATeamInfo } from "../hurst-family-pool-types";

export enum NBATeamId {
  ATL = 1, // Atlanta Hawks
  BOS = 2, // Boston Celtics
  BKN = 17, // Brooklyn Nets
  CHA = 30, // Charlotte Hornets
  CHI = 4, // Chicago Bulls
  CLE = 5, // Cleveland Cavaliers
  DAL = 6, // Dallas Mavericks
  DEN = 7, // Denver Nuggets
  DET = 8, // Detroit Pistons
  GSW = 9, // Golden State Warriors
  HOU = 10, // Houston Rockets
  IND = 11, // Indiana Pacers
  LAC = 12, // LA Clippers
  LAL = 13, // Los Angeles Lakers
  MEM = 29, // Memphis Grizzlies
  MIA = 14, // Miami Heat
  MIL = 15, // Milwaukee Bucks
  MIN = 16, // Minnesota Timberwolves
  NOP = 3, // New Orleans Pelicans
  NYK = 18, // New York Knicks
  OKC = 25, // Oklahoma City Thunder
  ORL = 19, // Orlando Magic
  PHI = 20, // Philadelphia 76ers
  PHX = 21, // Phoenix Suns
  POR = 22, // Portland Trail Blazers
  SAC = 23, // Sacramento Kings
  SAS = 24, // San Antonio Spurs
  TOR = 28, // Toronto Raptors
  UTA = 26, // Utah Jazz
  WAS = 27, // Washington Wizards
}

export const NBA_TEAM_INFO: NBATeamInfo[] = [
  {
    id: NBATeamId.ATL,
    abbreviation: "ATL",
    city: "Atlanta",
    name: "Hawks",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/atl.png",
  },
  {
    id: NBATeamId.BOS,
    abbreviation: "BOS",
    city: "Boston",
    name: "Celtics",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png",
  },
  {
    id: NBATeamId.BKN,
    abbreviation: "BKN",
    city: "Brooklyn",
    name: "Nets",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/bkn.png",
  },
  {
    id: NBATeamId.CHA,
    abbreviation: "CHA",
    city: "Charlotte",
    name: "Hornets",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/cha.png",
  },
  {
    id: NBATeamId.CHI,
    abbreviation: "CHI",
    city: "Chicago",
    name: "Bulls",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/chi.png",
  },
  {
    id: NBATeamId.CLE,
    abbreviation: "CLE",
    city: "Cleveland",
    name: "Caveliers",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/cle.png",
  },
  {
    id: NBATeamId.DAL,
    abbreviation: "DAL",
    city: "Dallas",
    name: "Mavericks",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/dal.png",
  },
  {
    id: NBATeamId.DEN,
    abbreviation: "DEN",
    city: "Denver",
    name: "Nuggets",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/den.png",
  },
  {
    id: NBATeamId.DET,
    abbreviation: "DET",
    city: "Detroit",
    name: "Pistons",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/det.png",
  },
  {
    id: NBATeamId.GSW,
    abbreviation: "GSW",
    city: "Golden State",
    name: "Warriors",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/gsw.png",
  },
  {
    id: NBATeamId.HOU,
    abbreviation: "HOU",
    city: "Houston",
    name: "Rockets",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/hou.png",
  },
  {
    id: NBATeamId.IND,
    abbreviation: "IND",
    city: "Indianapolis",
    name: "Pacers",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/ind.png",
  },
  {
    id: NBATeamId.LAC,
    abbreviation: "LAC",
    city: "Los Angeles",
    name: "Clippers",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/lac.png",
  },
  {
    id: NBATeamId.LAL,
    abbreviation: "LAL",
    city: "Los Angeles",
    name: "Lakers",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/lal.png",
  },
  {
    id: NBATeamId.MEM,
    abbreviation: "MEM",
    city: "Memphis",
    name: "Grizzlies",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/mem.png",
  },
  {
    id: NBATeamId.MIA,
    abbreviation: "MIA",
    city: "Miami",
    name: "Heat",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/mia.png",
  },
  {
    id: NBATeamId.MIL,
    abbreviation: "MIL",
    city: "Milwaukee",
    name: "Bucks",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/mil.png",
  },
  {
    id: NBATeamId.MIN,
    abbreviation: "MIN",
    city: "Minnesota",
    name: "Timberwolves",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/min.png",
  },
  {
    id: NBATeamId.NOP,
    abbreviation: "NOP",
    city: "New Orleans",
    name: "Pelicans",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/no.png",
  },
  {
    id: NBATeamId.NYK,
    abbreviation: "NYK",
    city: "New York",
    name: "Knicks",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/nyk.png",
  },
  {
    id: NBATeamId.OKC,
    abbreviation: "OKC",
    city: "Oklahoma City",
    name: "Thunder",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/okc.png",
  },
  {
    id: NBATeamId.ORL,
    abbreviation: "ORL",
    city: "Orlando",
    name: "Magic",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/orl.png",
  },
  {
    id: NBATeamId.PHI,
    abbreviation: "PHI",
    city: "Philadelphia",
    name: "76ers",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/phi.png",
  },
  {
    id: NBATeamId.PHX,
    abbreviation: "PHX",
    city: "Phoenix",
    name: "Suns",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/phx.png",
  },
  {
    id: NBATeamId.POR,
    abbreviation: "POR",
    city: "Portland",
    name: "Trailblazers",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/por.png",
  },
  {
    id: NBATeamId.SAC,
    abbreviation: "SAC",
    city: "Sacramento",
    name: "Kings",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/sac.png",
  },
  {
    id: NBATeamId.SAS,
    abbreviation: "SAS",
    city: "San Antonio",
    name: "Spurs",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/sas.png",
  },
  {
    id: NBATeamId.TOR,
    abbreviation: "TOR",
    city: "Toranto",
    name: "Raptors",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/tor.png",
  },
  {
    id: NBATeamId.UTA,
    abbreviation: "UTA",
    city: "Utah",
    name: "Jazz",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/uth.png",
  },
  {
    id: NBATeamId.WAS,
    abbreviation: "WAS",
    city: "Washington",
    name: "Wizards",
    logo: "https://a.espncdn.com/i/teamlogos/nba/500/was.png",
  },
];
