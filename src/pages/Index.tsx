import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Flower, FlowerIcon, Sparkles, Star, Flame } from "lucide-react";

const FallbackIcon = () => (
  <div className="w-10 h-10 bg-pink-300/20 rounded-full animate-pulse"></div>
);

const slides = [
  {
    title: "Fleurs du Monde",
    content: (
      <div className="space-y-4">
        <div className="flex justify-center items-center mb-8">
          <motion.div
            animate={{ 
              rotateZ: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Flower 
              className="w-32 h-32 text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" 
              strokeWidth={1.5} 
            />
          </motion.div>
        </div>
        <h2 className="text-3xl text-center italic font-light tracking-wide text-pink-200 mb-6">
          Un voyage à travers les plus belles fleurs
        </h2>
        <p className="text-xl text-center text-pink-100">
          Découvrez la beauté et l'élégance naturelle à travers notre collection de fleurs extraordinaires
        </p>
      </div>
    ),
    background: "from-purple-900 via-pink-800 to-rose-900"
  },
  {
    title: "Les Roses",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-8">
          <AspectRatio ratio={1/1} className="bg-muted rounded-2xl overflow-hidden">
            <img
              src="https://source.unsplash.com/photo-1496062031456-07b8f162a322"
              alt="Rose rose"
              className="rounded-2xl object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={1/1} className="bg-muted rounded-2xl overflow-hidden">
            <img
              src="https://source.unsplash.com/photo-1548546738-8509cb246ed3"
              alt="Rose rouge"
              className="rounded-2xl object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
        <p className="text-xl text-center mt-8 italic font-light">
          "La rose nous parle de l'amour, c'est le plus beau des symboles."
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <FlowerIcon className="w-10 h-10 text-rose-400" />
          </motion.div>
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 4, 
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <FlowerIcon className="w-10 h-10 text-rose-400" />
          </motion.div>
        </div>
      </div>
    ),
    background: "from-rose-900 via-red-800 to-rose-900"
  },
  {
    title: "Les Tulipes",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-8">
          <AspectRatio ratio={1/1} className="bg-muted rounded-2xl overflow-hidden">
            <img
              src="https://source.unsplash.com/photo-1526047932273-341f2a7631f9"
              alt="Tulipes colorées"
              className="rounded-2xl object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={1/1} className="bg-muted rounded-2xl overflow-hidden">
            <img
              src="https://source.unsplash.com/photo-1519378058457-4c29a0a2efac"
              alt="Tulipes jaunes"
              className="rounded-2xl object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
        <div className="flex justify-center mt-6">
          <motion.div 
            className="p-6 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 backdrop-blur-sm"
            animate={{ 
              boxShadow: [
                "0 0 15px rgba(168, 85, 247, 0.4)", 
                "0 0 25px rgba(168, 85, 247, 0.6)", 
                "0 0 15px rgba(168, 85, 247, 0.4)"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Star className="w-12 h-12 text-yellow-400" />
          </motion.div>
        </div>
        <p className="text-xl text-center italic font-light mt-6">
          "Les tulipes, ambassadrices du printemps, nous émerveillent par leurs couleurs éclatantes."
        </p>
      </div>
    ),
    background: "from-purple-900 via-fuchsia-800 to-violet-900"
  },
  {
    title: "Les Tournesols",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-8">
          <AspectRatio ratio={1/1} className="bg-muted rounded-2xl overflow-hidden">
            <img
              src="https://source.unsplash.com/photo-1597848212624-a19eb35e2651"
              alt="Champ de tournesols"
              className="rounded-2xl object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={1/1} className="bg-muted rounded-2xl overflow-hidden">
            <img
              src="https://source.unsplash.com/photo-1470509037663-253afd7f0f51"
              alt="Tournesol"
              className="rounded-2xl object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
        <p className="text-xl text-center italic font-light mt-8">
          "Comme les tournesols, orientons-nous toujours vers la lumière et la positivité."
        </p>
        <div className="flex justify-center mt-6">
          <motion.div
            animate={{ 
              rotateZ: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl" />
            <Sparkles className="w-16 h-16 text-yellow-400" />
          </motion.div>
        </div>
      </div>
    ),
    background: "from-amber-900 via-yellow-800 to-orange-900"
  },
  {
    title: "Les Orchidées",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-8">
          <AspectRatio ratio={1/1} className="bg-muted rounded-2xl overflow-hidden">
            <img
              src="https://source.unsplash.com/photo-1566907225468-4d63d2716bc3"
              alt="Orchidée blanche"
              className="rounded-2xl object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={1/1} className="bg-muted rounded-2xl overflow-hidden">
            <img
              src="https://source.unsplash.com/photo-1524598231246-a8e7bbbca6c7"
              alt="Orchidée violette"
              className="rounded-2xl object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
        <p className="text-xl text-center italic font-light mt-6">
          "L'orchidée, symbole de raffinement et de délicatesse, révèle la beauté dans sa plus pure expression."
        </p>
        <div className="flex justify-center mt-4">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Flower className="w-12 h-12 text-purple-400" strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    ),
    background: "from-indigo-900 via-purple-800 to-indigo-900"
  },
  {
    title: "Célébration Florale",
    content: (
      <div className="space-y-6 text-center">
        <div className="flex justify-center items-center">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-2xl" />
            <Flower className="text-cyan-300 w-40 h-40" strokeWidth={1} />
          </motion.div>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 text-transparent bg-clip-text">
          La Beauté de la Nature
        </h2>
        
        <p className="text-xl mt-4 text-cyan-100">
          Merci d'avoir exploré avec nous ce magnifique monde floral
        </p>

        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({length: 20}).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 100,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [window.innerHeight, -100],
                x: (Math.random() - 0.5) * 200 + i * (window.innerWidth / 20)
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut"
              }}
            >
              <Sparkles className={`w-${Math.floor(Math.random() * 16) + 8} h-${Math.floor(Math.random() * 16) + 8} text-${['pink', 'cyan', 'purple', 'yellow', 'rose'][Math.floor(Math.random() * 5)]}-${Math.floor(Math.random() * 3) + 3}00`} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 relative z-10">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0
            }}
          >
            <Flame className="text-orange-400 w-20 h-20 drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]" />
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Sparkles className="text-cyan-300 w-20 h-20 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]" />
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Flame className="text-pink-400 w-20 h-20 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
          </motion.div>
        </div>
      </div>
    ),
    background: "from-black via-blue-950 to-purple-900"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      y: 0,
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
      scale: 0.5,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      y: 0,
      opacity: 0,
      rotateY: direction < 0 ? 90 : -90,
      scale: 0.5,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${slides[currentSlide].background}`}>
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <motion.div 
          className="absolute top-10 right-10 text-cyan-300 opacity-50"
          animate={{
            y: [0, 20, 0],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FallbackIcon />
        </motion.div>

        <div className="absolute top-4 right-4">
          <span className="text-white font-mono text-xl bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
        
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full max-w-4xl text-center p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            style={{ perspective: 1000 }}
          >
            <motion.h1 
              className="text-5xl font-bold mb-10 bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent"
              animate={{ scale: [0.9, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.div 
              className="text-xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].content}
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-12 flex justify-center gap-8 relative z-10">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            <ChevronLeft className="mr-2" /> Précédent
          </Button>
          <Button 
            variant="outline" 
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            Suivant <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
