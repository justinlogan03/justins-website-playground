import React from "react";
import { BodyTemplate } from "./body-template";
import ArticleIcon from "@mui/icons-material/Article";
import "/src/style.css";

export const NFLTabBody = () => {
  return (
    <BodyTemplate headerLabel="NFL">
      <h2 className="flex w-1/3 p-2 text-lg font-bold border-b-2 teal-text content-border ">
        <p className="mr-2">
          <ArticleIcon />
        </p>
        <p> My Opinions</p>
      </h2>
    </BodyTemplate>
  );
};
