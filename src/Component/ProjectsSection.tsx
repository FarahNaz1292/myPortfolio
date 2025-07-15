"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Donation Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: "https://i.imgur.com/czociN6.jpg",
    technologies: ['React', 'Node.js', 'MongoDB', 'Javascript'],
    liveDemo: "https://donationprojectfarah.netlify.app",
    github: 'https://github.com/FarahNaz1292/donationFrontEnd.git',
  },
  {
    id: 2,
    title: 'E-Commerce App',
    description: 'Shows implementation of DOM Manipulation using Javascript.',
    image: "https://i.imgur.com/wuOHTsx.png",
    technologies: ['HTML', 'CSS', 'DOM Manupulation', 'JavaScript'],
    liveDemo: "https://summer-sale-app200.netlify.app/",
    github: 'https://github.com/FarahNaz1292/My-shoppingPage/blob/main/index.html',
  },
  {
    id: 3,
    title: 'Recruiting App',
    description: 'Recruiting Companies for social media management with Job descriptions and job application process knowlegde.',
    image: "https://i.imgur.com/JZYuVF5.png",
    technologies: ['React', 'React Router DOM', 'Tailwind CSS'],
    liveDemo: 'https://recruitingapp.netlify.app/',
    github: 'https://github.com/FarahNaz1292/recruitingapp',
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Educational platform with course management, progress tracking, and interactive learning modules.',
    image: "https://i.imgur.com/ADnYmOq.png",
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'AWS'],
    liveDemo: 'https://www.bootcampshub.ai/',
    github: 'https://github.com/FarahNaz1292/ms-new-student-portal',
  },
  {
    id: 5,
    title: ' Job Placement Platform',
    description: 'Job Placement platform with advanced search, pricing, and job placement system.',
    image: 'https://i.imgur.com/2LMLHYK.png',
    technologies: ['Next.js', 'Express.js', 'MongoDB', 'TypeScript'],
    liveDemo: 'https://high-paid-jobs.netlify.app/',
    github: 'https://github.com/FarahNaz1292/high-paid-jobs-app',
  },
  {
    id: 6,
    title: 'Bike Store App',
    description: 'Mobile-first bike shop platform with real-time tracking, payment processing, and warehouse management.',
    image: 'https://i.imgur.com/DHxBpoO.png',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Material UI'],
    liveDemo: 'https://bike-project-client.vercel.app/',
    github: 'https://github.com/FarahNaz1292/bikeProjectBackend',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-900">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden border-purple-200">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    width={240}
                    height={160}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="bg-purple-800 hover:bg-pink-700 text-white"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 text-purple-800 border-pink-700 hover:bg-white"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-100 text-[#4895EF] text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}