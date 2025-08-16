"use client";

import Link from "next/link";
import DecorativePattern from "./DecorativePattern";
import { FaQuran, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-gray-200 pt-12 pb-6 px-6 md:px-12 overflow-hidden">
      {/* Same background as Hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-800 to-green-700 " />
      <div className="absolute inset-0 opacity-20">
        <DecorativePattern />
      </div>
      <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.svg')] opacity-10 mix-blend-overlay" />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10 z-10">
        {/* Left - Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaQuran className="text-yellow-400 text-3xl animate-pulse drop-shadow-lg" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Qur’an Library
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            A digital space to explore the Qur’an in multiple languages with authentic sources. Starting with English & Arabic, expanding soon Insha’Allah 🌙.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-col gap-3 text-sm md:items-center">
          <h3 className="font-semibold text-yellow-400 mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/quran" className="hover:text-yellow-300 transition">
            Qur’an
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>

        {/* Right - Social Media */}
        <div className="flex flex-col gap-3 md:items-end">
          <h3 className="font-semibold text-yellow-400 mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="hover:text-yellow-400 transition"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="hover:text-yellow-400 transition"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="hover:text-yellow-400 transition"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative mt-10 pt-4 border-t border-gray-700 text-center text-sm text-gray-400 z-10"
      >
        © {new Date().getFullYear()} Qur’an Library. All Rights Reserved.
      </motion.div>
    </footer>
  );
}