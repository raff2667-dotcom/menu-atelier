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
    <footer className="bg-black text-white py-16 px-6">
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
                <span className="text-amber-400"> Atelier</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Progettiamo menù digitali che valorizzano il tuo locale.
              </p>
            </motion.div>

            {/* Links 1 */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white">Azienda</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Chi siamo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Servizi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contatti
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Links 2 */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white">Risorse</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
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
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
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
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-center text-sm text-gray-400">
              © {currentYear} Menù Atelier. Tutti i diritti riservati.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
