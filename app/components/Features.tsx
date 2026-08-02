"use client";

import { motion } from "framer-motion";
import {
  FaStar as Sparkles,
  FaPen as Pencil,
  FaUsers as Users,
  FaWrench as Clock,
  FaQrcode as QrCode,
  FaHeadset as Headphones,
} from "react-icons/fa6";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Esperienza nel design",
      description:
        "I nostri designer progettano interfacce eleganti e intuitive.",
    },
    {
      icon: Pencil,
      title: "Progetto su misura",
      description: "Ogni locale è diverso. Ogni menù viene realizzato da zero.",
    },
    {
      icon: Clock,
      title: "Aggiornamenti semplici",
      description: "Modificare il menù richiede pochi minuti.",
    },
    {
      icon: QrCode,
      title: "QR Code personalizzato",
      description:
        "Design coordinato con l'immagine del locale.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="py-28 pr-6 mb-80" style={{ backgroundColor: "#f0e6db", paddingLeft: "50px" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-16 tracking-tight"
          >
            <span style={{ color: "#1e3a7f" }}>Perché</span>{" "}
            <span style={{ color: "#4b5563" }}>scegliere noi</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-xl p-8 border hover:shadow-xl transition-all duration-300 h-full" style={{ backgroundColor: "#f9f7f4", borderColor: "#e5e1d9" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "#1e3a7f"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e5e1d9"}>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 text-white" style={{ backgroundColor: "#1e3a7f" }}>
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: "#1e3a7f" }}>
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: "#6b7280" }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
