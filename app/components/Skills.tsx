'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import JS from '@/app/icons/JS'
import TS from '@/app/icons/TS'
import React from '@/app/icons/React'
import Next from '@/app/icons/Next'
import Angular from '@/app/icons/Angular'
import Node from '@/app/icons/Node'
import CSharp from '@/app/icons/CSharp'
import DotNet from '@/app/icons/DotNet'
import ReactNative from '@/app/icons/ReactNative'
import Redux from '@/app/icons/Redux'
import SQL from '@/app/icons/SQL'
import MongoDB from '@/app/icons/MongoDB'
import Firebase from '@/app/icons/Firebase'
// import AWS from '@/app/icons/AWS'
import Azure from '@/app/icons/Azure'
import Docker from '@/app/icons/Docker'
import Kubernetes from '@/app/icons/Kubernetes'
import Shopify from '@/app/icons/Shopify'


interface Skill {
  name: string
  icon: string | React.ReactNode
  description: string
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'cloud' | 'other'
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: <JS />, description: 'Modern JavaScript, including ES6+ features.', category: 'frontend' },
  { name: 'TypeScript', icon: <TS />, description: 'Strong typing for scalable applications.', category: 'frontend' },
  { name: 'React', icon: <React />, description: 'Building interactive user interfaces.', category: 'frontend' },
  { name: 'Next.js', icon: <Next />, description: 'Server-side rendering and static site generation.', category: 'frontend' },
  { name: 'Angular', icon: <Angular />, description: 'Developing robust single-page applications.', category: 'frontend' },
  { name: 'Node.js', icon: <Node />, description: 'Backend development with JavaScript runtime.', category: 'backend' },
  { name: 'C#', icon: <CSharp />, description: 'Object-oriented programming for .NET applications.', category: 'backend' },
  { name: '.NET', icon: <DotNet />, description: 'Framework for Windows and web applications.', category: 'backend' },
  { name: 'React Native', icon: <ReactNative />, description: 'Cross-platform mobile app development.', category: 'mobile' },
  { name: 'Redux', icon: <Redux />, description: 'State management for JavaScript apps.', category: 'frontend' },
  { name: 'SQL', icon: <SQL />, description: 'Database querying and management.', category: 'database' },
  { name: 'MongoDB', icon: <MongoDB />, description: 'NoSQL database for modern applications.', category: 'database' },
  { name: 'Firebase', icon: <Firebase />, description: 'Firebase for real-time database and authentication.', category: 'other' },
  // { name: 'AWS', icon: <AWS />, description: 'Cloud computing services and solutions.', category: 'cloud' },
  { name: 'Azure', icon: <Azure />, description: 'Microsoft\'s cloud computing platform.', category: 'cloud' },
  { name: 'Docker', icon: <Docker />, description: 'Containerization for consistent deployment.', category: 'other' },
  { name: 'Kubernetes', icon: <Kubernetes />, description: 'Containerization for consistent deployment.', category: 'other' },
  { name: 'Shopify', icon: <Shopify />, description: 'Shopify for e-commerce.', category: 'other' }
]

const categories = [
  { name: 'All', icon: '🌟' },
  { name: 'Frontend', icon: '🖥️' },
  { name: 'Backend', icon: '⚙️' },
  { name: 'Mobile', icon: '📱' },
  { name: 'Database', icon: '🗄️' },
  { name: 'Cloud', icon: '☁️' },
  { name: 'Other', icon: '🔧' },
]

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { theme } = useTheme()

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory.toLowerCase())

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills & Technologies</h2>
        
        <motion.div 
          className="mb-8 flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 backdrop-blur-xl ${
                selectedCategory === category.name 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-opacity-70'
              }`}
              style={{ 
                backgroundColor: selectedCategory === category.name 
                  ? `rgb(var(--primary))` 
                  : undefined,
                borderRadius: '8px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="flex flex-col items-center justify-center text-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 group-hover:bg-opacity-70"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-4 transition-all duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-sm text-white">{skill.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
