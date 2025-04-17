import React from "react";

export default function EmptyChat() {
  return (
    <div className="bg-background-surface text-gray-300 flex flex-col items-center justify-center h-screen gap-5">
      <img src="/wa.png" alt="whatsapp" className="w-1/3" />
      <h1 className="text-3xl">Unduh WhatsApp untuk Windows</h1>
      <p className="text-center ">
        Buat panggilan, bagikan layar, dan dapatkan pengalaman lebih cepat
        <br />
        dengan mengunduh WhatsApp untuk Windows
      </p>
      <button className="bg-brand-accent p-2 px-4 rounded-xl text-background-surface">
        Unduh
      </button>
    </div>
  );
}
