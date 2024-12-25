"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[url('/christmas-bg.jpg')] bg-cover bg-center">
      <div className="min-h-screen bg-black/40 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-md w-full text-center"
        >
          <Gift className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Oops! Gift Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, this gift link doesn't exist. Please check the URL and try again.
          </p>
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}