import React from "react";
type Props = {
  image: string | undefined;
  verticalPosition?: number;
};

export const Slide = ({ image, verticalPosition = 0 }: Props) => {
  return (
    <div className="flex">
      <img
        src={image}
        style={{
          height: "24rem",
          width: "100rem",
          objectFit: "cover",
          objectPosition: `0 ${verticalPosition}%`,
          borderRadius: "12px",
        }}
      />
    </div>
  );
};
