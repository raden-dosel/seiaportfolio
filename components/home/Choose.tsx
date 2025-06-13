"use client";

import React, { useRef } from "react";
import { Award, Clock, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Choose = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const features = [
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Certified Excellence",
      description:
        "Licensed professionals with industry certifications and proven track record of quality installations.",
      bg: "from-blue-600 to-blue-400",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Rapid Response",
      description:
        "Quick installation times and 24/7 emergency support to keep your security systems operational.",
      bg: "from-purple-600 to-purple-400",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Dedicated Support",
      description:
        "Ongoing maintenance, training, and technical support to ensure optimal system performance.",
      bg: "from-amber-600 to-yellow-400",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 bg-gradient-to-r from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      {/* Parallax Light Blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-blue-500/10 blur-3xl rounded-full z-0"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-60px] w-[28rem] h-[28rem] bg-amber-500/10 blur-3xl rounded-full z-0"
        style={{ y }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Why Choose SecureElectronics?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We combine technical expertise with unwavering commitment to quality and customer satisfaction.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl transition-all"
            >
              <div
                className={`bg-gradient-to-br ${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Choose;
