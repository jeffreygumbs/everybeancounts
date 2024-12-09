'use client';

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MotionWrapper from '../components/motion/MotionWrapper';

const testimonials = [
  {
    text: "We are so, so, so happy to have you doing our taxes! Wow – we never in a million years expected that return. It was saved our day. 😊",
    author: "Lindsay and Darrell"
  },
  {
    text: "Thank you very much for the work your firm has done. From the initial consultation to the completion of my corporate year end, I've felt respected and well taken care of. I appreciated the attention to detail and the professional approach. With my previous experience I would not have received should I have done my company's accounting myself. An engaging manner is consistently met & focused to a timely position. Highly recommendable!",
    author: "Amanda Smith, Panorama Decor Ltd."
  },
  {
    text: "The entire team at Every Bean Counts are the your average accounting firm... professionalism and dedication to financial work is proven over in their results. Very few accountants will invest that extra time to ensure your business is in order. The team has been there for me since I started as a new small business owner with diverse needs from book keeping through to corporate taxes, at an individual recurring personal tax return... the team does you feeling confident and secure of your financial matters.",
    author: "Ryan Sales, Accounting Corp."
  },
  {
    text: "We have been very happy working with Every Bean Counts. They deal with matters in a timely manner which we have had trouble with other accounting firms. I really appreciate that they respond to email and justify not API solutions if it has received. Very satisfied!",
    author: "Ross and Simone Moresco, Moresco Consulting Ltd."
  },
  {
    text: "Your office is lovely. It gave me a warm feeling when I walked in. I was very happy with the service I received, you guys know your taxes and professionally solve the issues though its own very cheap. He never rushed me and asked me any questions at all. On my part, there is no comparison. I feel comfortable here, and like the questions they ask me. The work here is done very thoroughly.",
    author: "Muriel Vincent, Director, TTT/XRD Access Ltd. (Landscaping)"
  }
];

const industries = [
  "Employment/Staffing Consultants",
  "Real Estate - Sales and Investors",
  "Shopping Outlets",
  "Solar Power Installation",
  "Medical Professional Corporations",
  "Restaurants and Franchises",
  "Physical Therapy/Chiropractic/Massage",
  "Oilfield Welding",
  "Non-profit organizations",
  "Florists",
  "Long-Haul Trucking",
  "Printing and Manufacturing",
  "Home & Garage Construction",
  "Drilling and Government Drilling",
  "Professional Photography",
  "Staffing Agencies",
  "Accredited Day cares & Dayhomes",
  "Bakeries",
  "Computer stores",
  "Retail and Wholesale Outlets"
];

export default function Testimonials() {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-#5C2E2C to-#CB9FA5 text-white py-20">
        <div className="container mx-auto px-4">
          <MotionWrapper type="fade">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Client Testimonials
            </motion.h1>
            <motion.p 
              className="text-lg text-center max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Below is a partial list of some of the industries that we serve as well as testimonials from our valued clients.
            </motion.p>
          </MotionWrapper>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaQuoteLeft className="text-#5C2E2C text-3xl mb-4" />
              </motion.div>
              <p className="text-gray-700 italic mb-4">&ldquo;Every Bean Counts has been instrumental in helping me understand my business finances better.&rdquo;</p>
              <p className="text-#5C2E2C font-semibold">{testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Industries Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-#5C2E2C mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#EDCFD1',
                  color: '#5C2E2C',
                  transition: { duration: 0.2 } 
                }}
              >
                <p className="text-gray-700">{industry}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p 
            className="text-center mt-8 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our complete client list covers a much wider scope of industries. Our clients range from companies just
            starting out to multi-million dollar corporations. We are the &ldquo;Small Business Specialists&ldquo; in the field of
            accounting and taxes. Let us help you get your accounting in order and we will exceed your high expectations
            in a friendly and professional manner.
          </motion.p>
        </div>
      </div>
    </div>
  );
}