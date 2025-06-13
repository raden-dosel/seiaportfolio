"use client";

import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax effect
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 heroBackground"
        style={{ y: translateY }}
      />

      {/* Floating tech elements */}
      <motion.div
        className="absolute top-24 left-10 w-20 h-20 bg-blue-400/20 rounded-full backdrop-blur-md z-10 animation: float 6s ease-in-out infinite"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 right-10 w-16 h-16 bg-purple-400/20 rounded-full backdrop-blur-md z-10 animation: float 6s ease-in-out infinite"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-12 h-12 bg-amber-400/20 rounded-full backdrop-blur-md z-10 animation: float 6s ease-in-out infinite"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center max-w-5xl mx-auto px-4"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Empowering Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Security Perimeter
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
          Electric fencing and automation solutions crafted with precision, innovation, and reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/30 text-white backdrop-blur-sm hover:border-white/60 transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
