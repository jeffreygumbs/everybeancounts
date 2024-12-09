'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import MotionWrapper from '../components/motion/MotionWrapper';
import { scaleOnHover } from '../components/motion/variants';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5C2E2C] to-[#5C2E2C]/90 text-white py-20">
        <div className="container mx-auto px-4">
          <MotionWrapper type="slide" direction="left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <div className="max-w-3xl">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Mission Statement</h2>
                <p className="text-lg italic">
                  Our mission is to help our clients take their business to the next level of success through our
                  professional services. We also strive to give back to our community through various
                  philanthropic organizations aiming to improve the lives of others.
                </p>
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Images */}
            <MotionWrapper type="slide" direction="left">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                variants={imageAnimation}
                whileHover="hover"
              >
                <Image
                  src="/aboutImage1.png"
                  alt="Professional Handshake"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </motion.div>
            </MotionWrapper>

            {/* Right Column - Text Content */}
            <MotionWrapper type="slide" direction="right" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-[#5C2E2C] mb-4">About Us: Every Bean Counts</h2>
                <p className="text-gray-700 mb-4">
                  At <span className="font-semibold">Every Bean Counts</span>, we believe that every bean truly does count so we work to make it count for you!
                </p>
                <p className="text-gray-700 mb-4">
                  We are an Edmonton based accounting firm serving clients from Edmonton and across Canada. Serving clients from across the nation is made possible because much of our work is done electronically.
                </p>
                <p className="text-gray-700 mb-4">
                  We use an extensive review process so that your records are kept accurately and no expenses are missing. This helps to maximize your tax savings while staying within CRA&apos;s limits.
                </p>
                <p className="text-gray-700">
                  Our policies and procedures exceed the high standards and expectations that professional accounting firms must abide by thereby making sure that your taxes are filed with the greatest accuracy. We provide top-notch and professional services at reasonable prices to make Every Bean Count for you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-700">
                  Employees of Every Bean Counts spend many hours in training so they might become skilled at what they do and to maximize efficiency, therefore saving you money. A Senior Accountant reviews all work completed by employees for accuracy and completeness.
                </p>
              </motion.div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#EDCFD1]/10">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <h2 className="text-3xl font-bold text-[#5C2E2C] mb-12 text-center">Our Leadership</h2>
          </MotionWrapper>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <motion.div 
                  className="relative"
                  variants={imageAnimation}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <Image
                    src="/Sunni.png"
                    alt="Sunni Stephan"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
                <MotionWrapper className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#5C2E2C]">Sunni Stephan, B.Comm., Owner</h3>
                  <p className="text-gray-700">
                    Sunni is the founder and owner of <span className="font-semibold">Every Bean Counts Inc</span>. Over the years, she has successfully run several businesses and so knows what it takes to be successful. She loves her work and is dedicated to doing it right!
                  </p>
                  <p className="text-gray-700">
                    Sunni has a degree in accounting from the University of Alberta in Edmonton, and has also worked with one of Alberta&apos;s largest Chartered Accounting firms where she gained experience in several areas of tax and business administration.
                  </p>
                  <p className="text-gray-700">
                    With over 14 years of experience in public accounting and additional experience in related work throughout several industries, she knows the processes that are so important to running a healthy and profitable business. Clients are happy to have her educate them on these processes so that they may reduce stress and save money on their tax preparation fees.
                  </p>
                </MotionWrapper>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#5C2E2C] text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-2xl md:text-3xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            780-758-8776
          </motion.p>
          <p className="text-xl mb-2">Professional Service, at a Reasonable Price!</p>
          <p className="text-lg italic">Taking Care of Our Clients, One Bean at a Time.</p>
        </motion.div>
      </section>
    </main>
  );
}