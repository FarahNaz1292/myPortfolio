"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-100" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            Hi, I&apos;m Farah Naz{' '}
                            <span className="bg-gradient-to-r from-purple-900 to-fuchsia-500 bg-clip-text text-transparent">
                                MERN Stack Developer
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg sm:text-xl text-muted-foreground mt-6 max-w-2xl text-center "
                        >
                            Passionate full-stack developer specializing in MongoDB, Express.js, React, Next.js and Node.js.
                            I create modern, scalable web applications that deliver exceptional user experiences.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
                        >
                            <Button onClick={scrollToContact} className="group bg-pink-700 hover:bg-pink-800 text-white">
                                Get In Touch
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            {/* <Button variant="outline" className="group border-violet-400 text-violet-900 hover:bg-violet-400">
                                Download Resume
                                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                            </Button> */}
                            <a href="/assets/resume_farahNaz.pdf" download>
                                <Button variant="outline" className="group border-violet-400 text-violet-900 hover:bg-violet-400">
                                    Download Resume
                                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                                </Button>
                            </a>

                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-[#B5179E] to-[#4361EE] rounded-full blur-3xl absolute -inset-4" />
                            <motion.img
                                src="assets/profilePic.jpeg"
                                alt="Developer"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="w-72 h-72 rounded-full object-cover relative z-10 border-4 border-[#5e60ce] shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}