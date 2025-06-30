'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme, themes } from '../contexts/ThemeContext'
import { Palette } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navOpacity, setNavOpacity] = useState(0.1)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 200;
      const opacity = Math.min((scrollPosition / maxScroll) * 0.4 + 0.1, 0.5);
      setIsScrolled(opacity > 0.1);
      setNavOpacity(opacity);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 md:px-28 pt-4">
      <motion.nav
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-md`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: `rgba(var(--primary), ${navOpacity})`,
          backdropFilter: `blur(${navOpacity * 20}px)`,
          borderRadius: '8px',
          boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-zIwgzWfRPvleL6mONblyc60IKiGKzB.png"
                  alt="Fenadis Kalanza Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-[8px] text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={cycleTheme}
              className="text-white p-2 rounded-[8px] hover:bg-white hover:bg-opacity-20 transition-colors duration-300 mr-2"
              aria-label="Change theme"
            >
              <Palette size={20} />
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden mt-2 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: `rgba(var(--primary), ${navOpacity})`,
            backdropFilter: `blur(${navOpacity * 3}px)`,
            boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(0, 0, 0, 0.1)`,
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

