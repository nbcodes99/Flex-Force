import React from "react";
import { IoStarSharp } from "react-icons/io5";

type TestimonyProps = {
  comment: string;
  name: string;
};

export default function TestimonyCard({ comment, name }: TestimonyProps) {
  return (
    <>
      <div className="text-center flex flex-col items-center gap-y-3 m-3 p-6 bg-zinc-950 border-l-2 border-zinc-700 mt-8">
        <div className="star-rating text-orange-400 flex gap-x-2 font-bold text-xl">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </div>
        <h3 className="font-bold text-zinc-400">"{comment}"</h3>
        <p className="text-sm text-zinc-700">~ {name}</p>
      </div>
    </>
  );
}
