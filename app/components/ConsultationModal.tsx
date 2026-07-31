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
  const phoneNumber = "+39 123 456 7890";
  const whatsappNumber = "+39123456789";
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
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl z-50 p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <FaXmark size={24} />
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-black mb-2">
                  Consulenza Gratuita
                </h2>
                <p className="text-gray-600">
                  Contattaci direttamente per richiedere la tua consulenza gratuita. Siamo disponibili via telefono o WhatsApp.
                </p>
              </div>

              {/* Phone Option */}
              <motion.a
                href={`tel:${whatsappNumber}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    Telefono
                  </p>
                  <p className="text-xl font-bold text-blue-600">
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
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    WhatsApp
                  </p>
                  <p className="text-lg font-bold text-green-600">
                    Apri chat
                  </p>
                </div>
              </motion.a>

              {/* Info Text */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-xs text-gray-600 leading-relaxed">
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
