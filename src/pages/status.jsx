import React, { useState } from "react";
import EmptyChat from "../components/emptyChat";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import StatusListItem from "../components/status/statusListItem";
import StatusViewer from "../components/status/statusViewer";

export default function Status({ data }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  return (
    <div className="flex min-h-screen  text-white  border-background-base border-x-2">
      <div className="w-1/4">
        <div className="p-4 flex justify-between items-center">
          <h1 className="font-bold">Status</h1>
          <div className="flex gap-7 items-center">
            <FaPlus size={20} />
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
        <div className="p-4 flex gap-2 items-center cursor-pointer">
          <div className="relative">
            <img
              src="/profile.jpeg"
              alt="whatsapp"
              className="size-10 rounded-full"
            />
            <IoIosAddCircle className="text-brand-accent absolute right-0 bottom-[1px]" />
          </div>
          <div>
            <h1>Status Saya</h1>
            <p className="text-text-secondary text-xs">
              Klik untuk Menambahkan Pembaruan Status
            </p>
          </div>
        </div>
        <div>
          <div className="p-4">
            <h1 className="text-brand-accent">Terbaru</h1>
          </div>
          {data?.map((data) => (
            <StatusListItem
              key={data.id}
              data={data}
              onClick={() => {
                setSelectedUser(data);
                setIsViewerOpen(true);
              }}
            />
          ))}
        </div>
        <div>
          {isViewerOpen && (
            <StatusViewer
              user={selectedUser}
              onClose={() => setIsViewerOpen(false)}
            />
          )}
        </div>
      </div>
      <div className="flex-grow">
        <EmptyChat />
      </div>
    </div>
  );
}
