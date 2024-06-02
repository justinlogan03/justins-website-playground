import React from "react";

export const HomePageTabs = () => {
  return (
    <div>
      <div className="flex w-full h-12 ">
        <div
          className="w-32 bg-gray-500 border-black border-x"
          style={{ borderTopLeftRadius: "25%", borderTopRightRadius: "25%" }}
        ></div>
        <div
          className="w-32 bg-gray-500 border-b border-black border-x"
          style={{ borderTopLeftRadius: "25%", borderTopRightRadius: "25%" }}
        ></div>
        <div
          className="w-32 bg-gray-500 border-b border-black border-x"
          style={{ borderTopLeftRadius: "25%", borderTopRightRadius: "25%" }}
        ></div>
      </div>
      <div
        className="flex w-full bg-gray-500 "
        style={{
          borderTopRightRadius: "1%",
          borderBottomRightRadius: "1%",
          borderBottomLeftRadius: "1%",
          minHeight: "48rem",
        }}
      >
        Tabs Placeholder
      </div>
    </div>
  );
};
