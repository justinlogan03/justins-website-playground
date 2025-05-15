export const STANDARD_REG_POINT_VALUE = 1;
export const STANDARD_POST_POINT_VALUE = 2;

export const NFL_REG_GAMES = 17;
export const NFL_POST_GAMES = 4; // maximum number of postseason wins

export const NBA_REG_GAMES = 82;
export const NBA_POST_GAMES = 16; // maximum number of postseason wins

export const NHL_REG_GAMES = 82;
export const NHL_POST_GAMES = 16; // maximum number of postseason wins

export const MLB_REG_GAMES = 162;
export const MLB_POST_GAMES = 13; // maximum number of postseason wins

export const CBB_REG_GAMES = 35;
export const CBB_POST_GAMES = 6; // maximum number of postseason wins

export const CFB_REG_GAMES = 12;
export const CFB_POST_GAMES = 4; // maximum number of postseason wins

export const AVG_REG_GAMES =
  (NFL_REG_GAMES +
    NBA_REG_GAMES +
    NHL_REG_GAMES +
    MLB_REG_GAMES +
    CBB_REG_GAMES +
    CFB_REG_GAMES) /
  6;

export const AVG_POST_GAMES =
  (NFL_POST_GAMES +
    NBA_POST_GAMES +
    NHL_POST_GAMES +
    MLB_POST_GAMES +
    CBB_POST_GAMES +
    CFB_POST_GAMES) /
  6;
