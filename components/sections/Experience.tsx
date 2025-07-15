'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: 'Jan 2023 - Present',
      description: [
        'Developed and maintained 5+ React-based web applications serving 10k+ users',
        'Implemented responsive UI components using React, TypeScript, and Tailwind CSS',
        'Built RESTful APIs with Node.js and Express, improving response times by 40%',
        'Collaborated with cross-functional teams using Agile methodologies',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: 'Jun 2022 - Dec 2022',
      description: [
        'Created responsive web interfaces for e-commerce platform',
        'Optimized application performance, reducing load times by 30%',
        'Integrated third-party APIs and payment gateways',
        'Wrote comprehensive unit tests achieving 85% code coverage',
      ],
      technologies: ['React', 'JavaScript', 'Sass', 'Jest', 'Stripe API'],
    },
    {
      title: 'Junior Developer',
      company: 'WebDev Agency',
      location: 'Austin, TX',
      period: 'Jan 2022 - May 2022',
      description: [
        'Assisted in developing client websites using modern web technologies',
        'Learned best practices for version control and code review processes',
        'Participated in daily standups and sprint planning meetings',
        'Contributed to company coding standards and documentation',
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'Git', 'Figma'],
    },
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hidden md:block transform -translate-x-1/2"></div>

                <div className="glass rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-purple-600 font-semibold mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:text-right text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-purple-600 mr-2 mt-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;