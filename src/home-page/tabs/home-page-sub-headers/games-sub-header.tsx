import React, { ReactNode } from "react";
import GamesIcon from "@mui/icons-material/Games";
import "/src/style.css";

type Props = {
  children: ReactNode;
};
export const GamesSubHeader = ({ children }: Props) => {
  return (
    <div>
      <h2 className="flex w-1/3 p-2 text-lg font-bold teal-text">
        <p className="mr-2 icon-color">
          <GamesIcon />
        </p>
        <p>Games</p>
      </h2>
      {children}
    </div>
  );
};
