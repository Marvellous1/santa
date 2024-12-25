"use client";

import { ClaimedReward, BankDetails } from "./types";

const STORAGE_KEY = "claimed-rewards";

export function getClaimedRewards(): ClaimedReward[] {
  if (typeof window === "undefined") return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading claimed rewards:", error);
    return [];
  }
}

export function saveClaimedReward(personId: string, bankDetails: BankDetails): void {
  try {
    const claims = getClaimedRewards();
    claims.push({
      personId,
      bankDetails,
      claimedAt: new Date().toISOString(),
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(claims));
  } catch (error) {
    console.error("Error saving claimed reward:", error);
  }
}

export function isRewardClaimed(personId: string): boolean {
  return getClaimedRewards().some((claim) => claim.personId === personId);
}