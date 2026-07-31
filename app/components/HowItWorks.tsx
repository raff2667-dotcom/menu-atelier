"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaPalette,
  FaFile,
  FaMobile,
  FaRocket,
} from "react-icons/fa6";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: FaPhone,
      title: "Consulenza telefonica gratuita",
      description:
        "Parli direttamente con un nostro consulente. Ascoltiamo le tue esigenze, analizziamo il tuo locale e raccogliamo le prime idee.",
    },
    {
      number: 2,
      icon: FaPalette,
      title: "Confronto con i designer",
      description:
        "Il tuo progetto viene sviluppato insieme ai nostri esperti di design. Studiamo colori, stile grafico, organizzazione del menù e identità del brand.",
    },
    {
      number: 3,
      icon: FaFile,
      title: "Progettazione",
      description:
        "Realizziamo una prima proposta professionale. Potrai richiedere modifiche fino a ottenere un risultato perfetto.",
    },
    {
      number: 4,
      icon: FaMobile,
      title: "Menù digitale",
      description:
        "Il menù viene pubblicato online. Riceverai il QR Code personalizzato pronto da stampare.",
    },
    {
      number: 5,
      icon: FaRocket,
      title: "Assistenza continua",
      description:
        "Anche dopo la consegna continuiamo a seguirti. Potrai aggiornare il menù quando desideri.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="come" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              Come lavoriamo
            </h2>
            <p className="text-xl text-gray-600">
              Creare il tuo menù è semplice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Connecting Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-black via-amber-600 to-black hidden md:block opacity-20" />

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
                    {/* Step Number Circle */}
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold mb-4 relative z-10">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <IconComponent className="text-amber-600 text-3xl" />
                    </div>

                    <h3 className="text-lg font-semibold mb-3 text-black">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-6 top-20 text-amber-600 z-20">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
