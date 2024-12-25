"use client";

import { useState, useEffect } from "react";

interface Snowflake {
  id: number;
  left: number;
}

export function useSnowflakes(count: number): Snowflake[] {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
    }));
    setSnowflakes(flakes);
  }, [count]);

  return snowflakes;
}