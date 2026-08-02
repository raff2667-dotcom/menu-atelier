"use client";

import { motion } from "framer-motion";

export default function WhySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="perche" className="py-24 pr-6" style={{ backgroundColor: "#f0e6db", paddingLeft: "50px", marginBottom: "50px" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-6 tracking-tight"
          >
            <span style={{ color: "#1e3a7f" }}>Ogni menù</span>{" "}
            <span style={{ color: "#4b5563" }}>racconta una storia.</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="max-w-3xl space-y-4 text-lg leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            <p>
              Un buon menù non serve soltanto a mostrare i piatti.
            </p>
            <ul className="space-y-2 ml-4">
              <li>✓ Guida il cliente nelle sue scelte</li>
              <li>✓ Valorizza i prodotti</li>
              <li>✓ Aumenta il valore percepito del locale</li>
              <li>✓ Trasmette professionalità</li>
            </ul>
            <p className="pt-4">
              Noi di Menù Atelier progettiamo ogni menù partendo dalla tua
              identità. Ogni dettaglio viene studiato insieme a te, dalla
              grafica alla struttura dei contenuti, fino all'esperienza di
              consultazione tramite QR Code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
