import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const businessHours = [
  { day: 'Monday', hours: '9:30 a.m.–5 p.m.' },
  { day: 'Tuesday', hours: '9:30 a.m.–5 p.m.' },
  { day: 'Wednesday', hours: '9:30 a.m.–5 p.m.' },
  { day: 'Thursday', hours: '9:30 a.m.–5 p.m.' },
  { day: 'Friday', hours: '9:30 a.m.–5 p.m.' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5C2E2C] to-[#CB9FA5] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Get in touch with us for all your accounting and tax needs
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-[#5C2E2C] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#5C2E2C] mb-2">Address</h3>
                <p className="text-gray-700">4408 97 St NW</p>
                <p className="text-gray-700">Edmonton, AB T6E 5R9</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-[#5C2E2C] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#5C2E2C] mb-2">Phone</h3>
                <p className="text-gray-700">(780) 758-8776</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaClock className="text-[#5C2E2C] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#5C2E2C] mb-2">Business Hours</h3>
                <div className="space-y-2">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between">
                      <span className="text-gray-700 w-32">{schedule.day}</span>
                      <span className="text-gray-700">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.5476972124397!2d-113.4859878!3d53.4847499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a019c8db6f9b8d%3A0x77b8e5f413bd401e!2s4408%2097%20St%20NW%2C%20Edmonton%2C%20AB%20T6E%205R9%2C%20Canada!5e0!3m2!1sen!2s!4v1710437547975!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
