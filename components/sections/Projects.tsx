'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
  
    {
      title: 'AI Knowledge-Base',
      description: 'An AI-powered knowledge management system with natural language search, instant answers, and smart suggestions to streamline support, learning, and documentation access.',
      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1752590283/ai-knowledge-base_bhsxnz.png',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
      github: 'https://github.com/gb-pavan/ai-knowledge-base',
      live: 'https://ai-knowledge-base-lime.vercel.app/',
      featured: true,
    },
    {
      title: 'Appointment Booking System',
      description: 'A responsive scheduling platform with real-time availability, automated reminders, and seamless appointment management for users and providers.',
      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1752590333/Booking-app_ijvttd.png',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      github: 'https://github.com/gb-pavan/booking-app',
      live: 'https://booking-app-ten-topaz.vercel.app/',
      featured: false,
    },
    {
      title: 'Server Less E-Commerce',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1752590336/e-commerce_brq77d.png',
      technologies: ['Next,js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/gb-pavan/server-less-architechture',
      live: 'https://server-less-architechture.vercel.app/',
      featured: true,
    }

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
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`group glass rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white hover:text-gray-900"
                    >
                      <Eye size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white hover:text-gray-900"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div> */}
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 text-sm rounded-md bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white hover:text-gray-900"
                    >
                      <Eye size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 text-sm rounded-md bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white hover:text-gray-900"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>

                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                </div> */}
                <div className="flex space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md px-3 py-1 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white rounded-md px-3 py-1 text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
          </Button>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Projects;