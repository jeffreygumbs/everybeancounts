'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BookkeepingChecklist() {
  const checklistItems = [
    'Copy of last year\'s tax return and financial statements or a copy or your electronic bookkeeping file and any passwords needed to access the information',
    'Certificate and Articles of incorporation',
    'Share structure of the company, including percentage ownership of each person and SINs of each person who owns more than 10%',
    'Copies of invoices or a daily summary of income',
    'All bank statements and returned cheques or cheque stubs for the year',
    'Deposit slips or deposit book so that income can be matched with deposits to bank',
    'Capital Asset listing',
    'Expense receipts',
    'Expenses and mileage amounts for company vehicles or for personally owned vehicles that are used for business purposes. Please give both business mileage and personal mileage totals',
    'Statements of source deductions',
    'GST reports for the year',
    'Federal and Alberta notices of assessment that you have received during the year or any new assessments for prior taxation years'
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-[#5C2E2C] to-[#5C2E2C]/90 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Bookkeeping Checklist
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl"
          >
            <p className="text-lg mb-4">
              Below is a list of the information needed in order to complete your bookkeeping. Please review the following and bring in the documentation that applies to your situation.
            </p>
            <a 
              href="#" 
              className="text-white hover:text-[#CB9FA5] underline"
            >
              Printer Friendly Version
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Checklist Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-8">Required Documentation</h2>
              <div className="space-y-4">
                {checklistItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 border-2 border-[#5C2E2C] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#CB9FA5] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 flex-grow">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#EDCFD1]/20 rounded-lg p-8 text-center"
            >
              <p className="text-gray-700 mb-6">
                Call <a href="tel:780-758-8776" className="text-[#5C2E2C] font-semibold hover:text-[#CB9FA5] transition-colors">780-758-8776</a> or email us at{' '}
                <a href="mailto:info@everybeancounts.ca" className="text-[#5C2E2C] font-semibold hover:text-[#CB9FA5] transition-colors">info@everybeancounts.ca</a>
                {' '}to make an appointment to bring in your bookkeeping records and Annual Return form.
              </p>
              <p className="text-gray-700">
                It is a pleasure to be of service to you. We look forward to our continuing relationship with you in helping to bring your business to the next level of success because... Every Bean Counts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}