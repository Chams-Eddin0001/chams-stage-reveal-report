
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Rapport de Stage d'Initiation",
    content: (
      <>
        <p className="mb-4">
          <strong>Tunisie Télécom – Kasserine</strong>
        </p>
        <p className="mb-2">Dabbabi Chams Eddin</p>
        <p className="mb-2">Encadrant : Mbarki Masoud</p>
        <p>06/01/2025 - 01/02/2025</p>
      </>
    )
  },
  {
    title: "Remerciements",
    content: (
      <p>
        Merci à la direction de Tunisie Télécom et à M. Mbarki Masoud
        <br />
        Merci aux membres du jury pour leur évaluation
      </p>
    )
  },
  {
    title: "Sommaire",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Aperçu Général</li>
        <li>Tunisie Télécom</li>
        <li>Centre de Transmission</li>
        <li>Réseau IP</li>
        <li>Conclusion</li>
      </ul>
    )
  },
  {
    title: "Aperçu Général",
    content: (
      <p>Importance des TIC, rôle stratégique de Tunisie Télécom, objectifs du stage</p>
    )
  },
  {
    title: "Tunisie Télécom",
    content: (
      <p>Historique, évolution, organigramme et fonctionnement des centres</p>
    )
  },
  {
    title: "Centre de Transmission",
    content: (
      <p>FH vs FO, mécanismes de transfert, connecteurs et modules SFP</p>
    )
  },
  {
    title: "Réseau IP",
    content: (
      <p>Switchs, Routeurs Cisco ASR 9010, Architecture IP à Kasserine</p>
    )
  },
  {
    title: "Conclusion Générale",
    content: (
      <p>Expérience professionnelle enrichissante et technique, apprentissage des méthodes réelles</p>
    )
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-cyan-300">
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <span className="text-cyan-300 font-mono">
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
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            className="w-full max-w-4xl text-center p-8"
          >
            <h1 className="text-4xl font-bold mb-10">{slides[currentSlide].title}</h1>
            <div className="text-xl">{slides[currentSlide].content}</div>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-12 flex justify-center gap-8">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="border-cyan-300 text-cyan-300 hover:bg-cyan-900"
          >
            <ChevronLeft className="mr-2" /> Précédent
          </Button>
          <Button 
            variant="outline" 
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className="border-cyan-300 text-cyan-300 hover:bg-cyan-900"
          >
            Suivant <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
