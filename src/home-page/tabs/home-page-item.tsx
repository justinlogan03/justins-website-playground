import React from "react";

type Props = {
  title: string;
  image?: string;
  link?: string;
  description: string;
};

export const HomePageItem = ({ title, description }: Props) => {
  return (
    <div className="flex mb-4">
      <image className="w-48 mr-4 bg-gray-400 h-36 rounded-xl min-w-48"></image>
      <div className="w-full p-4 selectable-background rounded-xl">
        <h3 className="font-bold teal-text">{title}</h3>
        <p className="text-white ">{description}</p>
      </div>
    </div>
  );
};
