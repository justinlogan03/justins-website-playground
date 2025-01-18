import React from "react";
import { DanMarinoContents } from "./dan-marino-contents";

export const DanMarinoContainer = () => {
  return (
    <div className="pt-4">
      <div className="content-border content-backdrop w-full border-2 rounded-xl tab-height">
        <div className="mx-8 my-6 ">
          <h1 className="w-2/3 p-2 mb-4 text-3xl font-bold border-b-2 content-border teal-text">
            Dan Marino - Why 1985 was the best sports season ever
          </h1>
          <DanMarinoContents />
        </div>
      </div>
    </div>
  );
};
