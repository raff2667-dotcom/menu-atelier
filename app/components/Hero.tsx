"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import ConsultationModal from "./ConsultationModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground"
          >
            Il tuo menù,{" "}
            <span className="text-amber-700">progettato come un'esperienza</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 leading-relaxed max-w-xl font-light"
          >
            Non realizziamo semplici menù digitali. Progettiamo strumenti di
            vendita che valorizzano il tuo locale, migliorano l'esperienza dei
            clienti e raccontano l'identità del tuo brand.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02, boxShadow: "0 12px 20px -5px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-amber-800 text-white px-8 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-amber-900 transition-colors"
            >
              Richiedi una consulenza gratuita
              <FaArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-amber-800 text-amber-800 px-8 py-3.5 rounded-lg font-medium hover:bg-amber-800 hover:text-white transition-colors"
            >
              Guarda un esempio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right - Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl border-8 border-gray-700 overflow-hidden"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />

            {/* Screen Content */}
            <div className="pt-8 px-6 h-full bg-white overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-bold text-black">Ristorante</h2>
                <p className="text-sm text-gray-600">Menu Digitale</p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-100 h-16 rounded-lg p-3">
                  <div className="h-2 bg-gray-300 rounded mb-2" />
                  <div className="h-1 bg-gray-200 rounded" />
                </div>
                <div className="bg-gray-100 h-16 rounded-lg p-3">
                  <div className="h-2 bg-gray-300 rounded mb-2" />
                  <div className="h-1 bg-gray-200 rounded" />
                </div>
                <div className="bg-gray-100 h-16 rounded-lg p-3">
                  <div className="h-2 bg-gray-300 rounded mb-2" />
                  <div className="h-1 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
