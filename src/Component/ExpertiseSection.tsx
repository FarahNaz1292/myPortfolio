"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Server, Globe, Code, Smartphone, Cloud } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Globe,
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript, Tailwind CSS, and modern JavaScript frameworks for creating responsive UIs.',
    color: 'pink-600',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Node.js, Express.js, RESTful APIs and server-side architecture design.',
    color: 'pink-600',
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'MongoDB, Mongose MySQL, database design, optimization, and data modeling.',
    color: 'pink-600',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, CI/CD pipelines, deployment automation, and cloud infrastructure.',
    color: 'pink-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, responsive design, PWA development, and mobile-first approaches.',
    color: 'pink-600',
  },
  {
    icon: Code,
    title: 'Full-Stack Integration',
    description: 'End-to-end application development, API integration, and seamless user experiences.',
    color: 'pink-600',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-800">Expertise Areas</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core technologies and skills I use to build modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 group border-purple-100">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${area.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${area.color} group-hover:text-white transition-all duration-300`}>
                    <area.icon className={`h-6 w-6 text-${area.color} group-hover:text-white`} />
                  </div>
                  <CardTitle className="text-xl text-purple-800 group-hover:text-pink-700 transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}