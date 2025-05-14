// const API_KEY = "3dbe8951ab004617a89a6cfeb05f4e7a";
// const BASE_URL = "https://api.sportsdata.io/v4/mlb/scores/json";

//TODO - connect to actual routes*****
export default async function handler(req: any, res: any) {
  const { mlbTeamIds, season } = req?.body as {
    mlbTeamIds: number[];
    season: number;
  };

  try {
    // // Fetch all team season stats
    // const [regularRes, postRes] = await Promise.all([
    //   fetch(`${BASE_URL}/TeamSeasonStats/${season}?key=${API_KEY}`),
    //   fetch(`${BASE_URL}/TeamSeasonStats/${season}POST?key=${API_KEY}`),
    // ]);

    // const regularStats = await regularRes.json();
    // const postStats = await postRes.json();
    // console.log(regularStats);

    // Build the result list
    const mlbTeamScoresResponse = mlbTeamIds.map((teamId) => {
      //   const regular = regularStats?.find((t: any) => t.Team === teamId);
      //   const post = postStats?.find((t: any) => t.Team === teamId);

      return {
        mlbTeamId: teamId,
        wins: {
          regularSeasonWins: 104,
          postSeasonWins: 13,
        },
      };
    });

    res.status(200).json({ mlbTeamScoresResponse });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Unknown error" });
  }
}
