import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BrainCircuit, 
  Code, 
  Microscope, 
  Wrench,
  Dna,
  Flask,
  Activity,
  Database,
  Network,
  FileCode,
  BarChart3,
  Terminal,
  Coffee,
  Globe,
  Shield,
  Pills,
  Puzzle,
  Rocket,
  Cloud,
  Server
} from 'lucide-react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'core',
      name: 'Core Skills',
      icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'Bioinformatics & Computational Biology', level: 90, icon: <Dna className="w-6 h-6 text-purple-400" /> },
        { name: 'Metagenomics & Gut Microbiome Analysis', level: 85, icon: <Flask className="w-6 h-6 text-purple-400" /> },
        { name: 'Cancer Bioinformatics (Precision Oncology)', level: 80, icon: <Activity className="w-6 h-6 text-purple-400" /> },
        { name: 'AI & ML in Healthcare & Genomics', level: 85, icon: <BrainCircuit className="w-6 h-6 text-purple-400" /> },
        { name: 'NGS Data Analysis (DNA, RNA, Epigenomics)', level: 95, icon: <Database className="w-6 h-6 text-purple-400" /> },
        { name: 'Systems Biology & Network Analysis', level: 80, icon: <Network className="w-6 h-6 text-purple-400" /> },
      ],
    },
    {
      id: 'technical',
      name: 'Technical Skills',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'Python', level: 95, icon: <FileCode className="w-6 h-6 text-purple-400" /> },
        { name: 'R', level: 90, icon: <BarChart3 className="w-6 h-6 text-purple-400" /> },
        { name: 'Perl', level: 75, icon: <Terminal className="w-6 h-6 text-purple-400" /> },
        { name: 'Java', level: 70, icon: <Coffee className="w-6 h-6 text-purple-400" /> },
        { name: 'HTML/CSS/JavaScript', level: 80, icon: <Globe className="w-6 h-6 text-purple-400" /> },
        { name: 'ReactJS', level: 75, icon: <Code className="w-6 h-6 text-purple-400" /> },
      ],
    },
    {
      id: 'specialized',
      name: 'Specialized Research',
      icon: <Microscope className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'Immunoinformatics & Vaccine Design', level: 85, icon: <Shield className="w-6 h-6 text-purple-400" /> },
        { name: 'Molecular Docking & Drug Discovery', level: 80, icon: <Pills className="w-6 h-6 text-purple-400" /> },
        { name: 'Genome Assembly & Scaffolding', level: 90, icon: <Puzzle className="w-6 h-6 text-purple-400" /> },
        { name: 'Single Cell Genomics', level: 75, icon: <Microscope className="w-6 h-6 text-purple-400" /> },
        { name: 'SpaceOmics', level: 70, icon: <Rocket className="w-6 h-6 text-purple-400" /> },
        { name: 'NeuroOmics', level: 75, icon: <BrainCircuit className="w-6 h-6 text-purple-400" /> },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'TensorFlow / Keras / PyTorch', level: 85, icon: <BrainCircuit className="w-6 h-6 text-purple-400" /> },
        { name: 'MySQL / MongoDB / PostgreSQL', level: 80, icon: <Database className="w-6 h-6 text-purple-400" /> },
        { name: 'AWS / Google Cloud', level: 75, icon: <Cloud className="w-6 h-6 text-purple-400" /> },
        { name: 'Tableau / Power BI', level: 80, icon: <BarChart3 className="w-6 h-6 text-purple-400" /> },
        { name: 'Scikit-learn / Pandas / NumPy', level: 90, icon: <FileCode className="w-6 h-6 text-purple-400" /> },
        { name: 'Docker / Kubernetes', level: 75, icon: <Server className="w-6 h-6 text-purple-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            My interdisciplinary expertise integrates biological knowledge with advanced computational methodologies
            to derive meaningful insights from complex genomic datasets.
          </p>
        </div>
        
        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-transparent">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white py-3"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <Card 
                    key={index}
                    className={`bg-bio-card border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 ${
                      activeSkill === `${category.id}-${index}` ? 'border-purple-500 shadow-lg shadow-purple-700/20' : ''
                    }`}
                    onMouseEnter={() => setActiveSkill(`${category.id}-${index}`)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">{skill.icon}</div>
                        <h4 className="font-medium text-white">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-700 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: activeSkill === `${category.id}-${index}` ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                      <div className="mt-2 text-right text-sm text-purple-300 font-medium">
                        {skill.level}%
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
