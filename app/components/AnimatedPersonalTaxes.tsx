'use client';

import React from 'react';
import { FaCheckCircle, FaPhone, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AnimatedPersonalTaxesProps {
  services: string[];
}

export default function AnimatedPersonalTaxes({ services }: AnimatedPersonalTaxesProps) {
  return (
    <motion.main 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5C2E2C] to-[#CB9FA5] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Personal Tax Services
              </h1>
              <p className="text-xl mb-8">
                Expert tax preparation and planning services for individuals and families. We help you maximize your returns while ensuring compliance.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 inline-block">
                <p className="text-2xl font-semibold">Starting at only $99.95</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/personal-taxes-hero.jpg"
                  alt="Personal Tax Services"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Service Description */}
        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#5C2E2C] mb-6">
            Expert Tax Solutions
          </h2>
          <p className="text-gray-700 mb-4">
            Our personal tax services are designed to make tax season stress-free. We work with our 
            clients to identify key tax planning opportunities to minimize your current and future tax 
            liabilities and to get you the refund you deserve.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaCheckCircle className="text-[#5C2E2C] text-2xl mb-4" />
              <p className="text-gray-700">{service}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tax Checklist CTA */}
        <motion.div 
          className="bg-gray-50 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#5C2E2C] mb-6">
              Prepare for Tax Season
            </h3>
            <p className="text-gray-700 mb-8">
              Download our personal tax checklist to ensure you have all the documents ready.
            </p>
            <Link href="/resources/personal-tax-checklist" className="inline-flex items-center gap-2 bg-[#5C2E2C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#CB9FA5] transition-colors duration-300">
              Download Tax Checklist
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>

        {/* Contact CTAs */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Consultation CTA */}
          <motion.div 
            className="bg-[#5C2E2C] text-white rounded-lg p-8 text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaPhone className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Book Your FREE Consultation</h3>
            <p className="mb-6">Call Today to Book Your FREE Initial Consultation</p>
            <a
              href="tel:780-758-8776"
              className="inline-block bg-white text-[#5C2E2C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              780-758-8776
            </a>
          </motion.div>

          {/* Value Proposition */}
          <motion.div 
            className="bg-[#CB9FA5] text-white rounded-lg p-8 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaFileAlt className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Professional Service</h3>
            <p className="mb-4">Done Right for a Reasonable Price</p>
            <p className="text-sm">
              Our commitment is to provide professional and accurate tax services at competitive rates
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-700 italic">
            Taking Care of Your Taxes, One Bean at a Time.
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
}
