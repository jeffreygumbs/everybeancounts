'use client';

import React from 'react';
import { FaChartLine, FaFileAlt, FaCalculator, FaHandshake, FaClock, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaFileAlt className="text-4xl text-[#5C2E2C]" />,
    title: "General Ledger & Financial Statements",
    description: "Comprehensive preparation and management of your general ledger and detailed financial statements."
  },
  {
    icon: <FaChartLine className="text-4xl text-[#5C2E2C]" />,
    title: "Financial Statement Compilation",
    description: "Expert compilation of financial statements to provide accurate insights into your business performance."
  },
  {
    icon: <FaCalculator className="text-4xl text-[#5C2E2C]" />,
    title: "Tax Planning and Advice",
    description: "Strategic tax planning and professional advice to optimize your financial position."
  },
  {
    icon: <FaHandshake className="text-4xl text-[#5C2E2C]" />,
    title: "Custom Accounting Procedures",
    description: "Tailored accounting procedures to meet your specific business needs and requirements."
  }
];

const benefits = [
  {
    icon: <FaClock className="text-3xl text-[#5C2E2C]" />,
    title: "Time Efficiency",
    description: "Save valuable time with our streamlined accounting processes and expert management."
  },
  {
    icon: <FaChartLine className="text-3xl text-[#5C2E2C]" />,
    title: "Business Growth",
    description: "Well-organized financial records to support efficient daily operations and business planning."
  },
  {
    icon: <FaDollarSign className="text-3xl text-[#5C2E2C]" />,
    title: "Cost Effectiveness",
    description: "Competitive pricing with services starting at only $995* for corporate financial statements and tax returns."
  }
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

export default function Accounting() {
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
            Accounting Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-center max-w-3xl mx-auto"
          >
            Professional accounting solutions to drive your business forward
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
            We provide accurate financial information to our clients in a timely manner. Every Bean Counts helps its
            clients to become more efficient, saving them time and money. Well-organized and meaningful accounting
            records ensure that your business can run more efficiently on a daily basis, and also compliment business
            planning.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
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
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-[#5C2E2C] text-center mb-12"
          >
            Why Choose Our Accounting Services?
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

        {/* Additional Services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Additional Services</h2>
          <ul className="space-y-3">
            {[
              "Preparation of T5s, bonuses, and other financial documents",
              "Custom accounting procedures based on your needs"
            ].map((service, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-3"
              >
                <FaCheckCircle className="text-[#5C2E2C]" />
                <span className="text-gray-700">{service}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

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
            Book your FREE initial consultation today and discover how we can help optimize your financial operations.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-[#5C2E2C]">Call Us: (780) 758-8776</p>
            <p className="text-gray-600 italic">Professional Service, at a Reasonable Price!</p>
            <p className="text-gray-600 italic">Taking Care of Our Clients, One Bean at a Time.</p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-500 mt-4"
            >
              * Prices vary depending on complexity and size of file.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
