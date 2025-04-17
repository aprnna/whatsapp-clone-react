import React from "react";
import { FaCircleNotch, FaUserGroup } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { RiChatVoiceLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-background-panel flex items-center gap-7 p-4 py-4 flex-col text-white">
      <NavLink to="/">
        <MdChat size={20} />
      </NavLink>
      <NavLink to="/status">
        <FaCircleNotch size={20} />
      </NavLink>
      <NavLink to="/channel">
        <RiChatVoiceLine size={20} />
      </NavLink>
      <NavLink to="/community">
        <FaUserGroup size={20} />
      </NavLink>
      <div className="flex items-center gap-4 mt-auto flex-col">
        <NavLink to="/setting">
          <IoSettingsOutline size={20} />
        </NavLink>
        <NavLink to="/profile">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="rounded-full size-8"
          />
        </NavLink>
      </div>
    </div>
  );
}
