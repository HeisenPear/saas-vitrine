import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  sector: string;
  result: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Élagage Pro Services',
    sector: 'Élagueur',
    result: '+200% de visibilité locale en 3 mois',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
    link: '/realisations/elagage-pro',
  },
  {
    id: 2,
    title: 'Plomberie Dupont',
    sector: 'Plombier',
    result: '+150% de demandes de devis',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    link: '/realisations/plomberie-dupont',
  },
  {
    id: 3,
    title: 'Boulangerie Artisanale',
    sector: 'Artisan boulanger',
    result: '1ère page Google en 2 mois',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
    link: '/realisations/boulangerie',
  },
  {
    id: 4,
    title: 'Électricité Martin',
    sector: 'Électricien',
    result: '+300% de trafic organique',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop',
    link: '/realisations/electricite-martin',
  },
];

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return projects.length - 1;
      if (nextIndex >= projects.length) return 0;
      return nextIndex;
    });
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Slider */}
      <div className="relative h-[500px] overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              {/* Image */}
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="inline-block px-3 py-1 bg-accent/20 border border-accent rounded-full mb-4">
                  <span className="text-sm text-accent">{currentProject.sector}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  {currentProject.title}
                </h3>
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp size={20} className="text-accent" />
                  <p className="text-lg text-gray-200">{currentProject.result}</p>
                </div>
                <a
                  href={currentProject.link}
                  className="inline-block btn-primary"
                >
                  Voir le cas client
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
          aria-label="Next project"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      {/* Dots Navigation - CORRECTED */}
      <div className="flex items-center justify-center space-x-3 mt-8">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`
              h-3 rounded-full transition-all duration-300
              ${index === currentIndex
                ? 'w-8 bg-primary-500 shadow-lg shadow-primary-500/50'
                : 'w-3 bg-dark-600 hover:bg-dark-500'
              }
            `}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}
