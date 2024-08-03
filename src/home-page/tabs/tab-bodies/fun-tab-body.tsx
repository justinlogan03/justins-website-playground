import React from "react";
import { BodyTemplate } from "./body-template";
import { GamesHeader } from "../common-components/games-header";

export const FunTabBody = () => {
  return (
    <BodyTemplate headerLabel="Just For Fun">
      <GamesHeader />
    </BodyTemplate>
  );
};
