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
    <section id="come" className="py-28 pr-6" style={{ backgroundColor: "#ede8df", paddingLeft: "50px" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tight" style={{ color: "#1e3a7f" }}>
              <span style={{ color: "#1e3a7f" }}>Come</span>{" "}
              <span style={{ color: "#4b5563" }}>lavoriamo</span>
            </h2>
            <p className="text-xl" style={{ color: "#6b7280" }}>
              Creare il tuo menù è semplice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r hidden md:block opacity-20" style={{ backgroundImage: "linear-gradient(to right, #1e3a7f, #6b7280, #1e3a7f)" }} />

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 border" style={{ backgroundColor: "#fffbf5", borderColor: "#e5e1d9" }}>
                    {/* Step Number Circle */}
                    <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-4 relative z-10" style={{ backgroundColor: "#1e3a7f" }}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <IconComponent className="text-3xl" style={{ color: "#1e3a7f" }} />
                    </div>

                    <h3 className="text-lg font-semibold mb-3" style={{ color: "#1e3a7f" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-6 top-20 z-20" style={{ color: "#1e3a7f" }}>
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
