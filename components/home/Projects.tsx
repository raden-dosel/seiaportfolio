"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const projects = [
    {
      title: "Residential Security Complex",
      description: "Complete perimeter security for 50-unit residential complex",
      image: "/api/placeholder/400/300",
      stats: "2.5km fence installed",
    },
    {
      title: "Industrial Facility Gate",
      description: "Heavy-duty automatic gate system for manufacturing plant",
      image: "/api/placeholder/400/300",
      stats: "15-ton capacity gate",
    },
    {
      title: "Commercial Office Entry",
      description: "Smart access control system for corporate headquarters",
      image: "/api/placeholder/400/300",
      stats: "Multi-point authentication",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Parallax Decorative Elements */}
      <motion.div
        className="absolute top-[-60px] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-[-60px] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-2xl"
        style={{ y }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mt-4"
          >
            Explore our portfolio of successful installations and see the quality that sets us apart.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 group"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="text-sm text-blue-400 font-medium mb-2">
                  {project.stats}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
