'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MotionWrapper from '../components/motion/MotionWrapper';

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#EDCFD1]/10 py-20">
        <div className="container mx-auto px-4">
          <MotionWrapper type="fade">
            <div className="max-w-4xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-[#5C2E2C] mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Services
              </motion.h1>
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-lg text-[#5C2E2C] mb-6">
                  At <span className="font-semibold">Every Bean Counts</span> we pride ourselves in providing top quality work at reasonable prices. Our comprehensive accounting procedures and accurate review processes provide unparalleled value to our clients.
                </p>
                <p className="text-lg text-[#5C2E2C]">
                  From start to finish, beginning with incorporation, to the day-to-day bookkeeping and payroll, to filing annual returns and corporate taxes, we are here to provide your business with all of the essentials that it needs to run smoothly and profitably.
                </p>
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6 text-center">Our Pricing</h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Corporate Services",
                    price: "$995",
                    description: "Starting price for financial statements and tax returns"
                  },
                  {
                    title: "Incorporations",
                    price: "$649.95",
                    description: "Starting price"
                  },
                  {
                    title: "Personal Tax Returns",
                    price: "$99.95",
                    description: "Starting price"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-6 bg-[#EDCFD1]/10 rounded-xl"
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-semibold text-[#5C2E2C] mb-4">{item.title}</h3>
                    <p className="text-2xl font-bold text-[#5C2E2C]">{item.price}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Service Cards */}
            {[
              {
                title: "Corporate Taxes",
                description: "Comprehensive corporate tax services tailored to your business needs. We ensure compliance while maximizing your tax efficiency.",
                features: ["Financial Statements", "Tax Planning", "Annual Returns"],
                link: "/services/corporate-taxes"
              },
              {
                title: "Payroll",
                description: "Efficient payroll management and processing services that save you time and ensure accuracy.",
                features: ["Payroll Processing", "Tax Remittances", "Year-end Reporting"],
                link: "/services/payroll"
              },
              {
                title: "Bookkeeping",
                description: "Detailed and accurate bookkeeping services to keep your finances organized and compliant.",
                features: ["Daily Transactions", "Financial Reports", "Account Management"],
                link: "/services/bookkeeping"
              },
              {
                title: "Accounting",
                description: "Professional accounting services for businesses of all sizes, ensuring financial success.",
                features: ["Financial Analysis", "Business Planning", "Financial Planning"],
                link: "/services/accounting"
              },
              {
                title: "Incorporation",
                description: "Expert guidance through the incorporation process, making it simple and hassle-free.",
                features: ["Business Registration", "Corporate Structure", "Legal Compliance"],
                link: "/services/incorporation"
              },
              {
                title: "Personal Taxes",
                description: "Personalized tax preparation and planning services for individuals and families.",
                features: ["Tax Return Filing", "Tax Planning", "Credit Optimization"],
                link: "/services/personal-taxes"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="aspect-w-16 aspect-h-9 bg-[#5C2E2C]/5"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#5C2E2C] mb-4 group-hover:text-[#CB9FA5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6 text-gray-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#CB9FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} className="block">
                    <motion.button 
                      className="w-full bg-[#5C2E2C] text-white py-3 rounded-lg font-semibold hover:bg-[#CB9FA5] transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Focus Section */}
      <section className="py-16 bg-[#EDCFD1]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6 text-center">Our Commitment to You</h2>
              <p className="text-gray-700 mb-6">
                In an effort to help our business clients to save money on their tax preparation services we make an extra effort to evaluate our client's records and then provide them with recommendations for the next year. Our recommendations will make the job more efficient saving you, the client, time and money.
              </p>
              <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-xl font-semibold text-[#5C2E2C]">Contact Us Today</p>
                <motion.p 
                  className="text-lg text-[#5C2E2C] font-bold mt-2"
                  whileHover={{ scale: 1.05 }}
                >
                  780-758-8776
                </motion.p>
                <p className="text-[#5C2E2C] mt-2 italic">Taking Care of Our Clients, One Bean at a Time.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}