import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dna, 
  Microscope, 
  BrainCircuit, 
  FlaskConical,
  ArrowRight
} from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  tools, 
  icon, 
  link 
}: { 
  title: string; 
  description: string; 
  tools: string[]; 
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <Card className="group bg-bio-card border-purple-800/30 p-6 hover:border-purple-700/50 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:bg-purple-800/50 transition-colors">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-purple-300 mb-3">{title}</h3>
        
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        <div className="mb-4">
          <p className="text-sm text-purple-400 mb-2">Tools & Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full border border-purple-800/30"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
          className="mt-auto bg-purple-600 hover:bg-purple-700 text-white group-hover:translate-x-1 transition-transform"
          onClick={() => window.open(link, '_blank')}
        >
          Request Service <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "NGS Data Preprocessing & Visualization",
      description: "Get clean, high-quality sequence data with expert-level preprocessing and intuitive visual outputs.",
      tools: ["FastQC", "Trimmomatic", "Galaxy"],
      icon: <Dna className="w-6 h-6 text-purple-400" />,
      link: "https://forms.gle/7jWdvswCPtMx23zd9"
    },
    {
      title: "Microbiome Analysis (16S/Metagenomics)",
      description: "Dive deep into microbial communities with taxonomic profiling and community structure analysis.",
      tools: ["QIIME2", "Kraken", "MetaPhlAn"],
      icon: <Microscope className="w-6 h-6 text-purple-400" />,
      link: "https://forms.gle/7jWdvswCPtMx23zd9"
    },
    {
      title: "ML-based Bio Data Insights",
      description: "Leverage machine learning to uncover hidden patterns in omics, clinical, or experimental data.",
      tools: ["Python", "R", "scikit-learn"],
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      link: "https://forms.gle/7jWdvswCPtMx23zd9"
    },
    {
      title: "Drug-Target Interaction Prediction",
      description: "Accelerate drug discovery with predictive tools for molecular docking and ligand screening.",
      tools: ["Molecular Docking", "AI-driven Screening"],
      icon: <FlaskConical className="w-6 h-6 text-purple-400" />,
      link: "https://forms.gle/7jWdvswCPtMx23zd9"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Specialized Offerings</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Currently accepting limited projects – apply early to secure a spot.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-6 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
            onClick={() => window.open('https://forms.gle/PXMzPFvZtbBYv1oU6', '_blank')}
          >
            Book a 1-on-1 Session
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
