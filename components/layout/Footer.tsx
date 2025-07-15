'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/gb-pavan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pavan-kumar-g-8b7b83371/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:developer.pavan201@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Pavan Kumar</h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionate about creating exceptional web experiences. 
              Always excited to work on innovative projects and collaborate with amazing teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex md:justify-end space-x-4 mb-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target='_blank'
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-300 text-sm">
              developer.pavan201@gmail.com
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by Pavan Kumar
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;