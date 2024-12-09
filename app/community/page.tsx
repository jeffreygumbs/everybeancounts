'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRecycle, FaLightbulb, FaTree, FaHandHoldingHeart, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const environmentalSteps = [
  { icon: <FaRecycle />, text: "Recycling all plastics, cardboards, bottles and cans, and non-confidential papers" },
  { icon: <FaRecycle />, text: "Recycling bins used at all workstations" },
  { icon: <FaLightbulb />, text: "Computers and monitors turned off at night" },
  { icon: <FaRecycle />, text: "Use of recycled office supplies when available and appropriate" },
  { icon: <FaLightbulb />, text: "Implementation of Paperless Office Program, printing only when necessary" },
  { icon: <FaLightbulb />, text: "Use of energy efficient or Energy Star products when possible" },
  { icon: <FaTree />, text: "Planting trees to give back to the environment" }
];

export default function Community() {
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
            Environmental & Community Initiatives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-center max-w-3xl mx-auto"
          >
            Making a positive impact on our environment and community
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Environmental Initiatives Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#5C2E2C] mb-8 text-center"
          >
            Environmental Initiatives
          </motion.h2>
          
          <motion.p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            While Every Bean Counts is already an environmentally friendly company, with very little printing, refuse
            production or utility usage, we strive to give back to the environment through the following steps:
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {environmentalSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-[#5C2E2C] text-xl">{step.icon}</span>
                <p className="text-gray-700">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Community Initiatives Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#5C2E2C] mb-8 text-center"
          >
            Community Initiatives
          </motion.h2>

          <motion.div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-gray-700 mb-8">
              Every Bean Counts is committed to actively supporting our communities because there is great need for
              both financial and volunteer support from the business community. Therefore we proudly donate a portion
              of net income back to various local charities. We also donate to some international charities and
              organizations that we find particularly impressive.
            </p>
            
            <p className="text-gray-700 mb-8">
              After researching various organizations, Every Bean Counts chooses one or two charities each year to
              donate its time and money to.
            </p>

            <h3 className="text-xl font-semibold text-[#5C2E2C] mb-4">Currently Supporting:</h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h4 className="font-semibold text-[#5C2E2C] mb-2">Hope Mission</h4>
                <p className="text-gray-700">
                  A local charity that supports the homeless and less advantaged through shelters, food,
                  and various community programs.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h4 className="font-semibold text-[#5C2E2C] mb-2">Plan International</h4>
                <p className="text-gray-700">
                  An international charity dedicated to equal education for girls abroad. The result is
                  that there is less violent conflict, underage marriages, and trafficking of young girls.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="space-y-2">
            <p className="text-xl font-semibold text-[#5C2E2C]">Call Us: (780) 758-8776</p>
            <p className="text-gray-600 italic">Environmentally Responsible, Community Oriented.</p>
            <p className="text-gray-600 italic">Taking Care of Our Clients, One Bean at a Time.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}