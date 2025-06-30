'use client'

import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { Github, Globe, X } from 'lucide-react'
import EliteGrills from '@/assets/projects/elitegrills.png'
import cmat from '@/assets/projects/cmat.png'
import smartpay from '@/assets/projects/phone app.png'
import yipworks from '@/assets/projects/yipworks.png'

interface Project {
  title: string
  description: string
  image: string | StaticImageData
  tags: string[]
  details: string
  github?: string
  website?: string
}

const projects: Project[] = [
  {
    title: 'Elite Grills',
    description: 'A simple website for Elite Grills built with HTML, CSS, and JavaScript.',
    image: EliteGrills,
    tags: ['html', 'css'],
    details: 'Led the adoption of Micro-Frontend architecture, which resulted in a 30% reduction in development and maintenance time. This project demonstrated skills in modern web architecture, scalability, and improving overall development workflow.',
    github: 'https://github.com/fenadis/elite-grillz',
    website: 'https://elitedentalstudioke.co.ke'
  },
  {
    title: 'Yipworks',
    description: 'Yip Works provides practical, affordable software solutions tailored to the needs of small teams and businesses.',
    image: yipworks,
    tags: ['html', 'css'],
    details: 'The website serves as a platform to promote our services, showcase our work, and help clients establish a strong online presence by streamlining operations, reducing manual tasks, and improving overall business efficiency through custom-built tools.',
    github: 'https://github.com/fenadis/YipWorks',
    website: 'https://yipworks.tech'
  },
  {
    title: 'CLIMATE MONITORING AND ACCOUNTABILITY TOOL',
    description: 'An Climate Monitoring and Accountability Tool built with React,firebase and Tailwind CSS.',
    image: cmat,
    tags: ['React', 'firebase', 'Tailwind,CSS'],
    details: 'A tool that tracks, analyzes, and visualizes climate-related budgets and environmental data to support transparency and accountability in climate action.',
    // github: 'https://github.com/fenadis/CMAT_FRONTEND',
    website: 'https://cmat-frontend.vercel.app/'
  },
  {
    title: 'SMART PAY',
    description: 'SmartPay is a digital platform that simplifies mobile money payments across Africa for individuals and businesses.',
    image: smartpay,
    tags: ['React', '.NET Framework', 'Azure', 'AzureSQL', 'Docker'],
    details: 'The website promotes SmartPay’s mission to power Africa’s digital economy by offering a secure, scalable solution for sending, receiving, and managing money instantly—enhancing financial access and efficiency across the continent.',
   //Github: 'https://github.com/FENADISx/SmartPay',
    website: 'https://www.smartpay.co.ke'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 bg-opacity-30 backdrop-blur-xl overflow-hidden shadow-lg border border-gray-700 hover:border-primary h-full flex flex-col transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              style={{ borderRadius: '8px' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-primary bg-opacity-80 text-white text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.8)` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              </div>
                <div className="flex justify-between items-center p-4">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="text-primary text-sm hover:underline focus:outline-none"
                    style={{ color: `rgb(var(--primary))` }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-800 bg-opacity-90 p-6 rounded-[8px] max-w-2xl w-full m-4 border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="bg-primary bg-opacity-80 text-white text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.8)` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">{selectedProject.details}</p>
              <div className="flex justify-end space-x-4">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                )}
                {selectedProject.website && (
                  <a href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Globe size={24} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

