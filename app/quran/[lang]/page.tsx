"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const paraNames = [
  { num: 1, arabic: "الم", english: "Alif Lam Meem" },
  { num: 2, arabic: "سيقول", english: "Sayaqool" },
  { num: 3, arabic: "تلك الرسل", english: "Tilka 'r-Rusul" },
  { num: 4, arabic: "لن تنالوا", english: "Lan Tanaaloo" },
  { num: 5, arabic: "والمحصنات", english: "Wal-Muhsanat" },
  { num: 6, arabic: "لا يحب الله", english: "Laa Yuhibbu Allah" },
  { num: 7, arabic: "وإذا سمعوا", english: "Wa Idhaa Sami'oo" },
  { num: 8, arabic: "ولو أننا", english: "Wa Lau Annanaa" },
  { num: 9, arabic: "قد أفلح", english: "Qad Aflaha" },
  { num: 10, arabic: "واعلموا", english: "Wa A'lamoo" },
  { num: 11, arabic: "يا أيها الذين آمنوا", english: "Ya Ayyuha Alladheena Aamanu" },
  { num: 12, arabic: "وما من دابة", english: "Wa Mamin Daabbatin" },
  { num: 13, arabic: "وما أبرئ نفسي", english: "Wa Maaa Ubarri'u Nafsee" },
  { num: 14, arabic: "ربما", english: "Rubamaa" },
  { num: 15, arabic: "سبحان الذي", english: "Subhaanal-ladhee" },
  { num: 16, arabic: "قال ألم", english: "Qaal Alam" },
  { num: 17, arabic: "اقترب للناس", english: "Iqtarabat" },
  { num: 18, arabic: "قد أفلح المؤمنون", english: "Qad Aflaha Al-Mu’minoon" },
  { num: 19, arabic: "وقال الذين لا يعلمون", english: "Wa Qaalalladheena Laa Ya’lamoon" },
  { num: 20, arabic: "أمن خلق", english: "Amman Khalaqa" },
  { num: 21, arabic: "اتل ما أوحي", english: "Utlu Maa Oohiya" },
  { num: 22, arabic: "ومن يقنت", english: "Wa Manyaqnut" },
  { num: 23, arabic: "ومالي", english: "Wa Mali" },
  { num: 24, arabic: "فمن أظلم", english: "Faman Azlam" },
  { num: 25, arabic: "إليه يرد", english: "Ilayhi Yuraddu" },
  { num: 26, arabic: "حم", english: "Ha Meem" },
  { num: 27, arabic: "قال فما خطبكم", english: "Qala Fama Khatbukum" },
  { num: 28, arabic: "قد سمع الله", english: "Qad Sami’a Allah" },
  { num: 29, arabic: "تبارك الذي", english: "Tabaarakalladhee" },
  { num: 30, arabic: "عم يتساءلون", english: "Amma Yatasa’aloon" },
];

export default function QuranParas() {
  const { lang } = useParams();

  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-black opacity-95" />
      <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.svg')] opacity-10 mix-blend-overlay" />

      <div className="relative z-10 w-full max-w-5xl">
        <h1 className="text-center text-4xl font-mono text-yellow-300 mb-10">
          {lang === "arabic" ? "أجزاء القرآن" : "Qur’an (English Translation)"}
        </h1>

        {lang === "arabic" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paraNames.map((para) => (
              <motion.div
                key={para.num}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: para.num * 0.03 }}
                className="bg-yellow-400 text-black font-bold rounded-lg shadow-lg p-4 hover:bg-yellow-500 transition flex flex-col items-center text-center"
              >
                <Link
                  href={`/pdfs/arabic/para${para.num}.pdf`}
                  target="_blank"
                  className="w-full"
                >
                  <span className="block text-lg">{`جزء ${para.num}`}</span>
                  <span className="block text-xl mt-1">{para.arabic}</span>
                  <span className="block text-sm text-gray-800">{para.english}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Link
              href="/pdfs/english/total.pdf"
              target="_blank"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
            >
              Open Full English Qur’an PDF
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
