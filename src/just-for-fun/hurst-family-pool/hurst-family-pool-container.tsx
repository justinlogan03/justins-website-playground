import React, { useEffect, useState } from "react";
import { getNbaTeamScore } from "./client-apis/get-nba-team-score";
import { NBA_TEAM_INFO } from "./constants/nba-constants";
import { NBATeamScoresResponse } from "./hurst-family-pool-types";
import { TEAM_SELECTIONS } from "./constants/team-selection-constants";
import classNames from "classnames";
import { calculateNBAScore } from "./calculate-score-helpers";

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
            <table className=" w-full rounded-md">
              <tbody className="rounded-md">
                <tr className=" teal-background text-white rounded-t-md">
                  <th className="rounded-tl-md">Team Name</th>
                  <th className="">{"NBA Score"}</th>
                  <th className="rounded-tr-md">Total Points</th>
                </tr>
                {teamScores?.map((item, index) => {
                  const teamInfo = TEAM_SELECTIONS.find((team) => {
                    return team.selections.nbaId === item.nbaTeamId;
                  });
                  const nbaTeamInfo = NBA_TEAM_INFO.find((team) => {
                    return team.id === teamInfo?.selections.nbaId;
                  });

                  const isLastItem = !teamScores?.[index + 1];
                  return (
                    <tr
                      className={classNames(
                        "rounded-md",
                        { "bg-gray-100": index % 2 === 0 },
                        { "bg-gray-200": index % 2 !== 0 },
                        { "rounded-b-md ": isLastItem }
                      )}
                      key={`${teamInfo?.teamName}-${index}`}
                    >
                      <td
                        className={classNames("text-center font-bold", {
                          "rounded-bl-md": isLastItem,
                        })}
                      >
                        {teamInfo?.teamName}
                      </td>
                      <td className="text-center grid grid-rows-1 grid-cols-2">
                        <img
                          className="h-12 w-12 mx-auto my-auto "
                          src={nbaTeamInfo?.logo}
                        />
                        <div className="text-center my-auto">
                          {calculateNBAScore(item.wins)}
                        </div>
                      </td>
                      <td
                        className={classNames("text-center font-bold", {
                          "rounded-br-md": isLastItem,
                        })}
                      >
                        {calculateNBAScore(item.wins)}
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
