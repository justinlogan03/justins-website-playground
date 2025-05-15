// api/getNBATeamScores.ts
export default async function handler(req: any, res: any) {
  const { nbaTeamIds } = req.body as { nbaTeamIds: number[] };
  const nbaTeamScoresResponse = [];

  for (const nbaTeamId of nbaTeamIds) {
    let regularSeasonWins = 0;
    let postSeasonWins = 0;

    // Fetch schedule for postseason games
    const scheduleResponse = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${nbaTeamId}/schedule`
    );
    const scheduleData = await scheduleResponse.json();

    // get regular season wins
    const regRecord = scheduleData?.team?.recordSummary as string;
    regularSeasonWins = +regRecord?.split("-")?.[0];

    const events = scheduleData.events || [];

    // Count postseason wins from completed games
    for (const event of events) {
      const competitions = event.competitions;
      if (!competitions || competitions.length === 0) continue;

      const competition = competitions[0];

      const competitors = competition.competitors;
      const team = competitors.find(
        (c: any) => c.team?.id === nbaTeamId.toString()
      );

      if (team?.winner) postSeasonWins += 1;
    }

    nbaTeamScoresResponse.push({
      nbaTeamId,
      wins: {
        regularSeasonWins,
        postSeasonWins,
      },
    });
  }

  res.status(200).json({ nbaTeamScoresResponse });
}
