import React from "react";

type Props = {
  children: JSX.Element;
};

export const BodyTemplate = ({ children }: Props) => {
  return <div className="mx-8 my-6">{children}</div>;
};
