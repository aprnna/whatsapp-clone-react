import React, { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import EmptyChat from "../components/emptyChat";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiChatNewFill } from "react-icons/ri";
import ChatList from "../components/chatList";

export default function Chats({ data }) {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  return (
    <div className="flex min-h-screen  text-white  border-background-base border-x-2">
      <div className="w-1/4">
        <div className="p-4 flex justify-between items-center">
          <h1 className="font-bold">Chats</h1>
          <div className="flex gap-7 items-center">
            <NavLink to="/chats/new">
              <RiChatNewFill size={20} />
            </NavLink>
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
        <div className="p-4">
          <input
            placeholder="Cari"
            className="p-2 px-4 w-full bg-background-panel rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <button className="bg-brand-primary p-1 px-3 rounded-full text-xs text-brand-accent">
              Semua
            </button>
            <button className=" p-1 px-3 rounded-full text-xs bg-background-panel text-text-secondary">
              Belum dibaca
            </button>
            <button className=" p-1 px-3 rounded-full text-xs bg-background-panel text-text-secondary">
              Favorit
            </button>
            <button className=" p-1 px-3 rounded-full text-xs bg-background-panel text-text-secondary">
              Group
            </button>
          </div>
        </div>
        <ChatList data={data} search={search} />
      </div>
      <div className="flex-grow">{id != null ? <Outlet /> : <EmptyChat />}</div>
    </div>
  );
}
