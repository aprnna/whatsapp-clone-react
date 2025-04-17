import React from "react";
import { NavLink } from "react-router-dom";
import ItemChat from "./itemChat";

export default function ChatList({ data, search }) {
  const filteredChats = data?.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {search !== ""
        ? filteredChats?.map((chat) => (
            <NavLink key={chat.id} to={`/${chat.id}`} className="flex flex-col">
              <ItemChat
                img={chat.picture}
                name={chat.name}
                lastChat={chat.chats[chat.chats.length - 1]}
              />
            </NavLink>
          ))
        : data?.map((chat) => (
            <NavLink key={chat.id} to={`/${chat.id}`} className="flex flex-col">
              <ItemChat
                img={chat.picture}
                name={chat.name}
                lastChat={chat.chats[chat.chats.length - 1]}
              />
            </NavLink>
          ))}
    </div>
  );
}
