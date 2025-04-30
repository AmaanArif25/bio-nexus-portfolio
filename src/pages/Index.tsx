
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to BioNexus",
      description: "Explore my bioinformatics portfolio and services",
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });

    // Clean up event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-bio-background text-gray-200 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
