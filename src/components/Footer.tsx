'use client'
import React from 'react';
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-neutral-900 text-white py-10 px-5 lg:px-20"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-secondary">EzSync</h2>
            <p className="text-neutral-500">Building a better future with AI-driven solutions.</p>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Services</h4>
          <ul className="text-neutral-400 space-y-2">
           <li> <Link href={"#"} className='hover:text-white cursor-pointer '>Resume Builder</Link>
        </li>    <li><Link href={"#"} className='hover:text-white cursor-pointer '>AI-Powered Cover Letters</Link></li>
          <li>  <Link href={"#"} className='hover:text-white cursor-pointer '>Interview Prep</Link></li>
             </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
          <p className="text-neutral-400 mb-4">info@example.com</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <IconBrandFacebook className="text-blue-500 hover:text-white" />
            </a>
            <a href="#" aria-label="Twitter">
              <IconBrandTwitter className="text-blue-400 hover:text-white" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <IconBrandLinkedin className="text-blue-300 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
