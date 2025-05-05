import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-10 border-t border-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold purple-gradient-text mb-4">BioNexus</h3>
            <p className="text-gray-400 mb-4">
              Bioinformatics solutions at the intersection of genomics, data science, and medicine.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/amaanarif/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/AmaanArif25" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://scholar.google.com/citations?user=i2xR3TwAAAAJ&hl=en&authuser=3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple-400">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple-400">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-purple-400">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-purple-400">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-purple-400">NGS Data Analysis</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400">Microbiome Analysis</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400">AI & ML in Genomics</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400">Drug Discovery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on bioinformatics trends and insights.
            </p>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
              onClick={() => window.open('https://www.linkedin.com/newsletters/the-bioinformatics-dev-7323245556741369857/', '_blank')}
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-purple-900/30 text-center">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
