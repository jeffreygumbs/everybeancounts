'use client';

import React from 'react';
import { FaBook, FaChartLine, FaLaptop, FaCheckCircle, FaDollarSign, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaBook className="text-4xl text-[#5C2E2C]" />,
    title: "Organized Bookkeeping",
    description: "We help organize your paperwork and set up efficient bookkeeping systems tailored to your business needs."
  },
  {
    icon: <FaChartLine className="text-4xl text-[#5C2E2C]" />,
    title: "Tax Compliance",
    description: "Using current tax laws, we keep your books in accordance with CRA guidelines while maximizing your write-offs."
  },
  {
    icon: <FaLaptop className="text-4xl text-[#5C2E2C]" />,
    title: "QuickBooks Training",
    description: "Get trained on a system specifically tailored to your business needs with QuickBooks Online integration."
  }
];

const benefits = [
  "Day-to-day bookkeeping management",
  "Bank reconciliations and verification",
  "Custom system setup and training",
  "CRA guideline compliance",
  "Maximized legitimate write-offs",
  "Time-saving automated processes"
];

const pricingDetails = [
  "Starting from $49.95 per hour",
  "Up to $84.95 per hour based on bookkeeper's experience",
  "No monthly contract required",
  "Pay only for what you use",
  "Transparent pricing model",
  "Never be overcharged"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Bookkeeping() {
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
            Bookkeeping Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-center max-w-3xl mx-auto"
          >
            Professional bookkeeping solutions to help your business thrive
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
            Every Bean Counts can help you organize your paperwork and set up your bookkeeping systems. 
            We take care of all your day-to-day bookkeeping, allowing you to focus on other areas of your 
            business for greater profitability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#5C2E2C] mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* QuickBooks Online Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Do Your Own Bookkeeping</h2>
          <p className="text-gray-700 mb-6">
            Want to manage your own books? We'll train you on <Link href="https://quickbooks.intuit.com/ca/" className="text-[#5C2E2C] hover:underline" target="_blank">QuickBooks Online</Link> software 
            to download transactions and perform bank reconciliations. We'll double-check everything to ensure accuracy, 
            saving you time and money. Contact us for a free consultation to see if this option is right for your business.
          </p>
        </motion.div>

        {/* Benefits and Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Our Services Include</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-[#5C2E2C] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Professional Pricing</h2>
            <div className="space-y-4">
              {pricingDetails.map((detail, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <FaDollarSign className="text-[#5C2E2C] flex-shrink-0" />
                  <span className="text-gray-700">{detail}</span>
                </motion.div>
              ))}
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-600 mt-6"
            >
              * Our pricing model takes into account exact number of transactions, complexity of file, and client meeting time.
            </motion.p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-[#5C2E2C] mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Book your FREE initial consultation today and discover how we can streamline your bookkeeping.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-[#5C2E2C]">Call Us: (780) 758-8776</p>
            <p className="text-gray-600 italic">Professional Service, at a Reasonable Price!</p>
            <p className="text-gray-600 italic">Taking Care of Our Clients, One Bean at a Time.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
