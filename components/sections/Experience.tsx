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
      company: 'Intelliclick Services pvt ltd',
      location: 'Remote',
      period: 'Nov 2024 - Present',
      description: [
        'Developed and maintained a CRM dashboard and improved performance using code splitting, and smart caching',
        'Implemented responsive UI components using React, TypeScript, and Tailwind CSS',
        'Built RESTful APIs, improving response times by 40%',
        'Implemented secure JWT-based login using HTTP-only cookies instead of localStorage',
      ],
      technologies: ['Next.js','React', 'TypeScript','MongoDB', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'Software Developer',
      company: 'FlyingFox Labs Pvt Ltd',
      location: 'Hyderabad, Telangana',
      period: 'Jul 2023 - Aug 2024',
      description: [
        'Built a smooth calendar-based appointment system',
        'Optimized application performance, reducing load times by 30%',
        'Reduced frontend load time by 45% by minimizing payload size and leveraging lazy loading',
        'Optimized MongoDB queries with indexing, reducing data retrieval time by 50%'
      ],
      technologies: ['React', 'JavaScript', 'Tamagui','Next.js', 'Nest.js', 'Keycloak', 'PostgreSQL'],
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
                {/* <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hidden md:block transform -translate-x-1/2"></div> */}
                <div className="absolute left-8 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hidden md:block transform -translate-x-1/2"></div>

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
                      // <li key={idx} className="text-gray-700 flex items-start">
                      //   <span className="text-purple-600 mr-2 mt-2">•</span>
                      //   {item}
                      // </li>
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
                        <span className="text-purple-600 pt-0 text-lg leading-none">•</span>
                        <span>{item}</span>
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