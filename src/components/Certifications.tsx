import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Award,
  Calendar,
  Globe,
  GraduationCap,
  Link as LinkIcon,
  Image
} from 'lucide-react';

const CertificateCard = ({ 
  title, 
  organization, 
  year, 
  mode, 
  score,
  logos
}: { 
  title: string; 
  organization: string; 
  year: string; 
  mode: string;
  score?: string;
  logos: string[];
}) => {
  return (
    <Card className="group bg-bio-card border-purple-800/30 overflow-hidden hover:border-purple-700/50 transition-all duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-2">
            {logos.map((logo, index) => (
              <div key={index} className="relative h-12 w-12 flex items-center justify-center">
                <img 
                  src={`/logos/${logo}`}
                  alt={`${organization} logo`}
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'h-8 w-8 bg-purple-900/30 rounded flex items-center justify-center';
                    fallback.innerHTML = '<svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>';
                    target.parentNode?.insertBefore(fallback, target);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 text-gray-300">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>{organization}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>{year}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-purple-400" />
            <span>{mode}</span>
          </div>
          
          {score && (
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Score: {score}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

const Certifications = () => {
  const certificates = [
    {
      title: "R for Data Science",
      organization: "Great Learning",
      year: "2024",
      mode: "Online",
      logos: ["great-learning.jpeg"]
    },
    {
      title: "Introduction to R Programming",
      organization: "Simplilearn",
      year: "2024",
      mode: "Online",
      logos: ["simplilearn.png"]
    },
    {
      title: "Elements of AI",
      organization: "MinnaLearn, University of Helsinki",
      year: "2023",
      mode: "Online",
      logos: ["minnalearn.svg", "university-of-helsinki.png"]
    },
    {
      title: "Digital Skills: Artificial Intelligence",
      organization: "Accenture",
      year: "2024",
      mode: "Online",
      score: "91%",
      logos: ["accenture.svg"]
    },
    {
      title: "Intro to VR/AR/MR",
      organization: "Lancaster University, Institute of Coding",
      year: "2024",
      mode: "Online",
      score: "91%",
      logos: ["lancaster-university.svg", "institute-of-coding.svg"]
    },
    {
      title: "Android App Development",
      organization: "Great Learning Academy",
      year: "2024",
      mode: "Online",
      logos: ["great-learning.jpeg"]
    },
    {
      title: "Python – Intro to Data Science & ML A-Z",
      organization: "Udemy",
      year: "2024",
      mode: "Online",
      logos: ["udemy.png"]
    },
    {
      title: "ML – Fundamentals of Python Machine Learning",
      organization: "Udemy",
      year: "2024",
      mode: "Online",
      logos: ["udemy.png"]
    },
    {
      title: "Calculus for ML & DS",
      organization: "DeepLearning.AI, Coursera",
      year: "2024",
      mode: "Online",
      logos: ["deeplearning-ai.svg", "coursera.svg"]
    },
    {
      title: "Intro to LLMs",
      organization: "Google Cloud, Simplilearn",
      year: "2024",
      mode: "Online",
      logos: ["google-cloud.svg", "simplilearn.png"]
    },
    {
      title: "Getting Started with NodeJS",
      organization: "Simplilearn",
      year: "2024",
      mode: "Online",
      logos: ["simplilearn.png"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Certifications & Learning Milestones</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 