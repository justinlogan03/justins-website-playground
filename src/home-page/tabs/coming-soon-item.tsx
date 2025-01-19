import React from "react";

type Props = {
  title: string;
  description: string;
};

export const ComingSoonItem = ({ title, description }: Props) => {
  return (
    <div className="w-full p-4 card-background rounded-xl ">
      <h3 className="font-bold teal-text">{`Coming Soon! - ${title}`}</h3>
      <p className="text-white ">{description}</p>
    </div>
  );
};
