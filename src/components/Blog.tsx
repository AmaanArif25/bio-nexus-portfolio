
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Database, BrainCircuit, Microscope } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Recent Advances in Single-Cell Genomic Sequencing Technologies',
      excerpt: 'An in-depth analysis of how contemporary single-cell sequencing methodologies are transforming our understanding of cellular heterogeneity and contributing to precision medicine approaches.',
      date: 'April 24, 2025',
      category: 'Genomics',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800&h=500',
      icon: <Microscope className="w-12 h-12 text-purple-400" strokeWidth={1.5} />
    },
    {
      title: 'Leveraging Machine Learning Algorithms for Oncological Applications',
      excerpt: 'Exploring the integration of artificial intelligence and machine learning methodologies to enhance cancer diagnostics, personalize treatment protocols, and predict clinical outcomes.',
      date: 'April 18, 2025',
      category: 'AI & ML',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500',
      icon: <BrainCircuit className="w-12 h-12 text-purple-400" strokeWidth={1.5} />
    },
    {
      title: 'The Human Microbiome: Implications for Health and Disease',
      excerpt: 'A comprehensive examination of recent research findings on gut microbiome composition and its significant correlations with various health conditions and therapeutic interventions.',
      date: 'April 10, 2025',
      category: 'Microbiome',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800&h=500',
      icon: <Database className="w-12 h-12 text-purple-400" strokeWidth={1.5} />
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Research Publications & Insights</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Expert analysis and perspectives from the frontier of bioinformatics, genomics,
            and computational biology research methodologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-bio-card border-purple-800/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 hover:border-purple-600/50 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-900/50 to-black/90 relative overflow-hidden">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    {post.icon}
                  </div>
                )}
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex justify-between items-center mb-3">
                  <Badge className="bg-purple-700 hover:bg-purple-600">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-400 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center border-t border-purple-900/50 pt-4">
                <span className="text-sm text-gray-400">{post.readTime}</span>
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 hover:bg-transparent group">
                  Read Publication <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/30 px-8">
            Browse All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
