"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here------------------
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Container>
    <div className="flex items-center justify-center bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full p-6 md:p-8  rounded-lg shadow-xl">
        {/* Left Side - Theme/Visual */}
        <motion.div
          className="relative bg-gradient-to-br from-blue-800 to-purple-600 p-6 rounded-lg flex flex-col justify-center items-center text-white"
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-sm">
            We would love to hear from you. Feel free to reach out for any
            inquiries or feedback.
          </p>
      
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          className="flex flex-col justify-center text-white"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-neutral-800 focus:outline-none focus:ring-2 px-4 py-3 rounded-md text-sm text-white transition-all duration-300 ease-in-out"
              value={formData.name.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: { value: e.target.value, error: "" },
                })
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-neutral-800 focus:outline-none focus:ring-2 px-4 py-3 rounded-md text-sm text-white transition-all duration-300 ease-in-out"
              value={formData.email.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: { value: e.target.value, error: "" },
                })
              }
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-neutral-800 focus:outline-none focus:ring-2 px-4 py-3 rounded-md text-sm text-white transition-all duration-300 ease-in-out resize-none"
              value={formData.message.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: { value: e.target.value, error: "" },
                })
              }
            />
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full px-4 py-3 mt-4 rounded-md font-bold text-white transition-all duration-300 ease-in-out ${
                isSubmitted
                  ? "bg-green-500"
                  : "bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300"
              }`}
              type="submit"
            >
              {isSubmitted ? "Thank You!" : "Submit"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
    </Container>
  );
};
