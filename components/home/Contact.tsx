"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      bg: "bg-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: "Email Us",
      value: "info@secureelectronics.com",
      bg: "bg-purple-600",
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      label: "Visit Us",
      value: "123 Security Ave, Tech City, TC 12345",
      bg: "bg-amber-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Parallax Glows */}
      <motion.div
        className="absolute top-[-80px] left-[-60px] w-96 h-96 bg-blue-500/10 blur-3xl rounded-full z-0"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-[30rem] h-[30rem] bg-purple-500/10 blur-3xl rounded-full z-0"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ready to Secure Your Property?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get in touch today for a free consultation and custom security solution designed for your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-white">{item.label}</div>
                  <div className="text-gray-400">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <form className="space-y-6">
              {["Your Name", "Your Email", "Your Phone"].map((placeholder, i) => (
                <motion.input
                  key={i}
                  type={placeholder.includes("Email") ? "email" : placeholder.includes("Phone") ? "tel" : "text"}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
                  whileFocus={{ scale: 1.01 }}
                />
              ))}
              <motion.textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all resize-none"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
