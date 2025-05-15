import React, { useEffect, useState } from "react";
import { getNbaTeamScore } from "./client-apis/get-nba-team-score";
import { NBA_TEAM_INFO } from "./constants/nba-constants";
import { FullTeamScoresResponse } from "./hurst-family-pool-types";
import { TEAM_SELECTIONS } from "./constants/team-selection-constants";
import classNames from "classnames";
import {
  calculateMLBScore,
  calculateNBAScore,
} from "./calculate-score-helpers";
import { HurstFamilyPoolWrapper } from "./hurst-family-pool-wrapper";
import { HurstFamilyPoolContainerSkeleton } from "./hurst-family-pool-container-skeleton";
import { FullTeamCell } from "./components/full-team-cell";
import { getMlbTeamScore } from "./client-apis/get-mlb-team-score";
import { MLB_TEAM_INFO } from "./constants/mlb-constants";

export const HurstFamilyPoolContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [teamScores, setTeamScores] = useState<
    FullTeamScoresResponse | undefined
  >(undefined);

  const getAllTeamScores = async (): Promise<FullTeamScoresResponse> => {
    const nbaTeamIds = TEAM_SELECTIONS?.map((selection) => {
      return selection.selections.nbaId;
    });
    const mlbTeamIds = TEAM_SELECTIONS?.map((selection) => {
      return selection.selections.mlbId;
    });
    const nbaResponse = await getNbaTeamScore({
      nbaTeamIds,
      season: 2024,
    });
    const mlbResponse = await getMlbTeamScore({ mlbTeamIds, season: 2024 });

    return { nba: nbaResponse, mlb: mlbResponse };
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
            <HurstFamilyPoolContainerSkeleton />
          ) : (
            <HurstFamilyPoolWrapper>
              <>
                {TEAM_SELECTIONS?.map((item, index) => {
                  const mlbTeamInfo = MLB_TEAM_INFO?.find((team) => {
                    return team.id === item.selections.mlbId;
                  });
                  const mlbTeamScores = teamScores?.mlb?.find((mlbTeam) => {
                    return mlbTeam.mlbTeamId === item.selections.mlbId;
                  });
                  const nbaTeamInfo = NBA_TEAM_INFO?.find((team) => {
                    return team.id === item.selections.nbaId;
                  });
                  const nbaTeamScores = teamScores?.nba?.find((nbaTeam) => {
                    return nbaTeam.nbaTeamId === item.selections.nbaId;
                  });

                  const isLastItem = !TEAM_SELECTIONS?.[index + 1];

                  const key = `${item?.teamName}-${index}`;
                  return (
                    <tr
                      className={classNames(
                        "rounded-md",
                        { "bg-gray-100": index % 2 === 0 },
                        { "bg-gray-200": index % 2 !== 0 },
                        { "rounded-b-md ": isLastItem }
                      )}
                      key={key}
                    >
                      <td
                        className={classNames(
                          "text-center font-bold border-r border-gray-300",
                          {
                            "rounded-bl-md": isLastItem,
                          }
                        )}
                      >
                        {item?.teamName}
                      </td>
                      <FullTeamCell
                        score={calculateNBAScore({ wins: nbaTeamScores?.wins })}
                        wins={nbaTeamScores?.wins}
                        tooltipKey={`${key}-nba`}
                        logo={nbaTeamInfo?.logo}
                      />
                      <FullTeamCell
                        score={undefined}
                        wins={undefined}
                        tooltipKey={`${key}-nfl`}
                        logo={undefined}
                      />
                      <FullTeamCell
                        score={calculateMLBScore({ wins: mlbTeamScores?.wins })}
                        wins={mlbTeamScores?.wins}
                        tooltipKey={`${key}-mlb`}
                        logo={mlbTeamInfo?.logo}
                      />
                      <FullTeamCell
                        score={undefined}
                        wins={undefined}
                        tooltipKey={`${key}-nhl`}
                        logo={undefined}
                      />
                      <FullTeamCell
                        score={undefined}
                        wins={undefined}
                        tooltipKey={`${key}-cfb`}
                        logo={undefined}
                      />
                      <FullTeamCell
                        score={undefined}
                        wins={undefined}
                        tooltipKey={`${key}-cbb`}
                        logo={undefined}
                      />
                      <td
                        className={classNames("text-center font-bold", {
                          "rounded-br-md": isLastItem,
                        })}
                      >
                        {(calculateNBAScore({ wins: nbaTeamScores?.wins }) ??
                          0) +
                          (calculateMLBScore({ wins: mlbTeamScores?.wins }) ??
                            0)}
                      </td>
                    </tr>
                  );
                })}
              </>
            </HurstFamilyPoolWrapper>
          )}
        </div>
      </div>
    </div>
  );
};
