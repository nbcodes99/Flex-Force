import React from "react";

type PricingCardProps = {
  title: string;
  price: number;
  description: string;
  validity: number;
};

export default function PricingCard({
  title,
  price,
  description,
  validity,
}: PricingCardProps) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 bg-slate-900 p-6">
        <h3 className="text-xl text-zinc-400 font-light">{title}</h3>
        <h1 className="text-6xl font-bold flex">
          <span className="text-xl">$</span>
          {price}
        </h1>
        <p className="font-light text-sm text-slate-600">Every month</p>
        <p className="font-light text-sm text-zinc-200">{description}</p>
        <p className="text-sm text-zinc-400">Valid for {validity} months</p>
        <button className="p-3 my-8 w-64 border-slate-800 border hover:border-slate-600 transition-colors">
          Select
        </button>
        <div className="space-y-4">
          <p className="font-light text-slate-400">Silver membership</p>
          <p className="font-light text-slate-400">Fitness sssesment</p>
          <p className="font-light text-slate-400">Locker room with showers</p>
        </div>
      </div>
    </>
  );
}
