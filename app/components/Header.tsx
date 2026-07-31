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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-foreground">Menù</span>
          <span className="text-amber-700"> Atelier</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-gray-700">
            <li>
              <Link
                href="#perche"
                className="hover:text-black transition-colors"
              >
                Perché noi
              </Link>
            </li>
            <li>
              <Link
                href="#come"
                className="hover:text-black transition-colors"
              >
                Come lavoriamo
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-black transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block bg-amber-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors"
        >
          Consulenza gratuita
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
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
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-6 py-4 space-y-4">
            <Link
              href="#perche"
              className="block text-sm font-medium text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Perché noi
            </Link>
            <Link
              href="#come"
              className="block text-sm font-medium text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Come lavoriamo
            </Link>
            <Link
              href="#faq"
              className="block text-sm font-medium text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <button className="w-full bg-amber-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-900">
              Consulenza gratuita
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
