"use client";

import { Shield } from "lucide-react";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-black py-16 border-t border-gray-800 overflow-hidden"
    >
      {/* Glowing Elements */}
      <motion.div
        className="absolute -top-20 left-[-60px] w-72 h-72 bg-blue-500/10 blur-2xl rounded-full z-0"
        style={{ y: yGlow }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-purple-500/10 blur-3xl rounded-full z-0"
        style={{ y: yGlow }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Shield className="w-8 h-8 text-blue-500 drop-shadow-lg" />
            <span className="font-bold text-xl text-white tracking-wide">
              Secure<span className="text-blue-400">Electronics</span>
            </span>
          </motion.div>

          {/* Text Section */}
          <div className="text-gray-400 text-sm leading-relaxed">
            <p>&copy; 2025 SecureElectronics. All rights reserved.</p>
            <p className="mt-1 opacity-80">
              Professional Electronic Security Solutions
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
