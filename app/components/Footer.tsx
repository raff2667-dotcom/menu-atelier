"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="text-white py-16 px-6" style={{ backgroundColor: "#1e3a7f" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-white">Menù</span>
                <span style={{ color: "#d1dce8" }}> Atelier</span>
              </h3>
              <p className="text-sm" style={{ color: "#a5b4d1" }}>
                Progettiamo menù digitali che valorizzano il tuo locale.
              </p>
            </motion.div>

            {/* Links 1 */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white">Azienda</h4>
              <ul className="space-y-2 text-sm" style={{ color: "#a5b4d1" }}>
                <li>
                  <Link href="#" className="transition-colors" style={{ color: "#a5b4d1" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"} onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}>
                    Chi siamo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors" style={{ color: "#a5b4d1" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"} onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}>
                    Servizi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors" style={{ color: "#a5b4d1" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"} onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}>
                    Contatti
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Links 2 */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white">Risorse</h4>
              <ul className="space-y-2 text-sm" style={{ color: "#a5b4d1" }}>
                <li>
                  <Link href="#faq" className="transition-colors" style={{ color: "#a5b4d1" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"} onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors" style={{ color: "#a5b4d1" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"} onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors" style={{ color: "#a5b4d1" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"} onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}>
                    Termini di servizio
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white">Seguici</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#a5b4d1" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#a5b4d1" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#a5b4d1" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#a5b4d1"}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t pt-8"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <p className="text-center text-sm" style={{ color: "#a5b4d1" }}>
              © {currentYear} Menù Atelier. Tutti i diritti riservati.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
