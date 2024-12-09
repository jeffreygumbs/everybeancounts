'use client';

import React from 'react';
import { FaCalculator, FaFileAlt, FaChartLine, FaCheckCircle, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MotionWrapper from '../../components/motion/MotionWrapper';

const services = [
  {
    icon: <FaCalculator className="text-4xl text-[#5C2E2C]" />,
    title: "Tax Planning for Corporations",
    description: "Strategic tax planning to minimize your current and future tax liabilities while staying compliant with CRA guidelines."
  },
  {
    icon: <FaFileAlt className="text-4xl text-[#5C2E2C]" />,
    title: "Corporate Tax Returns",
    description: "Comprehensive preparation and filing of corporate tax returns with attention to detail and accuracy."
  },
  {
    icon: <FaChartLine className="text-4xl text-[#5C2E2C]" />,
    title: "GST Returns",
    description: "Efficient handling of GST returns to ensure compliance and timely submissions."
  },
  {
    icon: <FaFileAlt className="text-4xl text-[#5C2E2C]" />,
    title: "T4 and T5 Processing",
    description: "Accurate calculations and preparation of T4 and T5 forms for your employees and shareholders."
  }
];

const features = [
  "Up-to-date knowledge of current tax laws and legislation",
  "Notice to Reader financial statement preparation",
  "Key tax planning opportunities identification",
  "Comprehensive corporate tax returns",
  "Financial statement preparation with Notice to Readers",
  "Ongoing tax advisory services"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function CorporateTaxes() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5C2E2C] to-[#CB9FA5] text-white py-20">
        <div className="container mx-auto px-4">
          <MotionWrapper type="fade">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Corporate Taxes and Financial Statements
            </motion.h1>
            <motion.p 
              className="text-lg text-center max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Professional tax services tailored to your business needs, starting at $995*
            </motion.p>
          </MotionWrapper>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Every Bean Counts keeps up-to-date on current tax laws and legislation to provide our clients with
            the taxation expertise and knowledge they deserve. We work with our clients to identify key tax planning
            opportunities to minimize your current and future tax liabilities while staying within the CRA guidelines.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-[#5C2E2C] mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features List */}
        <motion.div 
          className="bg-gray-50 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl font-bold text-[#5C2E2C] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Comprehensive Services Include:
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3"
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FaCheckCircle className="text-[#5C2E2C] flex-shrink-0" />
                </motion.div>
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <motion.h2 
            className="text-2xl font-bold text-[#5C2E2C] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Book your FREE initial consultation today and let us help you optimize your tax strategy.
          </motion.p>
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.p 
              className="text-xl font-semibold text-[#5C2E2C]"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Call Us: (780) 758-8776
            </motion.p>
            <p className="text-gray-600 italic">Professional Service, at a Reasonable Price!</p>
            <p className="text-gray-600 italic">Taking Care of Our Clients, One Bean at a Time.</p>
            <p className="text-sm text-gray-500 mt-4">* Prices vary depending on complexity and size of file.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
