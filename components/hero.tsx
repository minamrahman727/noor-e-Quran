"use client";

import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import DecorativePattern from "./DecorativePattern";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-green-900 via-green-800 to-green-700 text-white overflow-hidden flex items-center justify-center">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-20">
        <DecorativePattern />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Bismillah in Arabic */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-mono text-yellow-200 mb-6"
        >
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </motion.h2>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Explore The Holy Qur’an
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mb-10 text-gray-200"
        >
          Read the Qur’an para-wise in Arabic (original) and English translation.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href="/quran"
            className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition text-lg"
          >
            <FaBookOpen className="text-2xl" />
            Read Qur’an
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
