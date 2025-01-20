import React from "react";
type Props = {
  image: string | undefined;
  link?: string;
  verticalPosition?: number;
  isNew?: boolean;
};

export const Slide = ({
  image,
  verticalPosition = 0,
  link = "",
  isNew = false,
}: Props) => {
  return (
    <div className="flex relative overflow-hidden">
      <img
        className="cursor-pointer rounded-xl h-96"
        src={image}
        style={{
          width: "100rem",
          objectFit: "cover",
          objectPosition: `0 ${verticalPosition}%`,
        }}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = link;
        }}
      />
      {isNew && (
        <div className="ribbon font-bold text-xl text-white">
          New - Click for More!
        </div>
      )}
    </div>
  );
};
