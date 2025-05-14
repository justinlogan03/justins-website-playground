import React, { ReactNode } from "react";

export const HurstFamilyPoolWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <table className=" w-full rounded-md">
      <tbody className="rounded-md">
        <tr className=" teal-background text-white rounded-t-md">
          <th className="rounded-tl-md" style={{ width: "12.5%" }}>
            Team Name
          </th>
          <th style={{ width: "12.5%" }}>{"NBA"}</th>
          <th style={{ width: "12.5%" }}>{"NFL"}</th>
          <th style={{ width: "12.5%" }}>{"MLB"}</th>
          <th style={{ width: "12.5%" }}>{"NHL"}</th>
          <th style={{ width: "12.5%" }}>{"CFB"}</th>
          <th style={{ width: "12.5%" }}>{"CBB"}</th>
          <th style={{ width: "12.5%" }} className="rounded-tr-md">
            Total Points
          </th>
        </tr>
        {children}
      </tbody>
    </table>
  );
};
