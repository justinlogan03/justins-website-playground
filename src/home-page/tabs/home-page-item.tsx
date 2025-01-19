import React from "react";
import { ComingSoonItem } from "./coming-soon-item";

type Props = {
  title: string;
  image?: string;
  imageVerticalPosition?: number;
  link?: string;
  description: string;
  isComingSoon?: boolean;
};

export const HomePageItem = ({
  title,
  image,
  imageVerticalPosition = 0,
  description,
  link = "",
  isComingSoon = false,
}: Props) => {
  return (
    <div className="flex mb-4">
      {image ? (
        <img
          src={image}
          className="w-48 mr-4 bg-gray-400 h-36 rounded-xl min-w-48 object-cover"
          style={{
            objectPosition: `0 ${imageVerticalPosition}%`,
          }}
        ></img>
      ) : (
        <div className="w-48 mr-4 bg-gray-400 h-36 rounded-xl min-w-48"></div>
      )}
      {isComingSoon ? (
        <ComingSoonItem title={title} description={description} />
      ) : (
        <div
          className="w-full p-4 selectable-background rounded-xl cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = link;
          }}
        >
          <h3 className="font-bold teal-text">{title}</h3>
          <p className="text-white ">{description}</p>
        </div>
      )}
    </div>
  );
};
