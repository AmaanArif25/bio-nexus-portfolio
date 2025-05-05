import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] lg:w-[350px] lg:h-[350px]">
              <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-xl"></div>
              <div className="relative w-full h-full">
                <img
                  src="/illustration.png"
                  alt="Amaan Arif"
                  className="w-full h-full object-cover rounded-full border-4 border-purple-500/30 shadow-lg shadow-purple-500/20"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold header-gradient">About Me</h2>
              <div className="h-1 w-20 bg-purple-600 rounded"></div>
            </div>
            
            <div className="space-y-6 text-justify">
              <p className="text-gray-300 leading-relaxed">
                Hi, I'm Amaan – a bioinformatics enthusiast blending code with biology to uncover insights from complex data. My work lives at the intersection of computational biology, AI, and systems thinking.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I explore everything from microbial communities and cancer genomics to vaccine design and drug discovery — often with Python, R, and a lot of curiosity. I enjoy building reproducible pipelines, experimenting with AI models, and transforming raw biological data into meaningful visualizations.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I believe science should be both rigorous and accessible. Whether it's mapping gut microbiomes or decoding genomic patterns, I love bringing structure to biological chaos using computational tools.
              </p>

              <p className="text-gray-300 leading-relaxed">
                These days, I'm deep into metagenomics, AI-driven analysis, and designing smarter workflows for real-world biological challenges. Every project I take on is a step toward building solutions that make health and discovery more data-driven and efficient.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Let's connect over code, microbes, or your next big idea.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Card className="bg-purple-900/30 border-purple-800/30 p-4 flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Education</h3>
                <p className="text-gray-300">B.Tech in Biotechnology</p>
                <p className="text-sm text-gray-400">Amity University, Lucknow Campus</p>
              </Card>
              
              <Card className="bg-purple-900/30 border-purple-800/30 p-4 flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Publications</h3>
                <p className="text-gray-300">6+ Research Papers</p>
                <p className="text-sm text-gray-400">Scopus & Non-Scopus Indexed</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
