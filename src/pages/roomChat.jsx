import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Bubble from "../components/bubble";
import { IoVideocam } from "react-icons/io5";
import { FaMagnifyingGlass, FaMicrophone, FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getTimestampNow } from "../utils/timeStamp";
export default function RoomChat({ data, setData }) {
  const [message, setMessage] = useState();
  const [isSender, setIsSender] = useState(true);

  const { id } = useParams();
  const userChat = data.find((item) => item.id === parseInt(id));

  function addChat() {
    const newChat = {
      id: userChat.chats.length + 1,
      message: message,
      time: getTimestampNow(),
      isSender: isSender,
    };
    userChat.chats.push(newChat);
    setData([...data]);
    setMessage("");
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
      <div className="flex px-20 flex-grow flex-col p-2 gap-2 bg-[#0B141A]">
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
        <form action={addChat} className="w-full ">
          <input
            name="message"
            type="text"
            placeholder="Type a message..."
            className="border-2 border-none p-2 w-full rounded-lg bg-[#2A3942]"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </form>
        <FaMicrophone size={20} />
        <div>
          <button
            onClick={() => setIsSender(!isSender)}
            className={` p-2 text-xs rounded-lg ${
              isSender ? "bg-brand-primary" : ""
            }`}
          >
            Sender
          </button>
        </div>
      </div>
    </div>
  );
}
