import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export const RefreshButton = ({ onRefresh }: { onRefresh: () => void }) => {
  return (
    <button
      className="selectable-background w-24 rounded-full icon-color h-24 text-6xl pb-2"
      onClick={onRefresh}
    >
      <AutorenewIcon fontSize="inherit" />
    </button>
  );
};
