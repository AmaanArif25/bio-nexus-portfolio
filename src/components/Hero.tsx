
import React from 'react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ThreeScene />
      
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block relative">
            <div className="animate-float">
              <span className="text-sm uppercase tracking-wider font-medium bg-purple-800/40 px-3 py-1 rounded-full text-purple-200">
                Bioinformatics Specialist
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 glow purple-gradient-text">
            Decoding Life's Blueprints
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Combining genomic insights and computational expertise to solve complex biological problems
            in cancer research, metagenomics, and precision medicine.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Explore My Work
            </Button>
            <Button size="lg" className="border-2 border-purple-500 bg-transparent hover:bg-purple-950/50 text-white px-8">
              Contact Me
            </Button>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-3">Expertise In</p>
            <div className="flex flex-wrap justify-center gap-4">
              <ExpertiseTag icon="🧬" text="Bioinformatics" />
              <ExpertiseTag icon="🧪" text="Metagenomics" />
              <ExpertiseTag icon="🤖" text="AI & ML" />
              <ExpertiseTag icon="💊" text="Drug Discovery" />
              <ExpertiseTag icon="🔬" text="Genomics" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  );
};

const ExpertiseTag = ({ icon, text }: { icon: string, text: string }) => {
  return (
    <div className="bg-purple-900/30 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 border border-purple-800/50">
      <span>{icon}</span>
      <span className="text-sm font-medium text-gray-200">{text}</span>
    </div>
  );
};

export default Hero;
