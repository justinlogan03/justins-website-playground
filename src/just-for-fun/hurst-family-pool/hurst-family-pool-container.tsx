import React, { useEffect, useState } from "react";
import { getNbaTeamScore } from "./client-apis/get-nba-team-score";
import { NBA_TEAM_INFO } from "./constants/nba-constants";
import { NBATeamScoresResponse } from "./hurst-family-pool-types";
import { TEAM_SELECTIONS } from "./constants/team-selection-constants";

export const HurstFamilyPoolContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [teamScores, setTeamScores] = useState<NBATeamScoresResponse[]>([]);

  const getAllTeamScores = async (): Promise<NBATeamScoresResponse[]> => {
    const nbaTeamIds = TEAM_SELECTIONS?.map((selection) => {
      return selection.selections.nbaId;
    });
    const updatedTeamResponse = await getNbaTeamScore({
      nbaTeamIds,
      season: 2024,
    });
    return updatedTeamResponse;
  };

  useEffect(() => {
    setIsLoading(true);
    getAllTeamScores()
      .then((res) => {
        setTeamScores(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="pt-4">
      <div className="content-border content-backdrop w-full border-2 rounded-xl tab-height">
        <div className="mx-8 my-6 ">
          <h1 className="w-1/2 p-2 mb-4 text-3xl font-bold border-b-2 content-border teal-text">
            Hurst Family Pool
          </h1>
          {isLoading ? (
            <div className="teal-text">{"Loading"}</div>
          ) : (
            <table className="teal-text w-full">
              <tbody>
                <tr>
                  <th>Team Name</th>
                  <th>NBA Team</th>
                  <th>NBA Score</th>
                </tr>
                {teamScores?.map((item, index) => {
                  const teamInfo = TEAM_SELECTIONS.find((team) => {
                    return team.selections.nbaId === item.nbaTeamId;
                  });
                  const nbaTeamInfo = NBA_TEAM_INFO.find((team) => {
                    return team.id === teamInfo?.selections.nbaId;
                  });
                  return (
                    <tr key={`${teamInfo?.teamName}-${index}`}>
                      <td className="text-center">{teamInfo?.teamName}</td>
                      <td className="text-center">
                        <img
                          className="h-12 w-12 mx-auto"
                          src={nbaTeamInfo?.logo}
                          style={{}}
                        />
                      </td>
                      <td className="text-center">
                        {item.wins.regularSeasonWins}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
