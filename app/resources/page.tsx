'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import MotionWrapper from '../components/motion/MotionWrapper';

export default function Resources() {
  const checklists = [
    { name: 'Year End Corporate Tax Checklist', href: '/resources/year-end-corporate-tax-checklist' },
    { name: 'Bookkeeping Checklist', href: '/resources/bookkeeping-checklist' },
    { name: 'Personal Tax Checklist', href: '/resources/personal-tax-checklist' },
  ]

  const externalResources = [
    { 
      name: 'Canada Revenue Agency',
      description: '(CRA) main page for all tax programs.',
      href: 'https://www.canada.ca/en/revenue-agency.html'
    },
    { 
      name: 'Canadian Business Link',
      description: 'site provides great resources for small businesses.',
      href: 'https://www.canada.ca/en/services/business.html'
    },
    { 
      name: 'Business Development Bank of Canada',
      description: 'site helps small businesses with financing and professional business plans.',
      href: 'https://www.bdc.ca/'
    },
  ]

  const software = [
    { name: 'Sage50 bookkeeping software', href: 'https://www.sage.com/' },
    { name: 'Quickbooks bookkeeping software – desktop and online', href: 'https://quickbooks.intuit.com/ca/' },
  ]

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

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5C2E2C] to-[#5C2E2C]/90 text-white py-20">
        <div className="container mx-auto px-4">
          <MotionWrapper type="fade">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Resources
            </motion.h1>
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-lg">
                Access our comprehensive collection of resources to help you manage your business and personal finances effectively.
              </p>
            </motion.div>
          </MotionWrapper>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Checklists Section */}
            <motion.div 
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-[#5C2E2C] mb-8"
                variants={itemVariants}
              >
                Tax Document Checklists
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {checklists.map((checklist, index) => (
                  <motion.a
                    key={checklist.name}
                    href={checklist.href}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="p-3 bg-[#EDCFD1]/20 rounded-lg group-hover:bg-[#EDCFD1]/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-6 h-6 text-[#5C2E2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-[#5C2E2C] group-hover:text-[#CB9FA5] transition-colors">
                        {checklist.name}
                      </h3>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Medical Expense Section */}
            <motion.div 
              className="mb-16 bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-4">
                Medical Expense Write-offs
              </h2>
              <p className="text-gray-700 mb-4">
                Learn about Health Spending Account options for companies
              </p>
              <motion.a 
                href="#"
                className="text-[#CB9FA5] hover:text-[#5C2E2C] transition-colors font-semibold inline-block"
                whileHover={{ x: 5 }}
              >
                Check out our Health Spending Account page →
              </motion.a>
            </motion.div>

            {/* CRA Apps Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">
                CRA Reminder Apps
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  Help you remember when to make remittances, GST payments, tax instalments, etc.
                </p>
                <motion.a 
                  href="#"
                  className="inline-block bg-[#CB9FA5] text-white px-6 py-2 rounded-lg hover:bg-[#5C2E2C] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CRA Apps
                </motion.a>
              </div>
            </motion.div>

            {/* External Resources */}
            <motion.div 
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-2xl font-bold text-[#5C2E2C] mb-8"
                variants={itemVariants}
              >
                Helpful Links
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {externalResources.map((resource) => (
                  <motion.a
                    key={resource.name}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-lg font-semibold text-[#5C2E2C] mb-2">
                      {resource.name}
                    </h3>
                    <p className="text-gray-700">
                      {resource.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Software Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-2xl font-bold text-[#5C2E2C] mb-8"
                variants={itemVariants}
              >
                Bookkeeping Software
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {software.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex items-center space-x-4"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="p-3 bg-[#EDCFD1]/20 rounded-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg className="w-6 h-6 text-[#5C2E2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#5C2E2C]">
                        {item.name}
                      </h3>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#EDCFD1]/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#5C2E2C] mb-6">Need Help?</h2>
            <p className="text-gray-700 text-lg mb-8">
              Contact us for assistance with any of these resources or to learn more about our services.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-block bg-[#CB9FA5] border-[#CB9FA5] border-2 
                       hover:bg-[#EDCED0] hover:border-[#EDCED0] text-white 
                       font-bold py-3 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}