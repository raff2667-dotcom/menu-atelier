"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Quanto tempo serve per realizzare il menù?",
      answer:
        "Di solito, dalla consulenza gratuita alla consegna del menù digitale passano 2-3 settimane, a seconda della complessità del progetto e della velocità di feedback. Tempi brevi per progetti standard, tempi più lunghi per progettazioni particolarmente elaborate.",
    },
    {
      question: "Posso modificare il menù dopo la consegna?",
      answer:
        "Sì, assolutamente. Uno dei nostri principali vantaggi è la facilità di modifica. Puoi aggiornare il menù in qualsiasi momento, modificare prezzi, aggiungere piatti stagionali o cambiar completamente il design. Siamo qui per supportarti.",
    },
    {
      question: "Il QR Code è incluso nel servizio?",
      answer:
        "Sì, il QR Code personalizzato è completamente incluso nel servizio. Potrai stamparlo su menu cartacei, tovagliolini, o ovunque desideri. È personalizzato per la tua attività e coordina con il design del menù digitale.",
    },
    {
      question: "Serve scaricare un'app per consultare il menù?",
      answer:
        "No, il menù è completamente accessibile via web. I tuoi clienti scansionano il QR Code con la fotocamera dello smartphone, e il menù si apre direttamente nel browser. Nessun download, nessuna app necessaria.",
    },
    {
      question: "Posso avere il menù in più lingue?",
      answer:
        "Certamente. Durante la consulenza gratuita possiamo discutere di multilingua e di come strutturare il menù per supportare diverse lingue. Questo può essere uno strumento utile se hai clienti internazionali.",
    },
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
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-16 tracking-tight"
          >
            Domande frequenti
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-8 py-5 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-300 text-left"
                >
                  <h3 className="font-semibold text-lg text-black">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <FaPlus className="text-amber-600" size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 py-5 bg-white border-t border-gray-100"
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
