'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

              {/* Address */}
              <div className="flex gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600">
                    <MapPinIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                  <p className="mt-2 text-gray-600">
                    123 Commerce Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <p className="mt-2 text-gray-600">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="mt-2 text-gray-600">
                    support@ecommercepro.com<br />
                    info@ecommercepro.com
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-indigo-50 rounded-xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
