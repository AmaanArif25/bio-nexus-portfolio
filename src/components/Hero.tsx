import React from 'react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';
import { ArrowRight, ChevronDown, Dna, BrainCircuit, Database } from 'lucide-react';

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
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-2 glow purple-gradient-text">
            Amaan Arif
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-300">
            Turning Biological Chaos into Computational Clarity
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Blending code with biology to decode microbial ecosystems, cancer genomes, and drug targets. Passionate about metagenomics, AI, and building scalable bioinformatics pipelines that drive real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 group transition-all duration-300"
              onClick={() => window.open('/#projects', '_self')}
            >
              Explore My Work <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-purple-500 bg-transparent hover:bg-purple-950/50 text-white px-8 transition-all duration-300"
              onClick={() => window.open('https://forms.gle/PXMzPFvZtbBYv1oU6', '_blank')}
            >
              Learn Bioinformatics 1-on-1
            </Button>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-3">Specialized Expertise In</p>
            <div className="flex flex-wrap justify-center gap-4">
              <ExpertiseTag text="AI-Driven Bioinformatics Solutions" icon={<BrainCircuit className="w-4 h-4 text-purple-300" strokeWidth={1.5} />} />
              <ExpertiseTag text="Microbiome & Metagenomics Analytics" icon={<Database className="w-4 h-4 text-purple-300" strokeWidth={1.5} />} />
              <ExpertiseTag text="Genomics & Precision Medicine" icon={<Dna className="w-4 h-4 text-purple-300" strokeWidth={1.5} />} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

const ExpertiseTag = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <div className="bg-purple-900/30 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 border border-purple-800/50 hover:bg-purple-800/40 transition-all duration-300 cursor-pointer">
      <span>{icon}</span>
      <span className="text-sm font-medium text-gray-200">{text}</span>
    </div>
  );
};

export default Hero;
