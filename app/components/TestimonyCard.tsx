import React from "react";
import { IoStarSharp } from "react-icons/io5";

type TestimonyProps = {
  comment: string;
  name: string;
};

export default function TestimonyCard({ comment, name }: TestimonyProps) {
  return (
    <div className="text-center flex flex-col items-center gap-y-3 m-3 p-6 bg-zinc-950 border-l-2 border-zinc-700 mt-8">
      <div
        className="star-rating text-orange-400 flex gap-x-2 font-bold text-xl"
        aria-label="5 stars"
      >
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
      <blockquote className="font-bold text-zinc-400 italic">
        {comment}
      </blockquote>
      <p className="text-sm text-zinc-700">~ {name}</p>
    </div>
  );
}
