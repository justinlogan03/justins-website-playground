import React, { ReactNode } from "react";

type Props = {
  headerLabel: string;
  children: ReactNode;
};

export const BodyTemplate = ({ children, headerLabel }: Props) => {
  return (
    <div className="w-full mx-8 my-6">
      <h1 className="w-1/2 p-2 mb-4 text-3xl font-bold border-b-2 border-black">
        {headerLabel}
      </h1>
      {children}
    </div>
  );
};
