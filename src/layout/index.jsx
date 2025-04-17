import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function Layout() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-grow bg-[#111B21] min-h-screen">
        <Outlet />
      </div>
    </main>
  );
}
