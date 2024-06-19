import React from "react";
import { BodyTemplate } from "./body-template";
import ArticleIcon from "@mui/icons-material/Article";
import "/src/style.css";

export const CollegeTabBody = () => {
  return (
    <BodyTemplate headerLabel="College Sports">
      <h2 className="flex w-1/3 p-2 text-lg font-bold border-b-2 border-black teal-text content-border">
        <p className="mr-2">
          <ArticleIcon />
        </p>
        <p> My Opinions</p>
      </h2>
    </BodyTemplate>
  );
};
