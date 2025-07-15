"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com/FarahNaz1292', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/farahnaz1292', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:farahn1292@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-violet-500 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Farah Naz</h3>
            <p className="text-white mb-4">
              MERN Stack Developer passionate about creating modern web applications 
              that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(social.href, '_blank')}
                    aria-label={social.label}
                    className="hover:bg-purple-800 text-[#4895EF] hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-100">Quick Links</h4>
            <ul className="space-y-2 text-purple-200">
              <li>
                <button
                  onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-pink-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-pink-200 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-pink-200 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-pink-200 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-100">Services</h4>
            <ul className="space-y-2 text-purple-200">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>API Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200"
        >
          <p>&copy; {new Date().getFullYear()} Farah Naz. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}