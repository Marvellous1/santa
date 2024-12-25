"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface BankDetailsFormProps {
  onSubmit: (details: { accountNumber: string; bankName: string }) => void;
}

export function BankDetailsForm({ onSubmit }: BankDetailsFormProps) {
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ accountNumber, bankName });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-green-600 space-y-2"
      >
        <Check className="w-12 h-12 mx-auto" />
        <p className="text-xl font-semibold">Bank details submitted successfully!</p>
        <p className="text-sm text-gray-600">Santa will credit your account soon! 🎅</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
          Account Number
        </label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
          pattern="[0-9]*"
          minLength={10}
          maxLength={10}
        />
      </div>

      <div>
        <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
          Bank Name
        </label>
        <input
          type="text"
          id="bankName"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
      >
        Submit Bank Details
      </button>
    </form>
  );
}