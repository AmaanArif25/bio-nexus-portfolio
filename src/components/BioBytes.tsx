import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  FlaskConical, 
  Microscope, 
  BrainCircuit,
  MessageSquare,
  Github,
  ExternalLink
} from 'lucide-react';

const BlogCard = ({ 
  title, 
  description, 
  date,
  icon,
  githubLink,
  colabLink
}: { 
  title: string; 
  description: string; 
  date: string;
  icon: React.ReactNode;
  githubLink?: string;
  colabLink?: string;
}) => {
  return (
    <Card className="group bg-bio-card border-purple-800/30 overflow-hidden hover:border-purple-700/50 transition-all duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:bg-purple-800/50 transition-colors">
            {icon}
          </div>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-purple-900/30">
          <div className="flex gap-2">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {colabLink && (
              <a 
                href={colabLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            className="text-purple-400 hover:text-purple-300 group-hover:translate-x-1 transition-transform"
            onClick={() => window.open('https://www.linkedin.com/in/amaanarif/', '_blank')}
          >
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

const BioBytes = () => {
  const blogPosts = [
    {
      title: "I Replicated a Vaccine Design Paper Using Python",
      description: "How far can code take you into experimental immunology? A deep dive into implementing vaccine design algorithms from scratch.",
      date: "Coming Soon",
      icon: <FlaskConical className="w-5 h-5 text-purple-400" />,
      githubLink: "https://github.com/yourusername/vaccine-design",
      colabLink: "https://colab.research.google.com/drive/your-colab-link"
    },
    {
      title: "My QIIME2 Pipeline for Microbiome Analysis (and where it broke)",
      description: "A journey of bugs, bacteria, and bash scripts. Lessons learned from building and debugging a microbiome analysis pipeline.",
      date: "Coming Soon",
      icon: <Microscope className="w-5 h-5 text-purple-400" />,
      githubLink: "https://github.com/yourusername/qiime2-pipeline"
    },
    {
      title: "AI Meets Cancer Data: What I Learned Building a Survival Prediction Model",
      description: "From raw genomics to real-world outcomes. Exploring the intersection of machine learning and oncology through survival prediction.",
      date: "Coming Soon",
      icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
      githubLink: "https://github.com/yourusername/cancer-survival-prediction"
    }
  ];

  return (
    <section id="biobytes" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">BioBytes</h2>
          <p className="text-xl text-purple-300 mb-2">Experiments, Notebooks & Notes from a Bioinformatician's Desk</p>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-purple-900/30 border border-purple-800/30 px-6 py-4 rounded-full">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">Have an idea or paper I should try replicating?</span>
            <a 
              href="#contact" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Let's connect!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioBytes; 