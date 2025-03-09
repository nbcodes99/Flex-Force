import React from "react";
import BookCard from "../components/BookCard";

export default function Book() {
  return (
    <>
      <section className="flex flex-col items-center bg-black">
        <h1 className="text-3xl text-center md:text-4xl font-bold text-zinc-300 mb-6">
          Our Classes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BookCard
            title="HIIT"
            duration="45 min"
            price={50}
            available={true}
          />
          <BookCard
            title="Strength"
            duration="40 min"
            price={40}
            available={true}
          />
          <BookCard
            title="Endurance"
            duration="1 hr"
            price={65}
            available={false}
          />
          <BookCard
            title="Speed"
            duration="50 min"
            price={70}
            available={true}
          />
        </div>
      </section>
    </>
  );
}
