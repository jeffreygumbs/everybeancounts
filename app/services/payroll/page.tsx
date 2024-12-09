'use client';

import React from 'react';
import { FaUserFriends, FaCalculator, FaFileAlt, FaMedkit, FaClock, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const payrollServices = [
  {
    icon: <FaUserFriends className="text-4xl text-[#5C2E2C]" />,
    title: "CRA Payroll Account Setup",
    description: "Complete setup of Canada Revenue Agency payroll accounts and employee accounts with proper documentation and registration."
  },
  {
    icon: <FaCalculator className="text-4xl text-[#5C2E2C]" />,
    title: "ROE Services",
    description: "Efficient processing and management of Record of Employment (ROE) documentation for your employees."
  },
  {
    icon: <FaFileAlt className="text-4xl text-[#5C2E2C]" />,
    title: "T4 and T5 Preparation",
    description: "Accurate and timely preparation of T4s and T5s for employees and contractors."
  },
  {
    icon: <FaMedkit className="text-4xl text-[#5C2E2C]" />,
    title: "Private Health Services Plan",
    description: "Setup and administration of Private Health Services Plans for your employees' benefits."
  }
];

const benefits = [
  {
    icon: <FaClock className="text-3xl text-[#5C2E2C]" />,
    title: "Time-Saving",
    description: "Free up valuable time to focus on growing your business while we handle your payroll needs."
  },
  {
    icon: <FaCalculator className="text-3xl text-[#5C2E2C]" />,
    title: "Accuracy",
    description: "Ensure precise calculations and timely submissions of all payroll-related documentation."
  },
  {
    icon: <FaShieldAlt className="text-3xl text-[#5C2E2C]" />,
    title: "Compliance",
    description: "Stay compliant with all CRA regulations and requirements for payroll management."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Payroll() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#5C2E2C] to-[#CB9FA5] text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Payroll Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-center max-w-3xl mx-auto"
          >
            Efficient and reliable payroll solutions for growing businesses
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            As your business grows, it is inevitable that you will hire more employees. Every Bean Counts can assist you
            in developing an effective payroll system that is reliable and efficient, saving you time and effort. Our firm
            can help perform your payroll tasks in a timely and accurate manner.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {payrollServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#5C2E2C] mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-lg p-12 mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-[#5C2E2C] text-center mb-12"
          >
            Why Choose Our Payroll Services?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#5C2E2C] mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-[#5C2E2C] mb-4">Ready to Streamline Your Payroll?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Book your FREE initial consultation today and discover how we can help manage your payroll efficiently.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-[#5C2E2C]">Call Us: (780) 758-8776</p>
            <p className="text-gray-600 italic">Small Business Solutions</p>
            <p className="text-gray-600 italic">Taking Care of Our Clients, One Bean at a Time.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
