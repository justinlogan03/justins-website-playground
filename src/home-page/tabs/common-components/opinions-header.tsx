import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import "/src/style.css";

//TODO - remove these. Just placeholders for the real thing
export const OpinionsHeader = () => {
  return (
    <div>
      <h2 className="flex w-1/3 p-2 text-lg font-bold teal-text ">
        <p className="mr-2 icon-color">
          <ArticleIcon />
        </p>
        <p> My Opinions</p>
      </h2>
      <div className="flex mb-4">
        <image className="w-48 mr-4 bg-gray-400 h-36 rounded-xl min-w-48"></image>
        <div className="p-4 selectable-background rounded-xl">
          <h3 className="font-bold teal-text">Mock Opinion 1</h3>
          <p className="text-white ">
            Here is the preview text for Mock Opinion 1. I want it to multiple
            lines so I will continue to type until it does so. This is mock text
            and the real text will be stored somewhere else. For now this is
            what I will do until I figure out the db solution. I'm going to type
            one more line for good measure but this is is for now.
          </p>
        </div>
      </div>
      <div className="flex mb-4">
        <image className="w-48 mr-4 bg-gray-400 h-36 rounded-xl min-w-48"></image>
        <div className="p-4 selectable-background rounded-xl">
          <h3 className="font-bold teal-text">Mock Opinion 2</h3>
          <p className="text-white ">
            Here is the preview text for Mock Opinion 2. I want it to multiple
            lines so I will continue to type until it does so. This is mock text
            and the real text will be stored somewhere else. For now this is
            what I will do until I figure out the db solution. I'm going to type
            one more line for good measure but this is is for now. Just kidding,
            I want this one to be longer than the first so I am typing a few
            more lines. The quick brown fox jumped over the lazy dog? I don't
            remember if that is the correct sentence or not but we're going with
            it. Now this is the last line, thanks for listening.
          </p>
        </div>
      </div>
    </div>
  );
};
