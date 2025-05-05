import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newsletter = formData.get('newsletter') === 'on';
    
    try {
      const response = await fetch('https://formspree.io/f/xzzrdjqq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // If user wants to subscribe to newsletter, redirect to LinkedIn newsletter
        if (newsletter) {
          window.open('https://www.linkedin.com/newsletters/the-bioinformatics-dev-7323245556741369857/', '_blank');
        }

        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: 'Email',
      value: 'arif.amaan25lko@gmail.com',
      link: 'mailto:arif.amaan25lko@gmail.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Phone',
      value: '+91 9026854518',
      link: 'tel:+919026854518'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-gradient mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Have a research question, collaboration opportunity, or service inquiry?
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-bio-card border border-purple-800/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index}
                    href={method.link}
                    className="flex items-center gap-4 transition-colors hover:text-purple-400 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-purple-900/30 p-3 rounded-lg group-hover:bg-purple-800/50 transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{method.title}</p>
                      <p className="text-gray-200 font-medium">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="bg-bio-card border-purple-800/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Connect with me</h3>
              
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/amaanarif/" target="_blank" rel="noopener noreferrer" className="bg-purple-900/30 p-3 rounded-lg hover:bg-purple-800/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
                <a href="https://github.com/AmaanArif25" target="_blank" rel="noopener noreferrer" className="bg-purple-900/30 p-3 rounded-lg hover:bg-purple-800/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
                <a href="https://scholar.google.com/citations?user=i2xR3TwAAAAJ&hl=en&authuser=3" target="_blank" rel="noopener noreferrer" className="bg-purple-900/30 p-3 rounded-lg hover:bg-purple-800/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </a>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="bg-bio-card border border-purple-800/30 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-purple-900/20 border-purple-800/30 focus:border-purple-500 focus-visible:ring-purple-500/30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">Your Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                      className="bg-purple-900/20 border-purple-800/30 focus:border-purple-500 focus-visible:ring-purple-500/30"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    required
                    className="bg-purple-900/20 border-purple-800/30 focus:border-purple-500 focus-visible:ring-purple-500/30"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    required
                    rows={4}
                    className="bg-purple-900/20 border-purple-800/30 focus:border-purple-500 focus-visible:ring-purple-500/30"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="h-4 w-4 rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-300">
                    Subscribe to my LinkedIn newsletter for bioinformatics insights and updates
                  </label>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
