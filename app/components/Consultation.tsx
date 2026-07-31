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
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              La prima consulenza è completamente gratuita.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Prima di iniziare vogliamo conoscere il tuo locale. Un nostro
              operatore ti contatterà telefonicamente per comprendere:
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 md:p-12 mb-12 border border-gray-100"
          >
            <ul className="space-y-4">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-lg text-gray-700"
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-4" />
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
              <p className="text-gray-600 text-lg">
                <strong>Nessun impegno.</strong>
              </p>
              <p className="text-gray-600 text-lg">
                <strong>Nessun costo.</strong>
              </p>
              <p className="text-gray-600 text-lg">
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
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors text-lg"
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
