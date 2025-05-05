import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Database, BrainCircuit, Microscope, Dna, FlaskConical, Eye } from 'lucide-react';

const SUBDOMAIN_ICONS = {
  AI: <BrainCircuit className="w-6 h-6 text-purple-400" />, 
  NGS: <Dna className="w-6 h-6 text-purple-400" />, 
  Metagenomics: <Microscope className="w-6 h-6 text-purple-400" />, 
  Neuro: <BrainCircuit className="w-6 h-6 text-purple-400" />, 
  'Drug Discovery': <FlaskConical className="w-6 h-6 text-purple-400" />, 
  Database: <Database className="w-6 h-6 text-purple-400" />
};

const filters = [
  { id: 'all', label: 'All' },
  { id: 'AI', label: 'AI' },
  { id: 'NGS', label: 'NGS' },
  { id: 'Metagenomics', label: 'Metagenomics' },
  { id: 'Neuro', label: 'Neuro' },
  { id: 'Drug Discovery', label: 'Drug Discovery' },
  { id: 'Database', label: 'Database' },
];

const projects = [
  {
    id: 1,
    title: 'Data Mining & Epilepsy Database Development',
    subdomains: ['Database'],
    tools: ['Python', 'Excel', 'SQL', 'PubMed mining'],
    bullets: [
      'Extracted and curated epilepsy-related data to build a robust clinical research database.',
      'Enhanced existing repositories through structured metadata collection and extraction pipelines.',
      'Enabled future use in epilepsy diagnosis and treatment prediction research.'
    ],
    link: null
  },
  {
    id: 2,
    title: 'Metabarcoding for Biodiversity Analysis in Multiple Sclerosis',
    subdomains: ['Metagenomics', 'NGS'],
    tools: ['QIIME2', 'DADA2', 'FastQC', 'Galaxy', 'R'],
    bullets: [
      'Applied 16S rRNA metabarcoding to evaluate biodiversity in MS patient microbiomes.',
      'Conducted alpha & beta diversity analysis to identify key microbial shifts.',
      'Discovered taxa potentially associated with disease progression.'
    ],
    link: null
  },
  {
    id: 3,
    title: 'Molecular Network Analysis & Docking in Frontotemporal Dementia',
    subdomains: ['Drug Discovery', 'Systems Biology'],
    tools: ['Cytoscape', 'STRING', 'AutoDock', 'PubChem'],
    bullets: [
      'Mapped molecular networks and identified hub genes in FTD.',
      'Performed pathway enrichment and docking simulations with natural phytochemicals.',
      'Highlighted possible therapeutic targets for neurodegenerative treatment.'
    ],
    link: null
  },
  {
    id: 4,
    title: 'DeepSight: CNN-Based Eye Disease Detection Using Retinal Images',
    subdomains: ['AI', 'Computer Vision'],
    tools: ['Python', 'TensorFlow', 'OpenCV', 'CNNs'],
    bullets: [
      'Developed a deep learning model to classify eye diseases from retinal scans.',
      'Achieved high accuracy in identifying diabetic retinopathy stages.',
      'Demonstrated potential for low-cost diagnostic tools in ophthalmology.'
    ],
    link: null
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project =>
          project.subdomains.map(s => s.toLowerCase()).includes(activeFilter.toLowerCase())
        );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Research Portfolio</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Explore my research projects across bioinformatics, AI, and computational biology. Filter by subdomain to discover relevant work.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-bio-card border border-purple-800/20 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20 hover:border-purple-600/50"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  {project.subdomains.map((sub, idx) => (
                    <Badge key={idx} className="bg-purple-900/30 text-purple-300 border-purple-800/50 flex items-center gap-1">
                      {SUBDOMAIN_ICONS[sub] || null}
                      <span className="ml-1 text-xs font-semibold">{sub}</span>
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tools.map((tool, i) => (
                    <Badge key={i} variant="outline" className="bg-purple-900/30 text-purple-300 border-purple-800/50">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <ul className="mb-4 list-disc list-inside text-gray-300 text-sm space-y-1">
                  {project.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {project.link && (
                  <Button className="w-full bg-purple-900/50 hover:bg-purple-700 border border-purple-700 flex items-center gap-2" onClick={() => window.open(project.link, '_blank')}>
                    <Eye className="w-4 h-4" /> View Code/Report
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="mb-6">
            <span className="text-lg text-purple-300 font-semibold">Have a paper or idea you want me to replicate or contribute to? </span>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/30 ml-2" onClick={() => window.open('#contact', '_self')}>
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
