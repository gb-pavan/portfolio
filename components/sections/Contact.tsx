'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'developer.pavan201@gmail.com',
      href: 'mailto:developer.pavan201@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8019381902',
      // href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Khammam, Telangana, India',
      href: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 glass rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Fast and reliable communication
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Modern, scalable solutions
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Dedicated to your success
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    {...register('name')}
                    placeholder="Your Name"
                    className="w-full"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  {...register('subject')}
                  placeholder="Subject"
                  className="w-full"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  {...register('message')}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <Loader className="mr-2 animate-spin" size={20} />
                ) : (
                  <Send className="mr-2" size={20} />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;