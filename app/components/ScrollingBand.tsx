"use client";

import { motion } from "framer-motion";

export default function ScrollingBand() {
  const scrollVariants = {
    animate: {
      x: [0, 1200],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const SVGIcon = ({ index }: { index: number }) => (
    <div key={index} className="flex-shrink-0 flex items-center justify-center w-32 h-28">
      <svg viewBox="0 0 100 100" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
        {index % 3 === 0 && (
          // QR Code
          <>
            <rect x="15" y="15" width="70" height="70" fill="none" stroke="#1e3a7f" strokeWidth="1.5" rx="4" />
            <rect x="20" y="20" width="12" height="12" fill="#1e3a7f" />
            <rect x="35" y="20" width="8" height="8" fill="#1e3a7f" />
            <rect x="20" y="35" width="8" height="8" fill="#1e3a7f" />
            <rect x="45" y="30" width="6" height="6" fill="#1e3a7f" />
            <rect x="55" y="25" width="5" height="5" fill="#1e3a7f" />
            <rect x="30" y="45" width="7" height="7" fill="#1e3a7f" />
            <rect x="50" y="50" width="6" height="6" fill="#1e3a7f" />
            <rect x="65" y="35" width="6" height="6" fill="#1e3a7f" />
          </>
        )}
        {index % 3 === 1 && (
          // Smartphone with Menu
          <>
            <rect x="25" y="10" width="50" height="80" rx="5" fill="none" stroke="#1e3a7f" strokeWidth="2" />
            <rect x="30" y="20" width="40" height="10" rx="2" fill="#f0e6db" />
            <rect x="32" y="35" width="36" height="4" fill="#d1d5db" />
            <rect x="32" y="43" width="30" height="4" fill="#d1d5db" />
            <rect x="32" y="53" width="36" height="4" fill="#d1d5db" />
            <rect x="32" y="61" width="32" height="4" fill="#d1d5db" />
            <circle cx="50" cy="78" r="3" fill="#1e3a7f" />
          </>
        )}
        {index % 3 === 2 && (
          // Fork and Knife
          <>
            <path d="M 30 20 L 30 70 M 28 25 L 32 25 M 28 32 L 32 32 M 28 39 L 32 39" stroke="#1e3a7f" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 70 20 L 70 70 M 72 25 L 68 25 M 72 32 L 68 32 M 72 39 L 68 39" stroke="#1e3a7f" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="15" r="3" fill="#1e3a7f" />
          </>
        )}
      </svg>
    </div>
  );

  // Create an array of 8 icons to fill the screen
  const icons = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="w-full overflow-hidden py-6" style={{ backgroundColor: "rgba(30, 58, 127, 0.08)" }}>
      <motion.div
        className="flex gap-4"
        variants={scrollVariants}
        animate="animate"
        style={{ width: "fit-content" }}
      >
        {/* First set of icons */}
        {icons.map((index) => (
          <SVGIcon key={`first-${index}`} index={index} />
        ))}
        {/* Duplicate set for seamless loop */}
        {icons.map((index) => (
          <SVGIcon key={`second-${index}`} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
