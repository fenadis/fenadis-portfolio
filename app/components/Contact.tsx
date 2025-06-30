'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formState)
    // Reset form after submission
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Updated padding */}
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Get In Touch</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 focus:ring-primary focus:border-primary text-white"
              required
              style={{ '--tw-ring-color': `rgb(var(--primary))`, borderRadius: '8px' } as React.CSSProperties}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-primary focus:border-primary text-white"
              required
              placeholder="fenadiskalanza@gmail.com"
              style={{ '--tw-ring-color': `rgb(var(--primary))`, borderRadius: '8px' } as React.CSSProperties}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-primary focus:border-primary text-white"
              rows={4}
              required
              style={{ '--tw-ring-color': `rgb(var(--primary))`, borderRadius: '8px' } as React.CSSProperties}
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full px-5 py-3 text-white bg-primary hover:bg-opacity-80 rounded-lg focus:ring-4 focus:ring-primary font-medium transition-colors duration-300"
            style={{ backgroundColor: `rgb(var(--primary))`, borderRadius: '8px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

