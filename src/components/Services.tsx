import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, BrainCircuit, Flask, BarChart3, BookOpen, Dna, Pills } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dna className="w-10 h-10 text-purple-400" strokeWidth={1.5} />,
      title: 'NGS Data Analysis',
      description: 'Comprehensive analysis of next-generation sequencing data, including DNA/RNA-seq, ChIP-seq, and ATAC-seq, with custom pipelines and visualization.',
      features: [
        'Quality control and preprocessing',
        'Reference-based and de novo assembly',
        'Differential expression analysis',
        'Variant calling and annotation'
      ],
      popular: false
    },
    {
      icon: <Flask className="w-10 h-10 text-purple-400" strokeWidth={1.5} />,
      title: 'Microbiome Analysis',
      description: 'In-depth characterization of microbial communities from metagenomic data, including taxonomic profiling and functional analysis.',
      features: [
        '16S/18S rRNA gene analysis',
        'Whole metagenome shotgun analysis',
        'Microbial diversity assessment',
        'Host-microbiome interactions'
      ],
      popular: true
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-purple-400" strokeWidth={1.5} />,
      title: 'AI & ML in Genomics',
      description: 'Development and application of machine learning models for genomic data analysis and biomarker discovery.',
      features: [
        'Predictive modeling for disease outcomes',
        'Biomarker identification',
        'Deep learning for sequence analysis',
        'Multi-omics data integration'
      ],
      popular: false
    },
    {
      icon: <Pills className="w-10 h-10 text-purple-400" strokeWidth={1.5} />,
      title: 'Drug Discovery',
      description: 'Computational approaches to accelerate drug discovery, including virtual screening, molecular docking, and pharmacogenomics.',
      features: [
        'Target identification and validation',
        'Virtual screening of compound libraries',
        'Protein-ligand interaction analysis',
        'ADMET prediction'
      ],
      popular: false
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-purple-400" strokeWidth={1.5} />,
      title: 'Data Visualization',
      description: 'Creation of clear, interactive visualizations for complex biological datasets to facilitate interpretation and discovery.',
      features: [
        'Custom genome browsers',
        'Interactive dashboards',
        'Publication-ready figures',
        'Web-based visualization tools'
      ],
      popular: false
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-400" strokeWidth={1.5} />,
      title: 'Training & Consultation',
      description: 'Personalized training and consultation services for researchers and organizations in bioinformatics and computational biology.',
      features: [
        'Workshops and training sessions',
        'Pipeline development guidance',
        'Research strategy consultation',
        'Tool selection and implementation'
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Professional Services</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Specialized bioinformatics and computational biology services to accelerate research initiatives
            and extract actionable insights from complex genomic data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-bio-card border-purple-800/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 hover:border-purple-600/50 ${
                service.popular ? 'border-purple-500 shadow-lg shadow-purple-700/20' : ''
              }`}
            >
              {service.popular && (
                <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 text-center">
                  MOST REQUESTED
                </div>
              )}
              
              <CardHeader>
                <div className="mb-4 flex items-center justify-center">{service.icon}</div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'bg-purple-900/50 hover:bg-purple-700 border border-purple-700'
                  }`}
                >
                  Request Service
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-700/30">
            <h3 className="text-2xl font-bold text-white mb-3">Need a specialized solution?</h3>
            <p className="text-gray-300 mb-6">
              Contact me for customized bioinformatics services tailored to your specific research requirements.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
              Request Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
