import React from "react";
import { WouldYouRatherContents } from "./would-you-rather-contents";
export const WouldYouRatherContainer = () => {
  return (
    <div className="pt-4">
      <div className="content-border content-backdrop w-full border-2 rounded-xl tab-height">
        <div className="mx-8 my-6 ">
          <h1 className="w-1/2 p-2 mb-4 text-3xl font-bold border-b-2 content-border teal-text">
            Would You Rather . . .
          </h1>
          <WouldYouRatherContents />
        </div>
      </div>
    </div>
  );
};
