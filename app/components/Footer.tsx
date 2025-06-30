'use client'

import { Github } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'

export default function Footer() {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-lg shadow-lg border border-primary border-opacity-20 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ borderColor: `rgba(var(--primary), 0.2)`, borderRadius: '8px' } }
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white">&copy; {currentYear} Fenadis Kalanza. All rights reserved.</p>
              <p className="text-sm text-gray-400 mt-1">Licensed under the Apache-2.0 License.</p>
            </div>
            <div className="flex items-center">
              <Link 
                href="https://github.com/fenadis"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                style={{ '--hover-color': `rgb(var(--primary))` } as React.CSSProperties}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={24} />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

