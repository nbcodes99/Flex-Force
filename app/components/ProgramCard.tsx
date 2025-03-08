"use client";

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

type ProgramCardProps = {
  title: string;
  programDetails: string;
};

export default function ProgramCard({
  title,
  programDetails,
}: ProgramCardProps) {
  const [details, setDetails] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const toggleDetails = () => {
    setOverlay(!overlay);
    setDetails(!details);
  };
  const close = () => {
    setDetails(false);
    setOverlay(false);
  };
  return (
    <>
      <div className="bg-zinc-950 border-l-2 shadow-md border-red-950 p-10 flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-zinc-300 text-2xl">{title}</h2>
        <button
          className="p-2 w-48 bg-zinc-900 text-sm hover:bg-zinc-800 transition-colors"
          onClick={toggleDetails}
        >
          View Details
        </button>
      </div>
      {details ? (
        <>
          <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-100 transition-colors"></div>
          <div className="details-card md:max-w-3xl w-96 flex flex-col items-center p-4 bg-zinc-900 rounded-sm animate-zoom-in z-200">
            <p className="font-bold text-center text-xl text-zinc-100 mt-3">
              {title}
            </p>
            <MdCancel
              className="cursor-pointer absolute right-2 top-2 text-red-900"
              style={{ fontSize: "24px" }}
              onClick={close}
            />
            <p
              className="font-light text-zinc-400 text-center my-4"
              style={{ fontSize: "14px", letterSpacing: "1px" }}
            >
              {programDetails}
            </p>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
