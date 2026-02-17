import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Chocolate Brand - Logo Design',
      description: 'Premium chocolate brand logo with elegant typography and visual identity',
      category: 'Featured',
      image: '/logo.pdf',
      gallery: ['/logo.pdf'],
      featured: true
    },
    {
      id: 2,
      title: 'Velvet Orchid - Perfume Bottle',
      description: 'Elegant perfume bottle design inspired by the sensual elegance of orchid flowers',
      category: 'Product Design',
      image: '/img1.jpeg',
      gallery: ['/img1.jpeg']
    },
    {
      id: 3,
      title: 'Tiger Orchid - Perfume Bottle',
      description: 'Exotic perfume bottle design inspired by the rare green orchid',
      category: 'Product Design',
      image: '/img2.jpeg',
      gallery: ['/img2.jpeg']
    },
    {
      id: 4,
      title: 'Orchid Collection - Perfume Bottle',
      description: 'Elegant perfume bottle design from the complete orchid collection',
      category: 'Product Design',
      image: '/img3.jpeg',
      gallery: ['/img3.jpeg']
    },
    {
      id: 5,
      title: 'Kerala Nalini - Packaging Design',
      description: 'Elegant packaging design inspired by Kerala\'s lotus ponds and traditional architecture',
      category: 'Packaging Design',
      image: '/Artboard 3@4x-100.jpg.jpeg',
      gallery: ['/Artboard 3@4x-100.jpg.jpeg']
    }
  ];

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background gradient with enhanced effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDE6D6]/20 via-[#F8F6F2] to-[#C6A969]/10" />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#C6A969]/10 to-[#EDE6D6]/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-tl from-[#2B2B2B]/10 to-[#C6A969]/10 rounded-full blur-2xl"
      />
      
      <div className="container-max px-6 md:px-12 lg:px-24 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-8">Portfolio Gallery</h3>
          <span className="bg-gradient-to-r from-[#2B2B2B] via-[#C6A969] to-[#2B2B2B] bg-clip-text text-transparent">
            Portfolio
          </span>
          <motion.p 
            className="text-lg text-[#2B2B2B]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore my design portfolio showcasing product design, brand identity, and packaging concepts
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`relative group cursor-pointer ${project.featured ? 'lg:col-span-2 row-span-2' : ''}`}
            >
              <Link to={`/project/${project.id}`}>
                <motion.div
                  whileHover={{ scale: project.featured ? 1.02 : 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-xl shadow-xl ${project.featured ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}
                >
                  {/* Main project image */}
                  <div className="absolute inset-0">
                    {project.image.endsWith('.pdf') ? (
                      <div className="w-full h-full bg-gradient-to-br from-[#EDE6D6] to-[#C6A969]/30 flex items-center justify-center p-4">
                        <div className="w-full h-full">
                          <iframe 
                            src={project.image} 
                            className="w-full h-full rounded-lg border border-[#EDE6D6]/30"
                            title="Chocolate Brand Logo"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/70 via-[#2B2B2B]/30 to-transparent" />
                      </>
                    )}
                  </div>
                  
                  {/* Enhanced hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-[#C6A969]/50 to-transparent flex items-end"
                  >
                    <div className="p-6 text-[#F8F6F2]">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <h3 className={`${project.featured ? 'text-2xl' : 'text-xl'} font-serif font-bold mb-2`}>{project.title}</h3>
                        <p className={`${project.featured ? 'text-base' : 'text-sm'} mb-3 text-[#F8F6F2]/90 line-clamp-2`}>{project.description}</p>
                        <p className={`${project.featured ? 'text-sm' : 'text-xs'} mb-3 text-[#F8F6F2]/70 line-clamp-2 italic`}>
                          {project.category === 'Featured' && 'Premium chocolate brand with elegant typography'}
                          {project.category === 'Product Design' && project.title.includes('Velvet Orchid') && 'Sensual elegance with purple tones and feminine sophistication'}
                          {project.category === 'Product Design' && project.title.includes('Tiger Orchid') && 'Exotic green orchid with wild sophistication and vitality'}
                          {project.category === 'Product Design' && project.title.includes('Orchid Collection') && 'Organic forms and graceful curves of orchid blossoms'}
                          {project.category === 'Packaging Design' && 'Kerala lotus ponds with traditional architecture and cultural richness'}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-block"
                        >
                          <span className={`text-xs ${project.featured ? 'px-4 py-2' : 'px-3 py-1'} ${project.featured ? 'bg-gradient-to-r from-[#C6A969] to-[#EDE6D6]' : 'bg-[#C6A969]'} text-[#2B2B2B] rounded-full font-medium`}>
                            {project.category}
                          </span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Enhanced floating category badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`absolute top-4 right-4 bg-[#F8F6F2]/90 backdrop-blur-sm ${project.featured ? 'px-4 py-2' : 'px-3 py-1'} rounded-full border border-[#C6A969]/30`}
                >
                  <span className={`${project.featured ? 'text-sm' : 'text-xs'} text-[#2B2B2B] font-medium`}>{project.category}</span>
                </motion.div>
                
                {/* Featured badge for special projects */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-[#C6A969] to-[#EDE6D6] px-3 py-1 rounded-full"
                  >
                    <span className="text-xs text-[#2B2B2B] font-bold">⭐ Featured</span>
                  </motion.div>
                )}
                
                {/* Animated corner decoration */}
                <motion.div
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#C6A969]/50"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
