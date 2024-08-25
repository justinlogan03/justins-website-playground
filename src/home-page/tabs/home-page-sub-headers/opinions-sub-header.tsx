import React, { ReactNode } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import "/src/style.css";

type Props = {
  children: ReactNode;
};
export const OpinionsSubHeader = ({ children }: Props) => {
  return (
    <div>
      <h2 className="flex w-1/3 p-2 text-lg font-bold teal-text ">
        <p className="mr-2 icon-color">
          <ArticleIcon />
        </p>
        <p> My Opinions</p>
      </h2>
      {children}
    </div>
  );
};
