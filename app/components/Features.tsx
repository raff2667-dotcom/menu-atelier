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
      icon: Users,
      title: "Assistenza umana",
      description: "Parli sempre con persone reali.",
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
    {
      icon: Headphones,
      title: "Supporto continuo",
      description: "Siamo disponibili anche dopo la consegna.",
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
    <section className="py-24 px-6 bg-white">
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
            Perché scegliere noi
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-100 hover:border-amber-600 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
