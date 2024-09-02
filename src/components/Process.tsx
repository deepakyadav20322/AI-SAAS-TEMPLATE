'use client'
import React from 'react';
import { Container } from './Container';
import { IconUserCircle, IconMail, IconChartBar } from "@tabler/icons-react";
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <Container>
        <h1 className='font-bold text-2xl text-center mb-8'>Our Process</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-900 p-8 rounded-lg shadow-lg text-center  border-neutral-700 hover:border-primary border-[1px] transition-colors duration-150 ease-in"
        >
          <IconUserCircle className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Build Your Resume
          </h3>
          <p className="text-neutral-400">
            Create a professional resume tailored to your industry and job role.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-900 p-8 rounded-lg shadow-lg text-center  border-neutral-700 hover:border-primary border-[1px] transition-colors duration-150 ease-in"
        >
          <IconMail className="text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Tailor Your Applications
          </h3>
          <p className="text-neutral-400">
            Use AI to write personalized cover letters and emails for each job
            application.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        
          className="bg-neutral-900 p-8 rounded-lg shadow-lg text-center border-neutral-700 hover:border-primary border-[1px] transition-colors duration-150 ease-in"
        >
          <IconChartBar className="text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Ace Your Interview
          </h3>
          <p className="text-neutral-400">
            Prepare for interviews with AI-generated questions and tips tailored
            to your role.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

export default Process;
