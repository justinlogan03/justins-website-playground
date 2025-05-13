export default async function handler(_req: any, res: any) {
  const teamId = 2; // Boston Celtics

  let page = 1;
  let totalWins = 0;
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const response = await fetch(
        "https://api.balldontlie.io/v1/games?team_ids[]=2&seasons[]=2024&postseason=false&per_page=100",
        {
          headers: {
            Authorization: "Bearer " + process.env.BALL_DONT_LIE_API_KEY,
          },
        }
      );

      const data = await response.json();

      for (const game of data.data) {
        const isHome = game.home_team.id === teamId;
        const isWin = isHome
          ? game.home_team_score > game.visitor_team_score
          : game.visitor_team_score > game.home_team_score;

        if (isWin) {
          totalWins++;
        }
      }

      page++;
    }

    res.status(200).json({ wins: totalWins });
  } catch (error) {
    console.error("Error fetching Celtics wins:", error);
    res.status(500).json({ error: "Failed to fetch Celtics wins" });
  }
}
