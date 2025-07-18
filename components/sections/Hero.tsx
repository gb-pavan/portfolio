'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Pavan Kumar</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-700 mb-8 h-16">
            <TypeAnimation
              sequence={[
              
                'React Specialist',
                2000,
                'Problem Solver',
                2000,
                'Tech Enthusiast',
                2000,
                'AI Enthusiast',
                2000,
                'Excellent Communicator',
                2000,
                'Problem solver',
                2000,
                'Start-to-Finish Ownership',
                2000,
                'Growth Mindset',
                2000,
                'AI-augmented Full Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate developer with 2+ years of experience crafting beautiful, 
          functional web applications. I love turning complex problems into 
          simple, elegant solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          
          <a
            href="mailto:developer.pavan201@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center justify-center border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-sm font-medium rounded-full transition-all duration-300"
          >
            <Download className="mr-2" size={16} />
            Download Resume
          </a>

        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com/gb-pavan', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/pavan-kumar-g-8b7b83371/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:developer.pavan201@gmail.com', label: 'Email' },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-gray-700 hover:text-purple-600 transition-colors duration-300 shadow-lg"
                aria-label={social.label}
              >
                <IconComponent size={24} />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown size={32} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;