'use client';

import Image from 'next/image'
import Bannar1 from '@/public/Banner-1.svg'
import backGround from '@/public/background.svg'
import { motion } from 'framer-motion';
import MotionWrapper from './components/motion/MotionWrapper';
import { scaleOnHover, staggerContainer, cardVariants } from './components/motion/variants';
import AnimatedBanner from './components/AnimatedBanner';

export default function Home() {
  const serviceCards = [
    {
      title: "Corporate Taxes",
      description: "Comprehensive corporate tax services tailored to your business needs",
      href: "/services/corporate-taxes"
    },
    {
      title: "Payroll",
      description: "Efficient payroll management and processing services",
      href: "/services/payroll"
    },
    {
      title: "Bookkeeping",
      description: "Detailed and accurate bookkeeping services",
      href: "/services/bookkeeping"
    },
    {
      title: "Accounting",
      description: "Professional accounting services for businesses of all sizes",
      href: "/services/accounting"
    },
    {
      title: "Incorporation",
      description: "Business incorporation and registration services",
      href: "/services/incorporation"
    },
    {
      title: "Personal Taxes",
      description: "Personal tax return preparation and planning",
      href: "/services/personal-taxes"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-white to-[#EDCFD1]/10 pt-24">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper type="slide" direction="left" className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                <span className="text-[#5C2E2C]">Welcome to </span>
                <span className="text-[#EDCFD1]">Every Bean Counts</span>
                <span className="text-[#5C2E2C]">!</span>
              </h1>
              <p className="text-[#5C2E2C] text-lg md:text-xl leading-relaxed">
                We are your Edmonton accountants specializing in small business tax, 
                financial statement preparation, bookkeeping, payroll, private health 
                services plans, and personal tax returns.
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
            </MotionWrapper>
            <MotionWrapper type="slide" direction="right">
              <AnimatedBanner />
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionWrapper className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5C2E2C] mb-8">Latest Updates</h2>
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-[#5C2E2C] mb-2">2023 PERSONAL TAX RETURNS</h3>
              <p className="text-gray-700 mb-4">
                The CRA will begin accepting E-filed personal tax returns as of February 20th, 2024. Your tax returns can be dropped off or submitted online to us as soon as you receive all of your slips, and we will prepare your return ready to submit on the 20th. Tax refunds are normally processed by the CRA within 5 – 10 business days.
              </p>
              <p className="text-gray-700">
                Please note the slight increase in prices for personal tax returns. A basic return starts at $99.95, and business or rental forms on a personal return start at $89.95. Clients with less than $20,000 total income will receive a discounted rate on their invoice.
              </p>
            </motion.div>
          </MotionWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#EDCFD1]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5C2E2C] mb-12">Our Services</h2>
              <p className="text-lg text-[#5C2E2C] max-w-3xl mx-auto">
                At <span className="font-semibold">Every Bean Counts</span> we know how stressful paperwork and taxes can be. We're here to <span className="font-semibold">reduce your stress</span> and help you <span className="font-semibold">focus on what you do best</span>.
              </p>
            </MotionWrapper>

            {/* Service Buttons Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {serviceCards.map((service, index) => (
                <motion.a 
                  key={index}
                  href={service.href} 
                  className="group"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-[#5C2E2C] mb-4 group-hover:text-[#CB9FA5]">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="flex items-center text-[#CB9FA5] group-hover:text-[#5C2E2C]">
                      <span className="text-sm font-semibold">Learn More</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Additional Services List */}
            <MotionWrapper className="mt-16">
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#5C2E2C] mb-6">Additional Services</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#CB9FA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Financial Statement Preparation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#CB9FA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Business Advisory Services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#CB9FA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Private Health Services Plans
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#CB9FA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tax Planning & Consulting
                  </li>
                </ul>
              </motion.div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5C2E2C] mb-12 text-center">What makes Every Bean Counts unique:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#5C2E2C] mb-4">PRICE</h3>
              <p className="text-gray-700">
                Save up to 40% compared to other small and medium-sized accounting firms. At Every Bean Counts we bill based on time, complexity, and work done, using a model that ensures you are never overcharged as you may be with fixed price accountants.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#5C2E2C] mb-4">PRECISION</h3>
              <p className="text-gray-700">
                Every Bean Counts uses a very effective review system. Ensuring the accuracy of our work is of the utmost importance to us.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#5C2E2C] mb-4">PERSONAL SERVICE</h3>
              <p className="text-gray-700">
                Our accountants work directly on your file from start to finish and gain a thorough understanding of your business.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#5C2E2C] mb-4">PROFESSIONALISM</h3>
              <p className="text-gray-700">
                All accountants at Every Bean Counts have been trained extensively to ensure the highest level of professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#5C2E2C] text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-4">780-758-8776</p>
          <p className="text-xl mb-2">Professional Service, at a Reasonable Price!</p>
          <p className="text-lg italic">Taking Care of Our Clients, One Bean at a Time.</p>
        </div>
      </section>
    </>
  );
}
