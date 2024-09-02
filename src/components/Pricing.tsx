'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import  {pricingPlanData}  from  '@/constants/PricingPlanData'


const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Simple Pricing</h1>
      <p className="text-center text-neutral-400 mb-8">
        Simple pricing for startups, small businesses, medium scale businesses, and enterprises.
      </p>

      <div className="flex justify-center mb-8">
        <label className="flex items-center space-x-3 cursor-pointer">
          <span className={` ${billingCycle=='monthly'?'text-white':"text-neutral-400"}`}>monthly</span>
          <input
            type="checkbox"
            className="hidden"
            checked={billingCycle === "yearly"}
            onChange={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          />
          <div className="w-14 h-8 flex items-center bg-gray-700 rounded-full p-1">
            <div className={`w-6 h-6 bg-gray-300 rounded-full shadow-md transform ${billingCycle === "yearly" ? "translate-x-6" : ""} transition-transform duration-300 ease-in-out`}></div>
          </div>
          <span className={` ${billingCycle=='yearly'?'text-white':"text-neutral-400"}`}>yearly</span>
        </label>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {pricingPlanData.map((plan, index) => (
          <motion.div
            key={index}
            className={`bg-neutral-900 p-8 rounded-lg shadow-lg text-left border-[1px] border-neutral-700 ${plan?.name=='Pro'?"border-2 border-primary":''} ${index === 2 ? "shadow-2xl scale-105" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
            <p className="text-neutral-400 mb-4 font-semibold text-lg">{billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}</p>
            <p className="text-white mb-6">{plan.description}</p>
            <ul className="text-neutral-400 mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-start space-x-2 text-sm">
                  <span>✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-2 rounded ${plan.buttonClass}`}>
              {plan.buttonLabel}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
