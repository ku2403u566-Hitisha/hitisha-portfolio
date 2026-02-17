import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (imageSrc) => {
    setIsModalOpen(true);
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset selectedImage to index when closing modal
    if (project && project.images && typeof selectedImage === 'string') {
      const index = project.images.indexOf(selectedImage);
      if (index !== -1) {
        setSelectedImage(index);
      }
    }
  };

  const projectData = {
    1: {
      title: 'Chocolate Brand - Logo Design',
      category: 'Featured',
      description: 'Premium chocolate brand logo design with elegant typography and sophisticated visual identity.',
      concept: 'This logo design for a premium chocolate brand combines elegant typography with sophisticated visual elements. The design reflects the luxury and quality associated with high-end chocolate products, using rich colors and refined typography to create a memorable brand identity.',
      style: 'Luxury Branding',
      materials: ['Logo design', 'Brand guidelines', 'Typography system', 'Color palette', 'Packaging concepts'],
      images: ['/logo.pdf']
    },
    2: {
      title: 'Velvet Orchid - Perfume Bottle',
      category: 'Product Design',
      description: 'Elegant perfume bottle design inspired by the sensual elegance of orchid flowers.',
      concept: 'The Velvet Orchid design is inspired by the sensual elegance of the orchid flower—mysterious, graceful, and irresistibly soft. The rich purple tones reflect the depth and luxury of blooming orchids, while the fluid, petal-like forms surrounding the bottle evoke their natural curves. It captures the essence of femininity wrapped in sophistication and quiet power.',
      style: 'Organic Modernism',
      materials: ['Hand-blown glass', 'Brushed gold accents', 'Orchid-inspired stoppers', 'Sustainable packaging', 'Premium fragrance formulation'],
      images: ['/img1.jpeg']
    },
    3: {
      title: 'Tiger Orchid - Perfume Bottle',
      category: 'Product Design',
      description: 'Exotic perfume bottle design inspired by the rare green orchid.',
      concept: 'Tiger Orchid is inspired by the rare green orchid—vibrant, exotic, and full of untamed elegance. The deep green bottle reflects nature\'s richness and quiet strength, while the fresh orchid blooms symbolize vitality and bold individuality. It embodies a wild sophistication, where freshness meets fierce floral intensity.',
      style: 'Wild Sophistication',
      materials: ['Hand-blown glass', 'Green tinted glass', 'Orchid-inspired stoppers', 'Sustainable packaging', 'Natural fragrance formulation'],
      images: ['/img2.jpeg']
    },
    4: {
      title: 'Orchid Collection - Perfume Bottle',
      category: 'Product Design',
      description: 'Elegant perfume bottle design from the complete orchid collection.',
      concept: 'This design explores the organic forms and graceful curves found in orchid blossoms, translating their natural elegance into functional perfume bottle designs. Each piece captures the essence of different orchid varieties while maintaining practical usability.',
      style: 'Organic Modernism',
      materials: ['Hand-blown glass', 'Brushed gold accents', 'Orchid-inspired stoppers', 'Sustainable packaging', 'Premium fragrance formulation'],
      images: ['/img3.jpeg']
    },
    5: {
      title: 'Kerala Nalini - Packaging Design',
      category: 'Packaging Design',
      description: 'Elegant packaging design for Kerala Nalini inspired by lotus ponds and traditional architecture.',
      concept: 'This packaging design for Kerala Nalini is inspired by the serene beauty of Kerala\'s lotus ponds and traditional architecture. The soft sage green background paired with delicate lotus patterns reflects purity, calmness, and natural freshness. The arched window motif evokes temple and heritage structures, adding a sense of cultural richness and authenticity. The blooming pink lotus at the base symbolizes grace and renewal, while the gold accents enhance the premium and elegant feel of the product. Overall, the design communicates tranquility, tradition, and a refreshing floral essence—capturing the spirit of nature in a refined and sophisticated form.',
      style: 'Cultural Heritage',
      materials: ['Premium packaging material', 'Gold foil accents', 'Lotus pattern printing', 'Sage green color palette', 'Architectural motifs', 'Floral illustrations'],
      images: ['/Artboard 3@4x-100.jpg.jpeg']
    }
  };

  const project = projectData[parseInt(id)];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F6F2]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2B2B2B] mb-4">Project not found</h1>
          <Link to="/" className="text-[#C6A969] hover:text-[#2B2B2B] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#F8F6F2]"
    >
      {/* Hero background */}
      <div className="relative h-96 md:h-[400px] overflow-hidden bg-gradient-to-br from-[#EDE6D6]/20 to-[#F8F6F2]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F2]/80 via-transparent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
        >
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#C6A969] text-sm font-medium uppercase tracking-wide">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2B2B2B] mt-2 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-[#2B2B2B]/80 max-w-2xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container-max section-padding">
        <Link to="/#projects" className="inline-flex items-center text-[#2B2B2B]/60 hover:text-[#2B2B2B] mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-8">Project Gallery</h3>
              
              {/* Main Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="aspect-video rounded-xl overflow-hidden mb-8 shadow-xl bg-white"
              >
                {project && project.images && project.images[selectedImage] && project.images[selectedImage].endsWith('.pdf') ? (
                  <div className="p-6">
                    <div className="mb-4 flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-semibold text-[#2B2B2B] mb-1">Logo Design Gallery</h4>
                        <p className="text-[#2B2B2B]/60 text-sm">Click to view full design</p>
                      </div>
                      <a
                        href={project.images[selectedImage]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#C6A969] text-[#2B2B2B] rounded-lg hover:bg-[#2B2B2B] hover:text-[#F8F6F2] transition-colors text-sm font-medium"
                      >
                        View Full PDF
                      </a>
                    </div>
                    <div className="w-full h-80 md:h-96 bg-gradient-to-br from-[#F8F6F2] to-[#EDE6D6]/50 rounded-lg border-2 border-[#EDE6D6]/30 flex items-center justify-center">
                      <iframe
                        src={project.images[selectedImage]}
                        className="w-full h-full rounded-lg"
                        title="Chocolate Brand Logo Design"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative group cursor-pointer" onClick={() => openImageModal(project.images[selectedImage])}>
                    <img 
                      src={project.images[selectedImage]} 
                      alt={`${project.title} - Image ${selectedImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <svg className="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-3 gap-4">
                {project && project.images && project.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-[#C6A969] shadow-lg' 
                        : 'border-transparent hover:border-[#2B2B2B]/30'
                    } bg-white`}
                  >
                    {image && image.endsWith('.pdf') ? (
                      <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-br from-[#F8F6F2] to-[#EDE6D6]/50 rounded-lg border-2 border-[#EDE6D6]/30 flex items-center justify-center">
                          <iframe 
                            src={image} 
                            className="w-full h-full rounded"
                            title="Logo Thumbnail"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative group cursor-pointer" onClick={() => openImageModal(image)}>
                        <img 
                          src={image} 
                          alt={`${project.title} - Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <svg className="w-4 h-4 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Concept Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-6">Design Concept</h3>
              <div className="prose prose-lg text-[#2B2B2B]/80 leading-relaxed">
                <p>{project.concept}</p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-24 space-y-8"
            >
              {/* Style Card */}
              <div className="bg-gradient-to-br from-[#EDE6D6] to-[#EDE6D6]/50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-[#2B2B2B] mb-3">Design Style</h4>
                <p className="text-[#2B2B2B]/80">{project.style}</p>
              </div>

              {/* Materials Card */}
              <div className="bg-gradient-to-br from-[#C6A969]/10 to-[#C6A969]/5 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-[#2B2B2B] mb-4">Materials Used</h4>
                <div className="space-y-2">
                  {project.materials.map((material, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-[#C6A969] rounded-full" />
                      <span className="text-[#2B2B2B]/80 text-sm">{material}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gradient-to-r from-[#2B2B2B] to-[#2B2B2B] p-6 rounded-xl text-center"
              >
                <h4 className="text-lg font-semibold text-[#F8F6F2] mb-3">Interested in this style?</h4>
                <p className="text-[#F8F6F2]/80 text-sm mb-4">
                  Let's discuss how we can bring this aesthetic to your space
                </p>
                <Link
                  to="/#contact"
                  className="inline-block px-6 py-2 bg-[#C6A969] text-[#2B2B2B] rounded-full font-medium hover:bg-[#F8F6F2] transition-colors"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={typeof selectedImage === 'string' ? selectedImage : project.images[selectedImage]}
                  alt={`${project.title} - Full Size`}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectDetail;
