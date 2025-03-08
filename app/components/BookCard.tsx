"use client";

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

type BookCardProps = {
  title: string;
  duration: string;
  price: number;
  available: boolean;
};

export default function BookCard({
  title,
  duration,
  price,
  available,
}: BookCardProps) {
  const [book, setBook] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const bookNow = () => {
    setOverlay(!overlay);
    setBook(!false);
  };
  const close = () => {
    setBook(false);
    setOverlay(false);
  };
  return (
    <>
      <div className="flex flex-col items-center gap-4 text-center mt-8 bg-zinc-950 border-t-2 border-red-950 p-8 w-96 shadow-md">
        <h1 className="font-bold text-3xl text-zinc-400">Base {title}</h1>
        <p className="font-light text-slate-600" style={{ fontSize: "14px" }}>
          Mon, Tue, Web, Thu, Fri, Sat
        </p>
        <p className="text-zinc-600 font-light">{duration}</p>
        <p className="text-zinc-400 font-light">${price}</p>

        {available ? (
          <button
            className="p-3 bg-zinc-900 text-sm w-40 mt-6 text-zinc-400 shadow-md"
            onClick={bookNow}
          >
            Book Now
          </button>
        ) : (
          <button className="p-3 bg-zinc-900 text-sm w-40 mt-6 text-zinc-700 shadow-md cursor-not-allowed">
            Book Now
          </button>
        )}
      </div>

      {book ? (
        <>
          <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-100 transition-colors"></div>
          <div className="bg-zinc-900 animate-zoom-in book h-fit w-fit gap-6 rounded-md p-3 flex justify-between items-center z-200">
            <p>
              Booked, <span className="text-red-700">{title}</span>!
            </p>
            <MdCancel
              className="cursor-pointer"
              style={{ fontSize: "22px" }}
              onClick={close}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
