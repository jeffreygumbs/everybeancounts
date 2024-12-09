'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PersonalTaxChecklist() {
  const personalInfo = [
    'Copies of your last Notice of Assessment',
    'Any change in marital status with date of change',
    'Any change in address – please update here',
    'If you sold your principle or other residence please list here',
  ];

  const incomeSlips = [
    'T3',
    'T4 (T4A, T4AP, T4A(OAS), T4E, T4RSP, T4RIF)',
    'T5, T5007, T5013, T5018',
    'Receipts for RESP withdrawals under the Home Buyer\'s Plan or Lifelong Learning Plan',
  ];

  const receiptsAndDeductions = [
    'RRSP slips for March - December 2018 and first 60 days of 2019',
    'Tuition form T2202A/TL11',
    'Professional/union dues',
    'Interest on student loans',
    'Childcare expenses',
    'Summer/spring break camp fees',
    'Donations',
    'Political contributions',
    'Medical expenses not reimbursed and/or payments for medical insurance',
    'Moving expenses if you moved for work or school',
    'Tradesperson\'s tools',
    'Educator supplies – total spent out of pocket',
    'Installment payments for income tax',
    'Interest paid on investment income, and investment counsel fees (excluding RRSP investment loans)',
    'Employment Expenses – receipts and form T2200 (Declaration of Conditions of Employment)',
    'First time home buyer (statement of adjustments and transportation)',
    'Northern Residents deduction (address and dates living there needed)',
    'Caregiver amount for in-home care of a parent or infirm dependent with low income',
    'Home Accessibility tax credit – receipts or total spent to make home accessible for disabled resident or over 65 years old, max for stairs',
  ];

  const businessIncome = [
    'If you have a home office - All home expense receipts including utilities, phone, property taxes and mortgage interest or rent, as well as the total square footage of the home and the square footage of the area used for business',
    'A summary or listing of business income. OR all invoices if you need us to do the bookkeeping',
    'A summary of purchases and expenses related to your business - OR head into different accounts such as "Office", "Repairs", "Supplies", etc. OR all receipts if you need EBC to do the bookkeeping',
    'Vehicle expenses including fuel and oil, insurance and registration, repairs and maintenance as well as a description of the vehicle and both the total km driven in the year and the kilometers driven for business purposes. If you have a lease or a loan for the vehicle you will also need to provide this information.',
  ];

  const rentalIncome = [
    'A summary or listing of rental income and expenses by property. OR all receipts if you need us to do the bookkeeping',
    'Repairs and maintenance on the property - please keep repairs that were done while a tenant was living in the unit separate from the repairs done while unit was vacant',
    'Statement of interest paid on the mortgage',
    'Rental agreement with schedule of rent to be paid by tenant',
    'New purchases of appliances, etc. - please indicate when purchased',
    'All receipts for management fees, insurance and other rental related expenses',
    'An explanation for any major repairs to the rental property',
    'Please separate all income and expenses by property',
    'Vehicle expenses including fuel and oil, insurance and registration, repairs and maintenance as well as a description of the vehicle and both the total km driven in the year and the kilometers driven for rental purposes. If you have a lease or a loan for the vehicle you will also need to provide this information.',
  ];

  const dayhomeExpenses = [
    'Please provide a listing of the following items in excel or on paper. OR all receipts if you need EBC to do the bookkeeping for you',
    'All home expense receipts including utilities, phone, property taxes and mortgage interest or rent',
    'Total square footage of the home and also of the areas used for childcare (please indicate if areas are used solely for dayHome or if they are shared areas)',
    'Vehicle expenses including fuel and oil, insurance and registration, repairs and maintenance as well as a description of the vehicle and both the total km driven in the year and the kilometers driven for dayHome purposes',
    'Hours open for business per month (24 hrs) - min ratio/maximum of $4 or $5 for each child/day (ie. you had 2 children come to your home for a month (21 days) - min ratio/maximum amount would be 21 X $4 = $105)',
    'Purchases of toys and other materials for dayHome use',
    'All income received in the year',
  ];

  const employmentExpenses = [
    'If you have a home office - All home expense receipts including utilities, phone, property taxes and mortgage interest or rent, as well as the total square footage of the home and the square footage of the area used for earning employment income',
    'A summary of purchases and expenses related to your employment - prepared into different accounts such as "Office", "Repairs", "Supplies", etc. OR all receipts if you need EBC to do the bookkeeping',
    'Vehicle expenses including fuel and oil, insurance and registration, repairs and maintenance as well as a description of the vehicle and both the total km driven in the year and the kilometers driven for business purposes. If you have a lease or a loan for the vehicle you will also need to provide this information.',
    'Form T2200 - Declaration of Conditions of Employment, filled out by your employer',
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
            Personal Tax Checklist
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl"
          >
            <p className="text-lg mb-4">
              Below is a list of the information needed in order to prepare your personal income taxes. Please review the following and bring in the documentation that applies to your situation.
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
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Personal Information */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Personal Information</h2>
              <div className="space-y-4">
                {personalInfo.map((item, index) => (
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

            {/* Income Slips */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Income Slips</h2>
              <div className="space-y-4">
                {incomeSlips.map((item, index) => (
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

            {/* Receipts and Deductions */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Receipts for Credits and Deductions</h2>
              <div className="space-y-4">
                {receiptsAndDeductions.map((item, index) => (
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

            {/* Business Income */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Business Income and Expenses</h2>
              <div className="space-y-4">
                {businessIncome.map((item, index) => (
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

            {/* Rental Income */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Rental Related Income and Expenses</h2>
              <div className="space-y-4">
                {rentalIncome.map((item, index) => (
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

            {/* Dayhome Expenses */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Dayhome Related Expenses</h2>
              <div className="space-y-4">
                {dayhomeExpenses.map((item, index) => (
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

            {/* Employment Expenses */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#5C2E2C] mb-6">Employment Related Expenses</h2>
              <div className="space-y-4">
                {employmentExpenses.map((item, index) => (
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
              <p className="text-gray-700 mb-4">
                If you have any questions on the above or any other matter, feel free to contact us at{' '}
                <a href="tel:780-758-8776" className="text-[#5C2E2C] font-semibold hover:text-[#CB9FA5] transition-colors">780-758-8776</a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
