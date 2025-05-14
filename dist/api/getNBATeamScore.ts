const MAX_NBA_GAMES = 82 + 28;

export default async function handler(req: any, res: any) {
  const { nbaTeamIds, season } = req?.body as {
    nbaTeamIds: number[];
    season: number;
  };

  const buildParams = (postseason: boolean) => {
    const params = new URLSearchParams();
    nbaTeamIds.forEach((id) => params.append("team_ids[]", `${id}`));
    params.append("seasons[]", `${season}`);
    params.append("postseason", postseason.toString());
    params.append("per_page", `100`);
    return params;
  };

  const fetchAllGames = async (postseason: boolean): Promise<any[]> => {
    const baseParams = buildParams(postseason);
    let allGames: any[] = [];
    let cursor: string | null = null;

    do {
      const pageParams = new URLSearchParams(baseParams); // Clone base params
      if (cursor) pageParams.append("cursor", cursor);

      const url = `https://api.balldontlie.io/v1/games?${pageParams.toString()}`;

      const response = await fetch(url, {
        headers: {
          Authorization: "Bearer " + process.env.BALL_DONT_LIE_API_KEY,
        },
      });

      const data = await response.json();
      allGames.push(...data.data);
      cursor = data.meta.next_cursor;
    } while (cursor);

    return allGames;
  };

  try {
    const [regularGames, postseasonGames] = await Promise.all([
      fetchAllGames(false),
      fetchAllGames(true),
    ]);

    const nbaTeamScoresResponse = nbaTeamIds.map((nbaTeamId) => {
      let regularSeasonWins = 0;
      let postSeasonWins = 0;

      const countWins = (games: any[], isPostseason = false) => {
        for (const game of games) {
          const isHome = game.home_team.id === nbaTeamId;
          const isAway = game.visitor_team.id === nbaTeamId;

          if (!isHome && !isAway) continue;

          const isWin = isHome
            ? game.home_team_score > game.visitor_team_score
            : game.visitor_team_score > game.home_team_score;

          if (isWin) {
            if (isPostseason) {
              postSeasonWins++;
            } else {
              regularSeasonWins++;
            }
          }
        }
      };

      countWins(regularGames, false);
      countWins(postseasonGames, true);

      return {
        nbaTeamId,
        wins: {
          regularSeasonWins,
          rivalryWins: 0,
          postSeasonWins,
        },
      };
    });

    res.status(200).json({ nbaTeamScoresResponse });
  } catch (error) {
    console.error("Error fetching NBA team wins:", error);
    res.status(500).json({ error: "Failed to fetch NBA team wins" });
  }
}
