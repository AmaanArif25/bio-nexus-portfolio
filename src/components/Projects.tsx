
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'genomics', label: 'Genomics' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'drug-discovery', label: 'Drug Discovery' },
    { id: 'visualization', label: 'Data Visualization' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Metagenomic Analysis of Gut Microbiome in IBD Patients',
      description: 'Comprehensive analysis of gut microbiome composition and function in inflammatory bowel disease patients, revealing key microbial signatures associated with disease progression.',
      image: '',
      categories: ['genomics'],
      tech: ['Python', 'R', 'QIIME2', 'PICRUSt2'],
      icon: '🧪'
    },
    {
      id: 2,
      title: 'AI-Driven Prediction of Cancer Drug Response',
      description: 'Machine learning framework to predict patient-specific responses to cancer therapies based on genomic profiles, enhancing precision oncology applications.',
      image: '',
      categories: ['ai-ml', 'genomics'],
      tech: ['TensorFlow', 'Python', 'scikit-learn', 'NGS Analysis'],
      icon: '🎗️'
    },
    {
      id: 3,
      title: 'Virtual Screening for Novel SARS-CoV-2 Inhibitors',
      description: 'Computational drug discovery pipeline for identifying potential SARS-CoV-2 protease inhibitors through molecular docking and virtual screening approaches.',
      image: '',
      categories: ['drug-discovery'],
      tech: ['AutoDock Vina', 'PyMOL', 'ZINC Database', 'GROMACS'],
      icon: '💊'
    },
    {
      id: 4,
      title: 'Interactive Genomic Data Visualization Platform',
      description: 'Web-based platform for interactive visualization of complex genomic datasets, enabling researchers to explore and analyze multi-dimensional omics data.',
      image: '',
      categories: ['visualization'],
      tech: ['D3.js', 'React', 'Node.js', 'MongoDB'],
      icon: '📊'
    },
    {
      id: 5,
      title: 'Single-Cell RNA-seq Analysis of Tumor Microenvironment',
      description: 'Characterization of cellular heterogeneity within the tumor microenvironment using single-cell transcriptomics, revealing novel immune cell states.',
      image: '',
      categories: ['genomics'],
      tech: ['Seurat', 'R', 'scRNA-seq', 'Bioconductor'],
      icon: '🧫'
    },
    {
      id: 6,
      title: 'Deep Learning for Protein Structure Prediction',
      description: 'Implementation of deep learning approaches to predict protein structure from sequence data, contributing to advancements in structural bioinformatics.',
      image: '',
      categories: ['ai-ml', 'drug-discovery'],
      tech: ['PyTorch', 'Python', 'AlphaFold', 'Protein Databases'],
      icon: '🤖'
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of bioinformatics research projects and applications,
            showcasing innovative approaches to computational biology challenges.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <Button 
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`
                ${activeFilter === filter.id 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'border-purple-500/50 text-gray-300 hover:text-white hover:border-purple-500'
                }
              `}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-bio-card border border-purple-800/20 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20 hover:border-purple-600/50"
            >
              <div className="h-48 bg-gradient-to-br from-purple-900/50 to-black flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-purple-900/30 text-purple-300 border-purple-800/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-purple-900/50 hover:bg-purple-700 border border-purple-700">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/30 px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
