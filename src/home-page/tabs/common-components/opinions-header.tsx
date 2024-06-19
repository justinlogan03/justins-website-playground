import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import "/src/style.css";

export const OpinionsHeader = () => {
  return (
    <h2 className="flex w-1/3 p-2 text-lg font-bold teal-text ">
      <p className="mr-2 icon-color">
        <ArticleIcon />
      </p>
      <p> My Opinions</p>
    </h2>
  );
};
