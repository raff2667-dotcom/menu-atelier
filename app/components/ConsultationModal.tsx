"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaPhone, FaWhatsapp } from "react-icons/fa6";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const phoneNumber = "+39 351 480 2374";
  const whatsappNumber = "+393514802374";
  const whatsappMessage = "Ciao! Vorrei richiedere una consulenza gratuita per il mio menù digitale.";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 rounded-2xl shadow-2xl z-50 p-8"
            style={{ backgroundColor: "#f0e6db" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 transition-colors"
              style={{ color: "#6b7280" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#1e3a7f"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
            >
              <FaXmark size={24} />
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "#1e3a7f" }}>
                  Consulenza Gratuita
                </h2>
                <p style={{ color: "#6b7280" }}>
                  Contattaci direttamente per richiedere la tua consulenza gratuita. Siamo disponibili via telefono o WhatsApp.
                </p>
              </div>

              {/* Phone Option */}
              <motion.a
                href={`tel:${whatsappNumber}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-6 rounded-xl border-2 transition-all cursor-pointer"
                style={{ backgroundColor: "#f0f4fb", borderColor: "#1e3a7f" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white" style={{ backgroundColor: "#1e3a7f" }}>
                  <FaPhone className="text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold mb-1" style={{ color: "#6b7280" }}>
                    Telefono
                  </p>
                  <p className="text-xl font-bold" style={{ color: "#1e3a7f" }}>
                    {phoneNumber}
                  </p>
                </div>
              </motion.a>

              {/* WhatsApp Option */}
              <motion.a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-6 rounded-xl border-2 transition-all cursor-pointer"
                style={{ backgroundColor: "#f0fbf5", borderColor: "#059669" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white" style={{ backgroundColor: "#059669" }}>
                  <FaWhatsapp className="text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold mb-1" style={{ color: "#6b7280" }}>
                    WhatsApp
                  </p>
                  <p className="text-lg font-bold" style={{ color: "#059669" }}>
                    Apri chat
                  </p>
                </div>
              </motion.a>

              {/* Info Text */}
              <div className="rounded-xl p-4 border" style={{ backgroundColor: "#f9f7f4", borderColor: "#e5e1d9" }}>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                  <strong>Nota:</strong> I numeri di telefono e WhatsApp mostrati sono placeholder e andranno modificati con i vostri contatti reali.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
