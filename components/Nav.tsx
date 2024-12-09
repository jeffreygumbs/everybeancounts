"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/EBC-Logo.svg'
import { links } from '@/lib/data'

function MobileNav({ isOpen }: { isOpen: boolean }) {
  return (
    <div 
      className={`fixed inset-0 bg-white transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out lg:hidden z-50`}
    >
      <div className="flex flex-col h-full p-6">
        <ul className="space-y-6 mt-16">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.url}
                className="text-[#5C2E2C] text-lg hover:text-[#CB9FA5] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-4">
          <a 
            href="/signin"
            className="block w-full bg-[#CB9FA5] border-[#CB9FA5] border-2 hover:bg-[#EDCED0] hover:border-[#EDCED0] text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
          >
            Sign In
          </a>
          <a 
            href="/signup"
            className="block w-full border-2 border-[#CB9FA5] hover:bg-[#CB9FA5] text-[#CB9FA5] hover:text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Every Bean Counts Logo"
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    className="text-[#5C2E2C] hover:text-[#CB9FA5] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <a 
                href="/signin"
                className="bg-[#CB9FA5] border-[#CB9FA5] border-2 hover:bg-[#EDCED0] hover:border-[#EDCED0] text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Sign In
              </a>
              <a 
                href="/signup"
                className="border-2 border-[#CB9FA5] hover:bg-[#CB9FA5] text-[#CB9FA5] hover:text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6 text-[#5C2E2C]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} />
    </nav>
  )
}

export default Nav