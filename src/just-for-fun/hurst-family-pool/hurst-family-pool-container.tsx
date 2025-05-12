import React, { useEffect, useState } from "react";
import { getCelticsWins } from "./client-apis/get-celtics-wins";

export const HurstFamilyPoolContainer = () => {
  const [celticsWins, setCelticsWins] = useState<number>(0);

  useEffect(() => {
    getCelticsWins()
      .then((res) => {
        setCelticsWins(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pt-4">
      <div className="content-border content-backdrop w-full border-2 rounded-xl tab-height">
        <div className="mx-8 my-6 ">
          <h1 className="w-1/2 p-2 mb-4 text-3xl font-bold border-b-2 content-border teal-text">
            Hurst Family Pool
          </h1>
          <div className="teal-text">{celticsWins}</div>
        </div>
      </div>
    </div>
  );
};
