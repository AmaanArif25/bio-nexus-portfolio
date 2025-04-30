
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">About Me</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-2 border-purple-600/50 relative z-10">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-900/30 to-black/80 flex items-center justify-center">
                {/* Placeholder for profile image */}
                <div className="text-6xl">👨‍🔬</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-purple-500 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-purple-500 rounded-br-lg"></div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-2 rounded-full font-medium">
              Bioinformatician
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Exploring the Intersection of Biology and Computing</h3>
            
            <p className="text-gray-300">
              As a dedicated bioinformatics specialist, I combine my passion for genomic research with advanced 
              computational skills to unravel complex biological data. My expertise spans from metagenomics and 
              microbiome analysis to cutting-edge applications of AI in healthcare and precision medicine.
            </p>
            
            <p className="text-gray-300">
              With a strong foundation in both biological sciences and programming, I develop innovative solutions 
              for data-intensive problems in genomics, immunoinformatics, and drug discovery. My work aims to bridge 
              the gap between massive biological datasets and actionable insights that can advance scientific 
              discovery and clinical applications.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <InfoItem label="Experience" value="5+ Years" />
              <InfoItem label="Projects" value="25+" />
              <InfoItem label="Publications" value="12+" />
              <InfoItem label="Collaborations" value="8+" />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Download CV
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/30">
                Research Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }: { label: string, value: string }) => {
  return (
    <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-800/30">
      <p className="text-purple-400 text-sm font-medium">{label}</p>
      <p className="text-white text-xl font-bold">{value}</p>
    </div>
  );
};

export default About;
