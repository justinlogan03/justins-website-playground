import React from "react";
import { BodyTemplate } from "./body-template";
import { BracketsHeader } from "../common-components/brackets-header";
import { OpinionsHeader } from "../common-components/opinions-header";

export const NBATabBody = () => {
  return (
    <BodyTemplate headerLabel="NBA">
      <BracketsHeader />
      <OpinionsHeader />
    </BodyTemplate>
  );
};
