"use client";

import React, { useRef } from "react";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Testimonial = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const testimonials = [
    {
      name: "John Mitchell",
      company: "PropertyCorp",
      text: "Outstanding service and reliability. Our electric fence system has been flawless for 3 years.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      company: "Industrial Solutions",
      text: "The automatic gate system exceeded our expectations. Professional installation and great support.",
      rating: 5,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      {/* Floating Gradient Backgrounds */}
      <motion.div
        className="absolute top-[-80px] left-[5%] w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[5%] w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"
        style={{ y }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mt-4"
          >
            Trusted by businesses and homeowners across the region
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md transition-all duration-300 hover:shadow-purple-500/20"
            >
              <div className="flex items-center mb-4 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-200 mb-6 text-lg italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <div className="font-bold text-white text-lg">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
