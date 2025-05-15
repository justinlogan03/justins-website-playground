// api/getMLBTeamScores.ts
export default async function handler(req: any, res: any) {
  const { mlbTeamIds } = req.body as { mlbTeamIds: number[] };

  const mlbTeamScoresResponse = await Promise.all(
    mlbTeamIds.map(async (mlbTeamId) => {
      let regularSeasonWins = 0;
      let postSeasonWins = 0;

      try {
        const scheduleResponse = await fetch(
          `https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/${mlbTeamId}/schedule`
        );
        const scheduleData = await scheduleResponse.json();

        // Parse regular season wins from recordSummary (e.g. "88-74")
        const regRecord = scheduleData?.team?.recordSummary as string;
        regularSeasonWins = +regRecord?.split("-")?.[0] || 0;

        const events = scheduleData.events || [];

        // Count postseason wins from completed games
        for (const event of events) {
          const competitions = event.competitions;
          if (!competitions || competitions.length === 0) continue;

          const competition = competitions[0];
          const seasonType = competition.season?.type; // 4 = postseason
          const status = competition.status?.type?.name;

          if (seasonType !== 4 || status !== "STATUS_FINAL") continue;

          const competitors = competition.competitors;
          const team = competitors.find(
            (c: any) => c.team?.id === mlbTeamId.toString()
          );

          if (team?.winner) postSeasonWins += 1;
        }
      } catch (err) {
        console.error(`Failed to fetch data for team ${mlbTeamId}:`, err);
      }

      return {
        mlbTeamId,
        wins: {
          regularSeasonWins,
          postSeasonWins,
        },
      };
    })
  );

  res.status(200).json({ mlbTeamScoresResponse });
}
