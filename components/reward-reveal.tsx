"use client";

import { useState } from "react";
import type { Person } from "@/lib/data";
import { Snowfall } from "./snowfall";
import { GiftButton } from "./gift-button";
import { RewardCard } from "./reward-card";

export function RewardReveal({ person }: { person: Person }) {
  const [clicks, setClicks] = useState(0);
  const requiredClicks = 10;
  const isRevealed = clicks >= requiredClicks;

  return (
    <div className="flex justify-center items-center">
      <Snowfall />
      <div>

      <div className="text-center space-y-2 relative z-10">
        <h1 className="text-3xl font-bold m-0 text-white font-serif">
          MERRY
        </h1>
        <h1 className="text-5xl leading-tight mt-0 font-bold text-white font-serif">
          CHRISTMAS
        </h1>
        <h1 className="text-xl font-bold mt-0 text-white font-serif">
          {person.name}
        </h1>

      </div>
        <div className="bg-white w-full px-4 py-4 rounded-md mt-8 mb-4">
          <p className="text-base text-gray-700">{person.message}</p>
        </div>

        {!isRevealed ? (
          <GiftButton
            clicks={clicks}
            requiredClicks={requiredClicks}
            onClicked={() => setClicks(prev => prev + 1)}
          />
        ) : (
          <RewardCard
            reward={person.reward}
            personId={person.id}
          // claimed={person.claimed}
          />
        )}
        </div>
    </div>
  );
}