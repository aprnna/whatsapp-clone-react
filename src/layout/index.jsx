import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="flex">
      <div className="bg-red-300 flex flex-col">
        <NavLink to="/">Chats</NavLink>
        <NavLink to="/status">Status</NavLink>
        <NavLink to="/channel">Saluran</NavLink>
        <NavLink to="/community">Komunitas</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/setting">Settings</NavLink>
      </div>
      <div className=""></div>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
