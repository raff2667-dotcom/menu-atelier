"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function FinalCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Inizia oggi a progettare il menù perfetto.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Ogni progetto nasce da un confronto diretto con il cliente. Prenota
            gratuitamente una telefonata con il nostro team e scopri come
            possiamo valorizzare il tuo locale.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(201, 169, 97, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 mx-auto transition-all duration-300 text-lg"
          >
            Prenota la consulenza gratuita
            <FaArrowRight size={22} />
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm mt-8"
          >
            Nessun impegno • Nessun costo • Consulenza professionale
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
