import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    // console.log("test");
    // const response = await fetch(
    //   "https://api.balldontlie.io/v1/games?team_ids[]=2&seasons[]=2024&postseason=false",
    //   {
    //     headers: {
    //       Authorization: "Bearer " + process.env.BALL_DONT_LIE_API_KEY,
    //     },
    //   }
    // );

    // const data = await response.json();
    // console.log(data);

    res.status(200).json({ wins: 55 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
