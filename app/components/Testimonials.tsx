"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Proprietario Ristorante San Marco",
      text: "Menù Atelier ha trasformato completamente il nostro modo di presentare i piatti. Il design è elegante, i clienti consultano il menù con facilità via QR Code e le vendite dei piatti in evidenza sono aumentate notevolmente. Il team è stato disponibile in ogni fase del progetto.",
    },
    {
      name: "Giulia Bianchi",
      role: "Manager Cocktail Bar The Golden Hour",
      text: "Non solo abbiamo ottenuto un menù bellissimo, ma anche una consulenza gratuita che ci ha fatto ripensare completamente la nostra identità visuale. I ragazzi di Menù Atelier capiscono davvero il nostro business e lo rispecchiano nel design.",
    },
    {
      name: "Alessandro Greco",
      role: "Proprietario Pizzeria Da Franco",
      text: "Velocissimi, professionali e sempre disponibili. Abbiamo potuto modificare il menù in pochi minuti quando abbiamo cambiato alcuni piatti stagionali. È esattamente il servizio di cui avevamo bisogno.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-24 px-6 bg-gray-50">
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
            Testimonianze
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-amber-600 hover:shadow-xl transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-600 fill-amber-600" size={16} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-black text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
