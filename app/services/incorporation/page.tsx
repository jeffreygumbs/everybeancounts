'use client';

import React from 'react';
import { FaCheckCircle, FaPhone, FaCalculator, FaFileAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MotionWrapper from '../../components/motion/MotionWrapper';
import { scaleOnHover, staggerContainer, cardVariants } from '../../components/motion/variants';

export default function Incorporation() {
  const benefits = [
    "Professional guidance through incorporation process",
    "Analysis of advantages and disadvantages for your situation",
    "Complete handling of all paperwork and filings",
    "Annual returns and corporate filing services",
    "Ongoing support and consultation",
    "Cost-effective incorporation solutions"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5C2E2C] to-[#CB9FA5] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <MotionWrapper type="slide" direction="left" className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Incorporation Services
              </h1>
              <p className="text-xl mb-8">
                Start your business journey with confidence. Expert guidance through every step of the incorporation process.
              </p>
              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 inline-block"
                {...scaleOnHover}
              >
                <p className="text-2xl font-semibold">Starting at only $649.95</p>
              </motion.div>
            </MotionWrapper>
            
            <MotionWrapper type="slide" direction="right" className="flex-1">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/incorporation-hero.jpg"
                  alt="Incorporation Services"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Service Description */}
        <MotionWrapper className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#5C2E2C] mb-6">
            Why Choose Our Incorporation Services?
          </h2>
          <p className="text-gray-700 mb-8">
            Depending on your specific needs, you may want to consider incorporating your business. 
            Every Bean Counts will go through the advantages and disadvantages with you, and then 
            apply them to your situation. Our firm will then help you take care of all of the steps 
            from start to finish. We offer basic incorporation services to new or existing clients of 
            Every Bean Counts Inc. We also offer the filing of annual returns and other necessary 
            corporate filings.
          </p>
        </MotionWrapper>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              {...scaleOnHover}
            >
              <FaCheckCircle className="text-[#5C2E2C] text-2xl mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Consultation CTA */}
          <MotionWrapper type="slide" direction="left">
            <motion.div 
              className="bg-[#5C2E2C] text-white rounded-lg p-8 text-center"
              {...scaleOnHover}
            >
              <FaPhone className="text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Book Your FREE Consultation</h3>
              <p className="mb-6">Call Today to Book Your FREE Initial Consultation</p>
              <motion.a
                href="tel:780-758-8776"
                className="inline-block bg-white text-[#5C2E2C] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                {...scaleOnHover}
              >
                780-758-8776
              </motion.a>
            </motion.div>
          </MotionWrapper>

          {/* Pricing CTA */}
          <MotionWrapper type="slide" direction="right">
            <motion.div 
              className="bg-[#CB9FA5] text-white rounded-lg p-8 text-center"
              {...scaleOnHover}
            >
              <FaCalculator className="text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Affordable Pricing</h3>
              <p className="mb-6">Professional Service at a Reasonable Price!</p>
              <p className="text-2xl font-bold">Starting at $649.95</p>
            </motion.div>
          </MotionWrapper>
        </div>

        {/* Bottom Tagline */}
        <MotionWrapper className="text-center mt-16">
          <p className="text-xl text-gray-700 italic">
            Taking Care of Our Clients, One Bean at a Time.
          </p>
        </MotionWrapper>
      </div>
    </div>
  );
}
