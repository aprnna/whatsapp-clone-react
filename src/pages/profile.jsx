import React, { useEffect } from "react";
import EmptyChat from "../components/emptyChat";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function Profile({ data, setData }) {
  const [newName, setNewName] = useState();
  const [newAbout, setNewAbout] = useState();
  const [editName, setEditName] = useState(false);
  const [editAbout, setEditAbout] = useState(false);

  function submitEditName() {
    setData({ ...data, name: newName });
    setEditName(false);
  }
  function submitEditAbout() {
    setData({ ...data, about: newAbout });
    setEditAbout(false);
  }
  useEffect(() => {
    setNewName(data?.name);
    setNewAbout(data?.about);
  }, [data]);

  return (
    <div className="flex min-h-screen  text-white  border-background-base border-x-2">
      <div className="w-1/4">
        <div className="p-4 flex justify-between items-center">
          <h1 className="font-bold">Profile</h1>
        </div>
        <div className="p-4 flex flex-col items-center gap-4">
          <img
            src={data?.picture}
            alt="profile"
            className="rounded-full size-40"
          />
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-brand-accent">Nama Anda</h1>
            <div
              className={`flex justify-between items-center border-b-2 ${
                editName ? "border-brand-accent" : "border-background-base"
              }  w-full p-2`}
            >
              {editName ? (
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="bg-transparent text-white w-full"
                  />
                  <button onClick={() => submitEditName()}>
                    <FaCheck />
                  </button>
                </>
              ) : (
                <>
                  <h1>{newName}</h1>
                  <button onClick={() => setEditName(!editName)}>
                    <MdEdit />
                  </button>
                </>
              )}
            </div>
            <p className="text-text-secondary text-xs">
              Ini bukan nama pengguna atau PIN anda. Nama ini akan ditampilkan
              ke kontak WhatsApp Anda.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-brand-accent">Tentang</h1>
            <div
              className={`flex justify-between items-center border-b-2 ${
                editAbout ? "border-brand-accent" : "border-background-base"
              }  w-full p-2`}
            >
              {editAbout ? (
                <>
                  <input
                    type="text"
                    value={newAbout}
                    onChange={(e) => setNewAbout(e.target.value)}
                    className="bg-transparent text-white w-full"
                  />
                  <button onClick={() => submitEditAbout()}>
                    <FaCheck />
                  </button>
                </>
              ) : (
                <>
                  <p>{data?.about}</p>
                  <button onClick={() => setEditAbout(!editAbout)}>
                    <MdEdit />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <EmptyChat />
      </div>
    </div>
  );
}
