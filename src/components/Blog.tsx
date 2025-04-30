
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Advancements in Single-Cell Genomics: A New Frontier',
      excerpt: 'Exploring how single-cell sequencing technologies are revolutionizing our understanding of cellular heterogeneity and disease mechanisms.',
      date: 'April 24, 2025',
      category: 'Genomics',
      readTime: '7 min read',
      image: '',
      icon: '🧫'
    },
    {
      title: 'Machine Learning Applications in Precision Oncology',
      excerpt: 'How AI and machine learning algorithms are enhancing cancer diagnosis, treatment selection, and outcome prediction.',
      date: 'April 18, 2025',
      category: 'AI & ML',
      readTime: '9 min read',
      image: '',
      icon: '🤖'
    },
    {
      title: 'The Gut Microbiome: Understanding Its Role in Human Health',
      excerpt: 'A comprehensive overview of recent findings on gut microbiome composition and its impacts on various health conditions.',
      date: 'April 10, 2025',
      category: 'Microbiome',
      readTime: '6 min read',
      image: '',
      icon: '🧪'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Latest Blog Posts</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Insights and updates from the cutting edge of bioinformatics, genomics,
            and computational biology research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-bio-card border-purple-800/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 hover:border-purple-600/50 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-900/50 to-black flex items-center justify-center">
                <span className="text-6xl">{post.icon}</span>
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
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 hover:bg-transparent">
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/30 px-8">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
