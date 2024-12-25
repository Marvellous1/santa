"use client";

import { motion } from "framer-motion";
import { BankDetailsForm } from "./bank-details-form";
import { ClaimedMessage } from "./claimed-message";
import { saveClaimedReward, isRewardClaimed } from "@/lib/storage";
import { useState, useEffect } from "react";

interface RewardCardProps {
  reward: number;
  personId: string;
}

export function RewardCard({ reward, personId }: RewardCardProps) {
  const [isClaimed, setIsClaimed] = useState(false);
  
  useEffect(() => {
    setIsClaimed(isRewardClaimed(personId));
  }, [personId]);

  const handleSubmit = (bankDetails: { accountNumber: string; bankName: string }) => {
    saveClaimedReward(personId, bankDetails);
    setIsClaimed(true);
  };

  if (isClaimed) {
    return <ClaimedMessage />;
  }

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      className="bg-green-600 text-center text-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-2">Congratulations! 🎉</h2>
      <p className="text-xl">You've received</p>
      <p className="text-6xl font-bold my-4">${reward}</p>
      <p className="text-lg mb-6">Enjoy your gift! 🎁</p>
      
    </motion.div>
  );
}