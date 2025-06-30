"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github, Mail } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y }}
        >
          <motion.h1
            className="text-xl sm:text-3xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                color: [
                  "rgb(var(--primary))",
                  "rgb(var(--secondary))",
                  "rgb(var(--accent))",
                  "rgb(var(--primary))",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Fenadis
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              animate={{
                color: [
                  "rgb(var(--accent))",
                  "rgb(var(--primary))",
                  "rgb(var(--secondary))",
                  "rgb(var(--accent))",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Kalanza
            </motion.span>
          </motion.h1>
          <motion.div
            className="text-xl sm:text-2xl md:text-6xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer ",
                2000,
                "Data Science & Automation Specialist",
                2000,
                "Economist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-accent"
              style={{ color: `rgb(var(--accent))` }}
            />
          </motion.div>
          <motion.p
            className="text-xs md:text-lg mb-10 text-gray-200 text-left sm:text-center sm:text-pretty text-balance w-full max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Looking to turn your idea into a working product, streamline operations through automation, or build a scalable digital solution from the ground up? I deliver solutions that work — whether you need a high-performance web application, a custom Discord bot, a trading automation system, or a full-stack platform powered by intelligent data workflows.
            
            <br /><br />
            
            With over five years of hands-on experience, I've built and deployed a wide range of projects — from full-stack applications and intelligent automation tools to real-time bots and data-driven platforms. I work with technologies such as React, Next.js, Node.js, Python, and Firebase, combining intuitive frontend design with secure, efficient backend architecture.
            
            <br /><br />
            
            Need a bot? I've developed advanced Discord bots for gaming communities, server management, and role-based automation — as well as trading bots that process live data and interact with financial APIs to automate complex strategies. These systems are built to be reliable, scalable, and easy to maintain in both testing and production environments.
            
            <br /><br />
            
            My work also spans data-centric projects, where I design interactive dashboards, visualize insights, implement smart data structures, and build processing pipelines that support real-time analysis and machine learning integration.
            
            <br /><br />
            
            If you're looking for someone who blends automation, data, and software engineering into real-world solutions — let's build something that lasts.
          </motion.p>
          <motion.div
            className="flex justify-center items-center space-x-4 mb-8 w-full flex-wrap gap-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="https://github.com/fenadis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary transition duration-200 hover:-translate-y-2 hover:bg-opacity-80 text-white p-3"
              style={{
                backgroundColor: `rgb(var(--primary))`,
                borderRadius: "8px",
              }}
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/fenadis-kalanza/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary transition duration-200 hover:-translate-y-2 hover:bg-opacity-80 text-white p-3"
              style={{
                backgroundColor: `rgb(var(--primary))`,
                borderRadius: "8px",
              }}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://discordapp.com/users/1087724119400915005"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary transition duration-200 hover:-translate-y-2 hover:bg-opacity-80 text-white p-3"
              style={{
                backgroundColor: `rgb(var(--primary))`,
                borderRadius: "8px",
              }}
            >
              <FaDiscord size={24} />
            </a>
            <a
              href="https://www.reddit.com/user/Ok_Front6388/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary transition duration-200 hover:-translate-y-2 hover:bg-opacity-80 text-white p-3"
              style={{
                backgroundColor: `rgb(var(--primary))`,
                borderRadius: "8px",
              }}
            >
              <FaReddit size={24} />
            </a>
            <a
              href="mailto:fenadiskalanza@gmail.com"
              className="bg-primary transition duration-200 hover:-translate-y-2 text-white p-3"
              style={{
                backgroundColor: `rgb(var(--primary))`,
                borderRadius: "8px",
              }}
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="#contact"
              className="transition duration-200 hover:-translate-y-2 text-white font-bold py-3 px-8 text-lg inline-flex items-center"
              style={{
                backgroundColor: `rgb(var(--primary))`,
                borderRadius: "8px",
              }}
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#skills" className="text-white text-4xl">
          ↓
        </a>
      </motion.div>
    </section>
  );
}
