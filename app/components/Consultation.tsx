"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import ConsultationModal from "./ConsultationModal";

export default function Consultation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const points = [
    "il tipo di attività",
    "il tuo stile",
    "il target dei clienti",
    "le tue esigenze",
    "le funzionalità desiderate",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-28 px-16" style={{ backgroundColor: "#ede8df" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              <span style={{ color: "#1e3a7f" }}>La prima consulenza</span>{" "}
              <span style={{ color: "#4b5563" }}>è completamente gratuita.</span>
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: "#6b7280" }}>
              Prima di iniziare vogliamo conoscere il tuo locale. Un nostro
              operatore ti contatterà telefonicamente per comprendere:
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 md:p-12 mb-12 border"
            style={{ backgroundColor: "#fffbf5", borderColor: "#e5e1d9" }}
          >
            <ul className="space-y-4">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-lg"
                  style={{ color: "#6b7280" }}
                >
                  <span className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: "#1e3a7f" }} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 mb-12"
          >
            <div className="space-y-2">
              <p className="text-lg" style={{ color: "#6b7280" }}>
                <strong>Nessun impegno.</strong>
              </p>
              <p className="text-lg" style={{ color: "#6b7280" }}>
                <strong>Nessun costo.</strong>
              </p>
              <p className="text-lg" style={{ color: "#6b7280" }}>
                <strong>Solo una consulenza professionale.</strong>
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(30, 58, 127, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-lg border-2"
              style={{
                backgroundColor: "#d1d5db",
                color: "#1e3a7f",
                borderColor: "#1e3a7f"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#c4c9d4"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#d1d5db"}
            >
              Prenota la consulenza gratuita
              <FaArrowRight size={20} />
            </motion.button>
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
