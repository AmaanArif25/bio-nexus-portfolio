
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'core',
      name: 'Core Skills',
      icon: '🧠',
      skills: [
        { name: 'Bioinformatics & Computational Biology', level: 90, icon: '🧬' },
        { name: 'Metagenomics & Gut Microbiome Analysis', level: 85, icon: '🧪' },
        { name: 'Cancer Bioinformatics (Precision Oncology)', level: 80, icon: '🎗️' },
        { name: 'AI & ML in Healthcare & Genomics', level: 85, icon: '🤖' },
        { name: 'NGS Data Analysis (DNA, RNA, Epigenomics)', level: 95, icon: '🧬' },
        { name: 'Systems Biology & Network Analysis', level: 80, icon: '🧠' },
      ],
    },
    {
      id: 'technical',
      name: 'Technical Skills',
      icon: '💻',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'R', level: 90, icon: '📊' },
        { name: 'Perl', level: 75, icon: '🔧' },
        { name: 'Java', level: 70, icon: '☕' },
        { name: 'HTML/CSS/JavaScript', level: 80, icon: '🌐' },
        { name: 'ReactJS', level: 75, icon: '⚛️' },
      ],
    },
    {
      id: 'specialized',
      name: 'Specialized Research',
      icon: '🔬',
      skills: [
        { name: 'Immunoinformatics & Vaccine Design', level: 85, icon: '🧫' },
        { name: 'Molecular Docking & Drug Discovery', level: 80, icon: '💊' },
        { name: 'Genome Assembly & Scaffolding', level: 90, icon: '🔬' },
        { name: 'Single Cell Genomics', level: 75, icon: '🧫' },
        { name: 'SpaceOmics', level: 70, icon: '🌌' },
        { name: 'NeuroOmics', level: 75, icon: '🧠' },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'TensorFlow / Keras / PyTorch', level: 85, icon: '🤖' },
        { name: 'MySQL / MongoDB / PostgreSQL', level: 80, icon: '🗃️' },
        { name: 'AWS / Google Cloud', level: 75, icon: '☁️' },
        { name: 'Tableau / Power BI', level: 80, icon: '📊' },
        { name: 'Scikit-learn / Pandas / NumPy', level: 90, icon: '📈' },
        { name: 'Docker / Kubernetes', level: 75, icon: '🐳' },
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
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">My Skills & Expertise</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            My multidisciplinary toolkit combines biological knowledge with computational methods
            to extract meaningful insights from complex genomic data.
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
