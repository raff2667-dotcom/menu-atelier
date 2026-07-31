"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import ConsultationModal from "./ConsultationModal";

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section className="py-32 px-6 text-white" style={{ backgroundColor: "#1e3a7f" }}>
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
            <span>Inizia oggi a</span>{" "}
            <span style={{ color: "#d1d5db" }}>progettare il menù perfetto.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#d1dce8" }}
          >
            Ogni progetto nasce da un confronto diretto con il cliente. Prenota
            gratuitamente una telefonata con il nostro team e scopri come
            possiamo valorizzare il tuo locale.
          </motion.p>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(209, 213, 219, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg font-medium flex items-center justify-center gap-3 mx-auto transition-all duration-300 text-lg border-2"
            style={{
              backgroundColor: "#d1d5db",
              color: "#1e3a7f",
              borderColor: "#d1d5db"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#c4c9d4"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#d1d5db"}
          >
            Prenota la consulenza gratuita
            <FaArrowRight size={22} />
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="text-sm mt-8"
            style={{ color: "#a5b4d1" }}
          >
            Nessun impegno • Nessun costo • Consulenza professionale
          </motion.p>
        </motion.div>

        <ConsultationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
