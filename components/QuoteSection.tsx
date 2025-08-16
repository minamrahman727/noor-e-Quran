"use client";

import { motion } from "framer-motion";
import DecorativePattern from "./DecorativePattern";

export default function QuoteSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden text-center">
      {/* Background same style as Hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-700 via-green-800 to-green-700 opacity-95" />
        <div className="absolute inset-0 opacity-20">
        <DecorativePattern />
      </div>
      <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.svg')] opacity-10 mix-blend-overlay" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto z-10"
      >
        {/* Arabic Verse */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl md:text-4xl font-mono text-yellow-300 leading-loose"
          dir="rtl"
        >
          إِنَّ هَٰذَا ٱلۡقُرۡءَانَ يَهۡدِي لِلَّتِي هِيَ أَقۡوَمُ
        </motion.h2>

        {/* Translation */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
          “Indeed, this Qur’an guides to that which is most upright and gives
          good news to the believers who do righteous deeds, that they will have
          a great reward.” <span className="text-yellow-400">(17:9)</span>
        </p>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-8 h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"
        />
      </motion.div>
    </section>
  );
}
