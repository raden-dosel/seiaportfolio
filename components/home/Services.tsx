"use client";

import { CheckCircle, Shield, Zap } from "lucide-react";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const services = [
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Electric Fence Systems",
      description:
        "State-of-the-art perimeter security solutions with advanced monitoring and alert systems.",
      features: [
        "High-voltage deterrent",
        "Weather resistant",
        "24/7 monitoring",
        "Mobile alerts",
      ],
    },
    {
      icon: <Zap className="w-12 h-12 text-amber-400" />,
      title: "Automatic Gate Systems",
      description:
        "Seamless access control with smart automation technology for residential and commercial properties.",
      features: [
        "Remote control access",
        "Safety sensors",
        "Emergency backup",
        "Smart integration",
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 sm:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Parallax Background Circles */}
      <motion.div
        className="absolute top-[-100px] left-[15%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[10%] w-80 h-80 bg-purple-500/10 rounded-full blur-2xl"
        style={{ y }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Our Specialized Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mt-4"
          >
            We deliver cutting-edge security solutions tailored to your specific needs, backed by
            years of expertise and innovation.
          </motion.p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-blue-500/30 transition-all duration-300 group"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
