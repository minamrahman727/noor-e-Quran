"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DecorativePattern from "@/components/DecorativePattern";

export default function QuranPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
      {/* Background same theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-black opacity-95" />
        <div className="absolute inset-0 opacity-20">
        <DecorativePattern />
      </div>
      <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.svg')] opacity-10 mix-blend-overlay" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-6">
          Read the Noble Qur’an
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-12">
          Choose your preferred language to begin reading Para-wise Qur’an.
        </p>

        {/* Language Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/quran/arabic">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
            >
              العربية (Arabic)
            </motion.button>
          </Link>

          <Link href="/quran/english">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
            >
              English
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
