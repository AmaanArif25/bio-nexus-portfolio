
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BrainCircuit, 
  Code, 
  Microscope, 
  Wrench,
  Dna,
  Database,
  Network,
  FileCode,
  BarChart3,
  Terminal,
  Globe,
  Cloud,
  Server,
  Atom
} from 'lucide-react';

const CircularProgress = ({ value, size = 120, strokeWidth = 10, label, icon }: { 
  value: number; 
  size?: number; 
  strokeWidth?: number;
  label: string;
  icon: React.ReactNode;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center justify-center mb-2">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#2d2d3a"
            strokeWidth={strokeWidth}
          />
          
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#6E59A5" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-purple-400">
            {icon}
          </div>
        </div>
        
        {/* Percentage text */}
        <div className="absolute bottom-1 right-1 bg-purple-900/50 rounded-full px-2 py-0.5 text-xs font-bold text-purple-100">
          {value}%
        </div>
      </div>
      <span className="text-sm mt-2 text-center text-gray-300 font-medium">{label}</span>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("bioinformatics");

  const skillCategories = [
    {
      id: 'bioinformatics',
      name: 'Bioinformatics',
      icon: <Dna className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'Metagenomics & Microbiome Analysis', level: 92, icon: <Database className="w-8 h-8" /> },
        { name: 'Cancer Bioinformatics', level: 90, icon: <Atom className="w-8 h-8" /> },
        { name: 'NGS Data Analysis', level: 94, icon: <Dna className="w-8 h-8" /> },
        { name: 'Systems Biology & Networks', level: 85, icon: <Network className="w-8 h-8" /> },
        { name: 'Immunoinformatics', level: 88, icon: <Microscope className="w-8 h-8" /> },
        { name: 'Molecular Docking', level: 86, icon: <Atom className="w-8 h-8" /> },
      ],
    },
    {
      id: 'ai-ml',
      name: 'AI & ML',
      icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'TensorFlow & Keras', level: 88, icon: <BrainCircuit className="w-8 h-8" /> },
        { name: 'Scikit-learn & PyTorch', level: 86, icon: <Code className="w-8 h-8" /> },
        { name: 'NLP & Large Language Models', level: 82, icon: <FileCode className="w-8 h-8" /> },
        { name: 'Computer Vision & OpenCV', level: 80, icon: <BrainCircuit className="w-8 h-8" /> },
        { name: 'XGBoost & AutoML', level: 85, icon: <BarChart3 className="w-8 h-8" /> },
        { name: 'Generative AI Applications', level: 78, icon: <BrainCircuit className="w-8 h-8" /> },
      ],
    },
    {
      id: 'programming',
      name: 'Programming',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'Python', level: 95, icon: <FileCode className="w-8 h-8" /> },
        { name: 'R', level: 92, icon: <BarChart3 className="w-8 h-8" /> },
        { name: 'Perl & Shell/Bash', level: 88, icon: <Terminal className="w-8 h-8" /> },
        { name: 'Java & C++', level: 80, icon: <Code className="w-8 h-8" /> },
        { name: 'JavaScript & ReactJS', level: 85, icon: <Globe className="w-8 h-8" /> },
        { name: 'SQL & NoSQL', level: 86, icon: <Database className="w-8 h-8" /> },
      ],
    },
    {
      id: 'specialized',
      name: 'Specialized',
      icon: <Microscope className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'Genome Assembly & Scaffolding', level: 90, icon: <Dna className="w-8 h-8" /> },
        { name: 'Single Cell Genomics', level: 88, icon: <Microscope className="w-8 h-8" /> },
        { name: 'NeuroOmics & SpaceOmics', level: 80, icon: <Atom className="w-8 h-8" /> },
        { name: 'Metabolomics', level: 84, icon: <Terminal className="w-8 h-8" /> },
        { name: 'Data Visualization', level: 90, icon: <BarChart3 className="w-8 h-8" /> },
        { name: 'Cloud Computing & Big Data', level: 85, icon: <Cloud className="w-8 h-8" /> },
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
        
        <Tabs 
          defaultValue="bioinformatics" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12 bg-transparent">
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
            <TabsContent key={category.id} value={category.id} className="mt-6 animate-fade-in">
              <Card className="bg-bio-card border-purple-800/30 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-medium text-purple-300 mb-8 text-center">{category.name} Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <CircularProgress 
                          value={skill.level} 
                          label={skill.name} 
                          icon={skill.icon} 
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-purple-800/30">
                    <h4 className="text-lg font-medium text-purple-300 mb-4">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {category.id === 'bioinformatics' && (
                        <>
                          <ToolTag text="QIIME2" />
                          <ToolTag text="MetaPhlAn" />
                          <ToolTag text="HUMAnN" />
                          <ToolTag text="TCGA" />
                          <ToolTag text="maftools" />
                          <ToolTag text="BWA" />
                          <ToolTag text="STAR" />
                          <ToolTag text="GATK" />
                          <ToolTag text="DESeq2" />
                          <ToolTag text="EdgeR" />
                          <ToolTag text="Cytoscape" />
                        </>
                      )}
                      {category.id === 'ai-ml' && (
                        <>
                          <ToolTag text="TensorFlow" />
                          <ToolTag text="Keras" />
                          <ToolTag text="PyTorch" />
                          <ToolTag text="scikit-learn" />
                          <ToolTag text="XGBoost" />
                          <ToolTag text="OpenCV" />
                          <ToolTag text="NLP" />
                          <ToolTag text="LLMs" />
                          <ToolTag text="AutoML" />
                          <ToolTag text="Transformers" />
                        </>
                      )}
                      {category.id === 'programming' && (
                        <>
                          <ToolTag text="Python" />
                          <ToolTag text="R" />
                          <ToolTag text="Perl" />
                          <ToolTag text="Java" />
                          <ToolTag text="C++" />
                          <ToolTag text="Shell/Bash" />
                          <ToolTag text="HTML/CSS" />
                          <ToolTag text="JavaScript" />
                          <ToolTag text="ReactJS" />
                          <ToolTag text="Django" />
                          <ToolTag text="Flask" />
                        </>
                      )}
                      {category.id === 'specialized' && (
                        <>
                          <ToolTag text="SPAdes" />
                          <ToolTag text="Velvet" />
                          <ToolTag text="RagTag" />
                          <ToolTag text="Seurat" />
                          <ToolTag text="Scanpy" />
                          <ToolTag text="Cell Ranger" />
                          <ToolTag text="Allen Brain Atlas" />
                          <ToolTag text="NASA GeneLab" />
                          <ToolTag text="MetaboAnalyst" />
                          <ToolTag text="XCMS" />
                          <ToolTag text="ggplot2" />
                          <ToolTag text="BioRender" />
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const ToolTag = ({ text }: { text: string }) => {
  return (
    <span className="bg-purple-900/50 text-purple-200 text-xs px-3 py-1 rounded-full border border-purple-800/30">
      {text}
    </span>
  );
};

export default Skills;
