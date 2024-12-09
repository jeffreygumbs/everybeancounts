import React from 'react';
import { FaCheckCircle, FaPhone, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { MotionDiv } from '../../components/motion/MotionDiv';

export default function PersonalTaxes() {
  const services = [
    "Basic Individual tax returns",
    "Tax planning and advice for individuals",
    "Business schedules for unincorporated businesses",
    "Rental schedules",
    "Capital Gains and losses calculations",
    "Calculation of pension splitting, tuition credits/transfers, and MORE!"
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5C2E2C] to-[#CB9FA5] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <MotionDiv 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Personal Tax Services
              </h1>
              <p className="text-xl mb-8">
                Expert tax solutions tailored to your individual needs, ensuring you get the refund you deserve.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 inline-block">
                <p className="text-2xl font-semibold">Starting at only $99.95</p>
              </div>
            </MotionDiv>
            <MotionDiv 
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
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Service Description */}
        <MotionDiv 
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#5C2E2C] mb-6">
            Expert Tax Solutions
          </h2>
          <p className="text-gray-700 mb-8">
            Every Bean Counts keeps up-to-date on current tax laws and legislation in order to provide 
            our clients with the taxation expertise and knowledge that they deserve. We work with our 
            clients to identify key tax planning opportunities to minimize your current and future tax 
            liabilities and to get you the refund you deserve.
          </p>
        </MotionDiv>

        {/* Services Grid */}
        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaCheckCircle className="text-[#5C2E2C] text-2xl mb-4" />
              <p className="text-gray-700">{service}</p>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Tax Checklist CTA */}
        <MotionDiv 
          className="bg-gray-50 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#5C2E2C] mb-6">
              Prepare for Tax Season
            </h3>
            <Link 
              href="/resources/personal-tax-checklist"
              className="inline-flex items-center gap-2 bg-[#5C2E2C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a2523] transition-colors duration-300"
            >
              <FaFileAlt />
              Download Our Personal Tax Checklist
              <FaArrowRight />
            </Link>
          </div>
        </MotionDiv>

        {/* Contact CTAs */}
        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Consultation CTA */}
          <MotionDiv 
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
              className="inline-block bg-white text-[#5C2E2C] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              780-758-8776
            </a>
          </MotionDiv>

          {/* Value Proposition */}
          <MotionDiv 
            className="bg-[#CB9FA5] text-white rounded-lg p-8 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaFileAlt className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Professional Service</h3>
            <p className="mb-4">Done Right for a Reasonable Price</p>
            <p className="text-2xl font-bold">Starting at $99.95</p>
          </MotionDiv>
        </MotionDiv>

        {/* Bottom Tagline */}
        <MotionDiv 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-700 italic">
            Taking Care of Your Taxes, One Bean at a Time.
          </p>
        </MotionDiv>
      </div>
    </main>
  );
}
