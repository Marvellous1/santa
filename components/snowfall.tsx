"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSnowflakes } from "@/hooks/use-snowflakes";

export function Snowfall() {
  const snowflakes = useSnowflakes(50);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-white text-opacity-80"
          initial={{ top: -20, left: `${flake.left}%` }}
          animate={{
            top: "100%",
            left: [`${flake.left}%`, `${flake.left + (Math.random() * 10 - 5)}%`],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
}