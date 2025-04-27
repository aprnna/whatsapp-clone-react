import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Bubble from "../components/bubble";
import { IoSend, IoVideocam } from "react-icons/io5";
import { FaMagnifyingGlass, FaMicrophone, FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getTimestampNow } from "../utils/timeStamp";
export default function RoomChat({ data, setData }) {
  const [message, setMessage] = useState("");
  const [isSender, setIsSender] = useState("");

  const { id } = useParams();
  const userChat = data.find((item) => item.id === parseInt(id));

  function addChat() {
    if (message.length === 0) return;
    const newChat = {
      id: userChat.chats.length + 1,
      message: message,
      time: getTimestampNow(),
      isSender: isSender,
    };
    userChat.chats.push(newChat);
    setData([...data]);
    setMessage("");
    setIsSender("");
  }

  return (
    <div
      className="flex flex-col h-screen bg-repeat bg-[length:400px] bg-black/80 bg-blend-multiply"
      style={{ backgroundImage: "url(/pattern.png)" }}
    >
      <header className="flex justify-between items-center p-4 bg-background-panel text-white px-8">
        <div className="flex gap-4 items-center">
          <img
            src={userChat?.picture}
            alt="photo-profile"
            className="rounded-full size-10"
          />
          <h1>{userChat?.name}</h1>
        </div>
        <div className="flex gap-7 items-center">
          <IoVideocam size={20} />
          <FaMagnifyingGlass size={15} />
          <BsThreeDotsVertical size={20} />
        </div>
      </header>
      <div className="flex px-20 flex-grow flex-col p-2 gap-2 overflow-y-scroll scrollbar-thin">
        {userChat?.chats.map((chat) => (
          <div
            className={`flex ${
              chat.isSender ? "justify-end" : "justify-start"
            }`}
            key={chat.id}
          >
            <Bubble
              message={chat.message}
              time={chat.time}
              isSender={chat.isSender}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center p-4 gap-4 bg-background-panel text-text-primary px-8">
        <FaPlus size={20} />
        <input
          name="message"
          type="text"
          placeholder="Type a message..."
          className="border-2 border-none p-2 w-full rounded-lg bg-[#2A3942]"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <div className="flex items-center flex-col">
          <select
            className="border-2 border-none w-20 text-xs rounded-lg bg-[#2A3942] text-white"
            onChange={(e) => setIsSender(e.target.value === "true")}
          >
            <option value="">Select Sender</option>
            <option value="true">By Me</option>
            <option value="false">By {userChat?.name}</option>
          </select>
          <button onClick={addChat} className="p-2">
            {message.length !== 0 ? (
              <IoSend size={18} />
            ) : (
              <FaMicrophone size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
