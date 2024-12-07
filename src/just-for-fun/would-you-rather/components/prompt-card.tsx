import React, { Dispatch, SetStateAction } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import classNames from "classnames";

export const PromptCard = ({
  label,
  isLocked,
  setIsLocked,
}: {
  label: string | undefined;
  isLocked: boolean;
  setIsLocked: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={classNames(
        "card-background px-14 pt-14 pb-4 rounded-xl font-bold text-3xl flex-wrap w-2/3 text-center flex",
        { "locked-border": isLocked }
      )}
    >
      {label ?? ""}
      <button
        className="selectable-background h-16 w-16 rounded-full icon-color mx-auto mt-4"
        onClick={() => {
          setIsLocked(!isLocked);
        }}
      >
        {isLocked ? (
          <LockIcon fontSize="large" />
        ) : (
          <LockOpenIcon fontSize="large" />
        )}
      </button>
    </div>
  );
};
