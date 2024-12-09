'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function YearEndCorporateTaxChecklist() {
  const monthlyRequirements = [
    'The final batch of receipts, invoices and bank statements for the company',
  ];

  const yearlyRequirements = [
    'All receipts, invoices and bank statements for the year',
  ];

  const selfBookkeepingRequirements = [
    'Disks containing your bookkeeping records for the year, and any passwords required to access the information',
    'Last bank statement for the year and bank reconciliation',
    'Copies of your insurance policies for the year',
    'List of capital assets as well as any receipts for assets that have been bought or sold during the year',
    'List of your inventory (if applicable) that you counted at year end – please indicate the date at which the inventory was counted',
    'An accounts receivable listing at year end – please indicate any amounts you feel may not be collectible',
    'An accounts payable listing at year end',
    'Copies of GST Returns for the year',
    'Copies of any loan documents or lease agreements',
  ];

  const allCompaniesRequirements = [
    'Please indicate if there has been a change in the shareholders of the company including percentage ownership of each person and SINs for each person who owns more than 10%',
    'Copy of last years tax return if this is your first year with Every Bean Counts',
    'Certificate of incorporation if you have not already provided one to Every Bean Counts',
    'Subsequent bank statement so we can check if the outstanding cheques or deposits have cleared',
    'Home office expenses – If your company has a home based office please record the square footage used for business purposes as well as total square footage of the home',
    'Mileage amounts that have not yet been recorded in the company\'s bookkeeping for personally owned vehicles that are used for business purposes. Please give only business use portion',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Year End Corporate Tax Checklist</h1>
          <div className="max-w-3xl">
            <p className="text-lg mb-4">
              Please use Every Bean Counts Corporate Tax Checklist to help you in putting together the documents that we will require in order to prepare your Financial Statements and Corporate Tax Return.
            </p>
            <a 
              href="#" 
              className="text-white hover:text-[#CB9FA5] underline"
            >
              Printer Friendly Version
            </a>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Monthly Requirements */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">
                Monthly Requirements
              </h2>
              <p className="text-gray-700 mb-4">
                If Every Bean Counts completes your bookkeeping throughout the year please have the following ready within one month of the company&apos;s yearend date:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {monthlyRequirements.map((req, index) => (
                  <li key={index} className="pl-2">{req}</li>
                ))}
              </ul>
            </motion.div>

            {/* Yearly Requirements */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">
                Yearly Requirements
              </h2>
              <p className="text-gray-700 mb-4">
                If Every Bean Count completes your bookkeeping on a yearly basis please have the following ready within 3 weeks of the company&apos;s yearend date:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {yearlyRequirements.map((req, index) => (
                  <li key={index} className="pl-2">{req}</li>
                ))}
              </ul>
            </motion.div>

            {/* Self Bookkeeping Requirements */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">
                Self Bookkeeping Requirements
              </h2>
              <p className="text-gray-700 mb-4">
                If your company does its own bookkeeping please have the following ready within six weeks of the company&apos;s yearend date:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {selfBookkeepingRequirements.map((req, index) => (
                  <li key={index} className="pl-2">{req}</li>
                ))}
              </ul>
            </motion.div>

            {/* All Companies Requirements */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">
                For ALL Companies
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {allCompaniesRequirements.map((req, index) => (
                  <li key={index} className="pl-2">{req}</li>
                ))}
              </ul>
            </motion.div>

            {/* Guarantee Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#EDCFD1]/20 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-4">Our Guarantee</h2>
              <p className="text-gray-700">
                At Every Bean Counts we guarantee that we will have your financial statements and tax returns completed before the Canada Revenue Agency&apos;s deadline for tax payments and filing, if all applicable records are received by the timelines indicated above and payment is made in full.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-gray-700 mb-4">
                Call <a href="tel:780-758-8776" className="text-[#5C2E2C] font-semibold hover:text-[#CB9FA5]">780-758-8776</a> or email us at{' '}
                <a href="mailto:info@everybeancounts.ca" className="text-[#5C2E2C] font-semibold hover:text-[#CB9FA5]">info@everybeancounts.ca</a>
                {' '}to make an appointment to bring in your yearend records and Annual Return form.
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