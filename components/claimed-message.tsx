"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export function ClaimedMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md"
    >
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 text-yellow-400" />
        <p className="ml-3 text-sm text-yellow-700">
          This reward has already been claimed.
        </p>
      </div>
    </motion.div>
  );
}