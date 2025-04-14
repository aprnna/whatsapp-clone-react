import React, { useEffect, useState } from "react";
import getData from "../data";
import { NavLink, Outlet } from "react-router-dom";

export default function Chats() {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    setChats(getData());
  }, []);
  return (
    <div className="flex">
      <div>
        <h1>Chats</h1>
        {chats.map((chat) => (
          <NavLink
            key={chat.id}
            to={`/chat/${chat.id}`}
            className="flex flex-col border-b-2 p-2"
          >
            <h2>{chat.name}</h2>
            <p>{chat.chats[chat.chats.length - 1].message}</p>
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
