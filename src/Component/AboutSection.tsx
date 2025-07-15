"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-violet-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-800">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey and expertise in web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-violet-400 hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-purple-800">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 3 years of experience in frontend development, I specialize in building user-friendly, modern web applications. I’ve also gained backend experience, allowing me to approach development with a full-stack mindset.
                </p>
                <p>
                  In my journey as a Full Stack Developer, I&apos;ve mastered the MERN stack — MongoDB for scalable and flexible data management, Express.js for building efficient APIs and server-side logic, React.js for crafting responsive and dynamic user interfaces, and Node.js for developing robust and high-performance backend systems. This holistic approach to development enables me to build applications that are not only visually compelling but also structurally sound and scalable.
                </p>
                <p>
                  I&apos;m passionate about staying current with the latest web technologies. I regularly read industry blogs, share insights on social media, and build side projects to experiment and grow as a developer.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-120 h-80 bg-gradient-to-br from-purple-100/60 to-purple-200/60 rounded-lg absolute -inset-4" />
              <Image
                src="https://t4.ftcdn.net/jpg/03/74/71/11/240_F_374711172_ybRK8WqLudSQrH2GpODH5bR1OkbRYdbN.jpg"
                alt="About me"
                className="w-100 h-96 rounded-lg object-cover relative z-10 shadow-2xl border-2 border-violet-300"
                width={240} 
                height={160} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}