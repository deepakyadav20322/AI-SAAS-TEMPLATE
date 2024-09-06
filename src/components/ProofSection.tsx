'use client'
import Image from 'next/image'
import { Container } from './Container' 
import React from 'react'
import { motion } from 'framer-motion'
const ProofSection = () => {
  return (
    <Container>
        <motion.div className='flex justify-center items-center my-4'
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
        //  viewport={{ once: true }}
         
         transition={{ duration: 0.8, delay: 0.1 }}
        >
        <Image src="/Images/dashboard.avif" alt="proof" width={500} height={500} className=' w-[95vw] lg:[60vw] md:w-[75vw] aspect-auto  border-neutral-800 border-2 rounded-md ' />
  
        </motion.div>
    </Container>
  )
}

export default ProofSection