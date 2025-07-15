"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Settings, 
  Zap 
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Full-stack web applications using MERN stack with modern best practices and scalable architecture.',
    color: 'pink-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design approach creating intuitive interfaces with excellent user experience.',
    color: 'pink-600',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization for high-performance data management.',
    color: 'pink-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native and responsive web technologies.',
    color: 'pink-600',
  },
  {
    icon: Settings,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs with proper authentication, validation, and documentation.',
    color: 'pink-600',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Application optimization for speed, SEO, and user experience across all devices.',
    color: 'pink-600',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-900">Services I Provide</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 group hover:-translate-y-1 border-purple-200">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${service.color} group-hover:text-white transition-all duration-300`}>
                    <service.icon className={`h-6 w-6 text-${service.color} group-hover:text-white`} />
                  </div>
                  <CardTitle className="text-xl text-purple-800 group-hover:text-pink-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}