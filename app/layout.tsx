import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Every Bean Counts - Edmonton Accountants',
    template: '%s | Every Bean Counts'
  },
  description: 'Professional accounting services in Edmonton specializing in small business tax, bookkeeping, and financial statements.',
  keywords: ['Edmonton Accountants', 'Small Business Tax', 'Bookkeeping', 'Financial Statements', 'Payroll Services'],
  authors: [{ name: 'Every Bean Counts' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Nav />
        {children}
        <footer className="mt-auto bg-[#5C2E2C] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Company Info */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4">Every Bean Counts</h3>
                <p className="text-gray-300">Taking Care of Our Clients,</p>
                <p className="text-gray-300">One Bean at a Time.</p>
                <p className="mt-4 text-gray-300">(780) 758-8776</p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <nav className="space-y-2">
                  <p><a href="/employment" className="text-gray-300 hover:text-white transition-colors">Employment</a></p>
                  <p><a href="/community" className="text-gray-300 hover:text-white transition-colors">Community</a></p>
                </nav>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-right">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-300">Edmonton, Alberta</p>
                <p className="text-gray-300">Canada</p>
                <p className="mt-4">
                  <a href="mailto:info@everybeancounts.ca" className="text-gray-300 hover:text-white transition-colors">
                    info@everybeancounts.ca
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-center text-gray-300">
                &copy; {new Date().getFullYear()} Every Bean Counts. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
