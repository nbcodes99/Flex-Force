import React from "react";

type FitnessCardProps = {
  title: string;
  description: string;
};

export default function FitnessCard({ title, description }: FitnessCardProps) {
  return (
    <>
      <div
        className="bg-zinc-950 border-l-2 border-zinc-700 p-6 text-center m-3"
        style={{ width: "400px", height: "300px" }}
      >
        <h1 className="text-2xl mb-4">{title}</h1>
        <p className="text-zinc-500 font-light paragraph">{description}</p>
      </div>
    </>
  );
}
