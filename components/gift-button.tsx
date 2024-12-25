"use client";

import { Gift } from "lucide-react";
import { motion } from "framer-motion";

interface GiftButtonProps {
  clicks: number;
  requiredClicks: number;
  onClicked: () => void;
}

export function GiftButton({ clicks, requiredClicks, onClicked }: GiftButtonProps) {
  return (
    <div className="space-y-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 w-full flex items-center justify-center gap-3 text-xl font-semibold transition-colors"
        onClick={onClicked}
      >
        <Gift className="w-6 h-6" />
        Unwrap Your Gift! ({clicks}/{requiredClicks})
      </motion.button>
      <p className="text-sm text-white/90 text-center">
        Keep clicking to reveal your surprise!
      </p>
    </div>
  );
}