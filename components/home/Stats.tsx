"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const statsData = [
  { value: "500+", label: "Projects Completed", color: "text-blue-400" },
  { value: "15", label: "Years Experience", color: "text-purple-400" },
  { value: "24/7", label: "Support Available", color: "text-amber-400" },
  { value: "99.9%", label: "Uptime Reliability", color: "text-green-400" },
];

const Stats = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-[-100px] left-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animation: float 6s ease-in-out infinite"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-2xl animation: float 6s ease-in-out infinite"
        style={{ y }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 rounded-2xl backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
            >
              <div className={`text-5xl font-extrabold mb-3 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
