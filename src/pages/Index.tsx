
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FallbackIcon = () => (
  <div className="w-10 h-10 bg-cyan-300/20 rounded-full animate-pulse"></div>
);

const slides = [
  {
    title: "Rapport de Stage d'Initiation",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/1483058712412-4245e9b90334"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/1487958449943-2429e8be8625"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <p className="mb-4">
          <strong>Tunisie Télécom – Kasserine</strong>
        </p>
        <p className="mb-2">Dabbabi Chams Eddin</p>
        <p className="mb-2">Encadrant : Mbarki Masoud</p>
        <p>06/01/2025 - 01/02/2025</p>
      </div>
    )
  },
  {
    title: "Remerciements",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/1483058712412-4245e9b90334"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/1487958449943-2429e8be8625"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <p>
          Merci à la direction de Tunisie Télécom et à M. Mbarki Masoud
          <br />
          Merci aux membres du jury pour leur évaluation
        </p>
      </div>
    )
  },
  {
    title: "Remerciements au Jury",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <p className="text-xl text-center mb-6">
          Je tiens à exprimer ma profonde gratitude envers les membres du jury
          pour leur attention bienveillante et leurs précieux conseils lors de
          la présentation de mon rapport de stage.
        </p>
        <p className="text-lg text-center italic">
          Votre écoute attentive et votre engagement ont été des sources 
          d'inspiration et de motivation significatives.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Présentation"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Jury"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
      </div>
    )
  },
  {
    title: "Sommaire",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/1483058712412-4245e9b90334"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/1487958449943-2429e8be8625"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li>Aperçu Général</li>
          <li>Tunisie Télécom</li>
          <li>Centre de Transmission</li>
          <li>Réseau IP</li>
          <li>Conclusion</li>
        </ul>
      </div>
    )
  },
  {
    title: "Aperçu Général",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/1483058712412-4245e9b90334"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/1487958449943-2429e8be8625"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <p>Importance des TIC, rôle stratégique de Tunisie Télécom, objectifs du stage</p>
        <div className="grid grid-cols-2 gap-4">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/488590528505-98d2b5aba04b"
              alt="Technologies de l'information"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/1581091226825-a6a2a5aee158"
              alt="Infrastructure TIC"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
      </div>
    )
  },
  {
    title: "Tunisie Télécom",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/1483058712412-4245e9b90334"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/1487958449943-2429e8be8625"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <p>Historique, évolution, organigramme et fonctionnement des centres</p>
        <div className="grid grid-cols-2 gap-4">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/1483058712412-4245e9b90334"
              alt="Infrastructure Tunisie Télécom"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/1487958449943-2429e8be8625"
              alt="Bâtiment Tunisie Télécom"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
      </div>
    )
  },
  {
    title: "Centre de Transmission",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/1483058712412-4245e9b90334"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/1487958449943-2429e8be8625"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <p>FH vs FO, mécanismes de transfert, connecteurs et modules SFP</p>
        <div className="grid grid-cols-2 gap-4">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/1518770660439-4636190af475"
              alt="Circuit de transmission"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/1531297484001-80022131f5a1"
              alt="Équipement de transmission"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
      </div>
    )
  },
  {
    title: "Réseau IP",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/1483058712412-4245e9b90334"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/1487958449943-2429e8be8625"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <p>Switchs, Routeurs Cisco ASR 9010, Architecture IP à Kasserine</p>
        <div className="grid grid-cols-2 gap-4">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/1461749280684-dccba630e2f6"
              alt="Infrastructure réseau"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/1487058792275-0ad4aaf24ca7"
              alt="Configuration réseau"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
      </div>
    )
  },
  {
    title: "Conclusion Générale",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/1483058712412-4245e9b90334"
            alt="Logo 1"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/1487958449943-2429e8be8625"
            alt="Logo 2"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <p>Expérience professionnelle enrichissante et technique, apprentissage des méthodes réelles</p>
      </div>
    )
  },
  {
    title: "Remerciements Finals",
    content: (
      <div className="space-y-6 text-center">
        <div className="flex justify-between items-center mb-8">
          <img
            src="https://source.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="Logo Entreprise"
            className="w-24 h-24 object-contain rounded-lg"
          />
          <img
            src="https://source.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Logo Université"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">
          Mes Remerciements Sincères
        </h2>
        <p className="text-xl mb-4">
          Un immense merci aux membres du jury pour leur temps, 
          leur attention et leurs précieux conseils.
        </p>
        <p className="text-lg italic text-cyan-200">
          Votre expertise et votre bienveillance ont été essentielles 
          dans mon parcours d'apprentissage.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Présentation"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://source.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Jury"
              className="rounded-lg object-cover w-full h-full transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
      </div>
    )
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-blue-950 to-cyan-900">
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
          <span className="text-cyan-300 font-mono text-xl bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
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
            className="w-full max-w-4xl text-center p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
            style={{ perspective: 1000 }}
          >
            <motion.h1 
              className="text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-300 bg-clip-text text-transparent"
              animate={{ scale: [0.9, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.div 
              className="text-xl text-cyan-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].content}
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-12 flex justify-center gap-8">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="border-cyan-300 text-cyan-300 hover:bg-cyan-900/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            <ChevronLeft className="mr-2" /> Précédent
          </Button>
          <Button 
            variant="outline" 
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className="border-cyan-300 text-cyan-300 hover:bg-cyan-900/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            Suivant <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
