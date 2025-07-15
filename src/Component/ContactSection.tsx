"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import  emailjs  from '@emailjs/browser';



export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


const SERVICE_ID = 'service_oab9k5h';
const TEMPLATE_ID = 'template_ei62bvn';
const PUBLIC_KEY = '1WhfUKAtZ1Nq4qI1f';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    user_name: formData.name,
    user_email: formData.email,
    message: formData.message,
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    toast.error('Failed to send message. Please try again.');
    console.error('EmailJS Error:', error);
  }

  setIsSubmitting(false);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-900">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-900">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-pink-700">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-pink-700">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-pink-700">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <Button
                  onClick={handleSubmit}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-violet-500 to-purple-700 text-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-purple-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-800">Email</p>
                    <p className="text-muted-foreground">farahn1292@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-800">Phone</p>
                    <p className="text-muted-foreground">+1 (347) 993-2687</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-800">Location</p>
                    <p className="text-muted-foreground">Queens, NY</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-800">Let&apos;s Build Something Great</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I&apos;m always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific idea in mind or need guidance on your next web application, 
                  I&apos;m here to help bring your vision to life.
                </p>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours and offer free initial consultations 
                  to discuss your project requirements.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}