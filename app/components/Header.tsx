"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "#fffbf5" : "rgba(255, 251, 245, 0.8)",
        backdropFilter: isScrolled ? "none" : "blur(10px)",
        boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.05)" : "none"
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tight"
        >
          <span style={{ color: "#1e3a7f" }}>Menù</span>
          <span style={{ color: "#1e3a7f" }}> Atelier</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium" style={{ color: "#6b7280" }}>
            <li>
              <Link
                href="#perche"
                className="transition-colors"
                style={{ color: "#6b7280" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#1e3a7f"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
              >
                Perché noi
              </Link>
            </li>
            <li>
              <Link
                href="#come"
                className="transition-colors"
                style={{ color: "#6b7280" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#1e3a7f"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
              >
                Come lavoriamo
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="transition-colors"
                style={{ color: "#6b7280" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#1e3a7f"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={{ backgroundColor: "#1e3a7f" }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2e5090"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1e3a7f"}
        >
          Consulenza gratuita
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          style={{ color: "#1e3a7f" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t"
          style={{ backgroundColor: "#fffbf5", borderColor: "#e5e1d9" }}
        >
          <div className="px-6 py-4 space-y-4">
            <Link
              href="#perche"
              className="block text-sm font-medium transition-colors"
              style={{ color: "#6b7280" }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.color = "#1e3a7f"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
            >
              Perché noi
            </Link>
            <Link
              href="#come"
              className="block text-sm font-medium transition-colors"
              style={{ color: "#6b7280" }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.color = "#1e3a7f"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
            >
              Come lavoriamo
            </Link>
            <Link
              href="#faq"
              className="block text-sm font-medium transition-colors"
              style={{ color: "#6b7280" }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.color = "#1e3a7f"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
            >
              FAQ
            </Link>
            <button
              className="w-full text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ backgroundColor: "#1e3a7f" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2e5090"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1e3a7f"}
            >
              Consulenza gratuita
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
