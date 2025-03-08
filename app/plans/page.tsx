import React from "react";
import PricingCard from "../components/PricingCard";

export default function Plans() {
  return (
    <>
      <section className="flex flex-col items-center text-center bg-black">
        <h1 className="font-bold text-zinc-400 text-zl md:text-3xl text-center mb-6">
          Choose Your Pricing Plan
        </h1>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-3">
          <PricingCard
            title={"Silver Membership"}
            price={25}
            description={"Short-term trial beginners"}
            validity={2}
          />
          <PricingCard
            title={"Gold Membership"}
            price={30}
            description={"Ideal for advanced trainees"}
            validity={12}
          />
          <PricingCard
            title={"Platinum Membership"}
            price={40}
            description={"Perfect for committed trainers"}
            validity={12}
          />
        </div>
      </section>
    </>
  );
}
