import React from "react";
type Props = {
  image: string | undefined;
  verticalPosition?: number;
};

export const Slide = ({ image, verticalPosition = 0 }: Props) => {
  return (
    <div className="flex">
      <img
        className=" rounded-xl h-96"
        src={image}
        style={{
          width: "100rem",
          objectFit: "cover",
          objectPosition: `0 ${verticalPosition}%`,
        }}
      />
    </div>
  );
};
