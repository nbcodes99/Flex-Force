import React from "react";
import ProgramCard from "../components/ProgramCard";

export default function Programs() {
  return (
    <>
      <section className="flex flex-col items-center bg-black h-screen p-6">
        <h1 className="font-bold text-2xl md:text-4xl text-center text-zinc-200 mt-8">
          Our Challenges
        </h1>
        <p className="font-light text-center mt-2 mb-10 text-sm text-zinc-600">
          Step by Step challenges to keep you strong and motivated
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <ProgramCard
            title="Be Full Body Strong"
            programDetails="This program targets all major muscle groups, combining strength
              training with high-intensity interval training
              HIIT and mobility
              exercises to give you a balanced and functional physique."
          />
          <ProgramCard
            title="Arms, Arms, Arms!"
            programDetails="This program combines a variety of exercises that engage all the muscles in your upper arms, improving strength, endurance, and muscle definition."
          />
          <ProgramCard
            title="10 Day Squat Challenge"
            programDetails="This program focuses on improving your squat form, increasing your squat depth, and maximizing your lower body strength."
          />
        </div>
      </section>
    </>
  );
}
