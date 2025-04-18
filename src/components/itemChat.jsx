import React from "react";
import { showFormattedTime } from "../utils/timeStamp";

export default function ItemChat({ img, name, lastChat }) {
  return (
    <div className="flex gap-2 items-center p-2 px-4 hover:bg-gray-800 cursor-pointer w-full">
      <img src={img} alt="photo-profile" className="rounded-full size-10" />
      <div className="flex justify-between border-b-2 border-background-base flex-grow p-2 overflow-hidden">
        <div className="flex flex-col overflow-hidden">
          <h2 className="font-bold">{name}</h2>
          <p className="text-text-secondary truncate">{lastChat.message}</p>
        </div>
        <span className="text-xs ml-2 text-text-tertiary">
          {showFormattedTime(lastChat.time)}
        </span>
      </div>
    </div>
  );
}
