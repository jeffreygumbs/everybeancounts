'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUserTie, FaMedkit, FaGraduationCap, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

const benefits = [
  {
    icon: <FaBriefcase className="text-3xl text-[#5C2E2C]" />,
    title: "Competitive Wages",
    description: "We offer competitive compensation packages that reflect your skills and experience"
  },
  {
    icon: <FaMedkit className="text-3xl text-[#5C2E2C]" />,
    title: "Private Health Plan",
    description: "Comprehensive health benefits to take care of you and your family"
  },
  {
    icon: <FaGraduationCap className="text-3xl text-[#5C2E2C]" />,
    title: "Professional Growth",
    description: "Gain experience in various aspects of accounting in a supportive environment"
  },
  {
    icon: <FaHandshake className="text-3xl text-[#5C2E2C]" />,
    title: "Friendly Environment",
    description: "Work in a positive, collaborative, and welcoming workplace"
  }
];

const positions = [
  {
    title: "Senior Bookkeeper",
    requirements: [
      "Experience with bookkeeping and accounting principles",
      "Proficiency in QuickBooks Online",
      "Strong attention to detail",
      "Excellent communication skills"
    ]
  }
];

export default function Employment() {
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
            Employment Opportunities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl text-center max-w-3xl mx-auto italic"
          >
            Learn. Grow. Experience.
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Every Bean Counts is always looking for talented individuals! Check our employment opportunities listed
            below to see if we have something that suits your needs.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            className="text-3xl font-bold text-[#5C2E2C] mb-12 text-center"
            variants={itemVariants}
          >
            Why Work With Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#5C2E2C] mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Current Positions Section */}
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
            Current Positions Available
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 mb-8"
              >
                <h3 className="text-2xl font-semibold text-[#5C2E2C] mb-4">{position.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
                <p className="text-gray-700">
                  For this position, we offer competitive wages, a private health plan, a great way to get
                  experience in several different aspects of accounting, and a friendly environment to work in.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-[#5C2E2C] mb-4">Ready to Join Our Team?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Please contact us to learn more about our current opportunities.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-[#5C2E2C]">Call Us: (780) 758-8776</p>
            <p className="text-gray-600 italic">Taking Care of Our Clients, One Bean at a Time.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}