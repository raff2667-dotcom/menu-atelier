"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      category: "Ristorante",
      title: "La Trattoria Elegante",
      description: "Design moderno con vibes vintage",
    },
    {
      id: 2,
      category: "Cocktail Bar",
      title: "The Golden Hour",
      description: "Interfaccia sofisticata e intuitiva",
    },
    {
      id: 3,
      category: "Pizzeria",
      title: "Da Marco",
      description: "Branding caldo e accogliente",
    },
    {
      id: 4,
      category: "Bistrot",
      title: "Petit Coin Parisien",
      description: "Design elegante e minimalista",
    },
    {
      id: 5,
      category: "Enoteca",
      title: "Vini & Sapori",
      description: "Esperienza visiva raffinata",
    },
    {
      id: 6,
      category: "Caffetteria",
      title: "The Daily Cup",
      description: "Design fresco e contemporaneo",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
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
            Portfolio
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-600 transition-all duration-300 shadow-sm hover:shadow-2xl h-64 relative flex flex-col justify-between p-8">
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center text-white text-center z-10"
                  >
                    <p className="text-amber-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90">{project.description}</p>
                  </motion.div>

                  {/* Static Content */}
                  <div className="relative z-0 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {project.title}
                    </h3>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-amber-600 font-semibold text-sm relative z-0 group-hover:opacity-0"
                  >
                    Scopri il progetto →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
