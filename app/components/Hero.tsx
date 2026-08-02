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
    <section className="min-h-screen pt-48 pb-20 pr-6" style={{ backgroundColor: "#f0e6db", paddingLeft: "50px", marginBottom: "50px" }}>
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
            className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            <span style={{ color: "#4b5563" }}>Il tuo menù,</span>{" "}
            <span style={{ color: "#1e3a7f" }}>progettato come un'esperienza</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed max-w-xl font-light"
            style={{ color: "#6b7280" }}
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
              whileHover={{ scale: 1.02, boxShadow: "0 12px 20px -5px rgba(30, 58, 127, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors border-2"
              style={{
                backgroundColor: "#d1d5db",
                color: "#1e3a7f",
                borderColor: "#1e3a7f"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#c4c9d4"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#d1d5db"}
            >
              Richiedi una consulenza gratuita
              <FaArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 px-8 py-3.5 rounded-lg font-medium transition-colors"
              style={{
                borderColor: "#1e3a7f",
                color: "#1e3a7f",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1e3a7f";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1e3a7f";
              }}
            >
              Guarda un esempio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right - QR Code Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <svg viewBox="0 0 400 500" className="w-80 h-96" xmlns="http://www.w3.org/2000/svg">
            {/* QR Code Background */}
            <motion.g
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* QR Code Grid */}
              <rect x="40" y="40" width="180" height="180" fill="#ffffff" stroke="#1e3a7f" strokeWidth="2" rx="8" />

              {/* QR Pattern - Top Left */}
              <rect x="55" y="55" width="30" height="30" fill="#1e3a7f" />
              <rect x="90" y="55" width="20" height="20" fill="#ffffff" stroke="#1e3a7f" strokeWidth="1" />
              <rect x="115" y="55" width="30" height="30" fill="#1e3a7f" />

              <rect x="55" y="90" width="20" height="20" fill="#ffffff" stroke="#1e3a7f" strokeWidth="1" />
              <rect x="80" y="90" width="20" height="20" fill="#1e3a7f" />
              <rect x="105" y="90" width="20" height="20" fill="#1e3a7f" />
              <rect x="130" y="90" width="15" height="15" fill="#ffffff" stroke="#1e3a7f" strokeWidth="1" />

              <rect x="55" y="115" width="30" height="30" fill="#1e3a7f" />
              <rect x="90" y="115" width="20" height="20" fill="#ffffff" stroke="#1e3a7f" strokeWidth="1" />
              <rect x="115" y="115" width="30" height="30" fill="#1e3a7f" />

              {/* QR Pattern - Random squares */}
              <rect x="155" y="60" width="15" height="15" fill="#1e3a7f" />
              <rect x="175" y="85" width="12" height="12" fill="#1e3a7f" />
              <rect x="160" y="100" width="18" height="18" fill="#1e3a7f" />
              <rect x="180" y="125" width="15" height="15" fill="#1e3a7f" />
              <rect x="70" y="150" width="20" height="20" fill="#1e3a7f" />
              <rect x="100" y="160" width="18" height="18" fill="#1e3a7f" />
              <rect x="140" y="145" width="15" height="15" fill="#1e3a7f" />
              <rect x="165" y="160" width="12" height="12" fill="#1e3a7f" />

              {/* Scan Line Animation */}
              <motion.line
                x1="50" y1="50" x2="210" y2="50"
                stroke="#4b5563"
                strokeWidth="3"
                opacity="0.6"
                animate={{ y: [0, 160, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.g>

            {/* Smartphone */}
            <motion.g
              animate={{ rotate: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "280px 350px" }}
            >
              {/* Phone Body */}
              <rect x="240" y="220" width="80" height="150" rx="8" fill="#2d3748" stroke="#1e3a7f" strokeWidth="2" />

              {/* Notch */}
              <rect x="265" y="225" width="30" height="8" rx="4" fill="#000000" />

              {/* Screen */}
              <rect x="248" y="240" width="64" height="120" rx="4" fill="#ffffff" />

              {/* Screen Content - Menu Items */}
              <rect x="252" y="248" width="56" height="8" rx="2" fill="#f0e6db" />
              <rect x="252" y="260" width="40" height="3" rx="1" fill="#d1d5db" />
              <rect x="252" y="266" width="35" height="3" rx="1" fill="#d1d5db" />

              <rect x="252" y="280" width="56" height="8" rx="2" fill="#f0e6db" />
              <rect x="252" y="292" width="42" height="3" rx="1" fill="#d1d5db" />
              <rect x="252" y="298" width="38" height="3" rx="1" fill="#d1d5db" />

              <rect x="252" y="312" width="56" height="8" rx="2" fill="#f0e6db" />
              <rect x="252" y="324" width="44" height="3" rx="1" fill="#d1d5db" />
              <rect x="252" y="330" width="36" height="3" rx="1" fill="#d1d5db" />

              {/* Camera */}
              <circle cx="280" cy="350" r="4" fill="#4b5563" />
            </motion.g>

            {/* Connecting Lines */}
            <motion.g
              opacity={0}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <line x1="220" y1="130" x2="240" y2="250" stroke="#1e3a7f" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="220" y1="130" x2="280" y2="220" stroke="#1e3a7f" strokeWidth="2" strokeDasharray="5,5" />
            </motion.g>

            {/* Checkmark - Success */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
              style={{ transformOrigin: "310px 180px" }}
            >
              <circle cx="310" cy="180" r="20" fill="none" stroke="#1e3a7f" strokeWidth="2" />
              <path d="M 305 180 L 310 185 L 318 173" stroke="#1e3a7f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </motion.g>

            {/* Label */}
            <text x="200" y="420" textAnchor="middle" fontSize="18" fontWeight="600" fill="#1e3a7f">
              Scansiona e Ordina
            </text>
            <text x="200" y="450" textAnchor="middle" fontSize="14" fill="#4b5563">
              Menù Digitale in Tempo Reale
            </text>
          </svg>
        </motion.div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
