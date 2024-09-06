"use client";
import React from "react";
import { motion } from "framer-motion";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Lead Developer",
      image: "Images/p.png", // Replace with actual image paths
      description: "Expert in full-stack development and AI integration.",
    },
    {
      name: "Michael Lee",
      role: "UI/UX Designer",
      image: "Images/M.webp",  // Replace with actual image paths
      description: "Specializes in modern UI/UX designs and user experience.",
    },
    {
      name: "Sarah Williams",
      role: "Project Manager",
      image: "Images/R.png", // Replace with actual image paths
      description: "Skilled in managing large-scale projects with agility.",
    },
  ];

  return (
    <div className="bg-black py-20 px-10">
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-4 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A group of talented professionals dedicated to creating the best
          solutions.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          >
            <div className="relative h-56 bg-gradient-to-b from-blue-500 to-purple-600">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain opacity-95"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-blue-500 mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
