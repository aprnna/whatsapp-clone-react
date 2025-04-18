import React from "react";
import { showFormattedTime } from "../utils/timeStamp";

export default function Bubble({ message, time, isSender }) {
  return (
    <p
      className={`block p-2 rounded-lg w-fit text-wrap max-w-md text-primary ${
        isSender
          ? "bg-brand-primary rounded-tr-none"
          : "bg-background-panel rounded-tl-none"
      }`}
    >
      {message}
      <span className="text-xs ml-2 text-text-tertiary">
        {showFormattedTime(time)}
      </span>
    </p>
  );
}
