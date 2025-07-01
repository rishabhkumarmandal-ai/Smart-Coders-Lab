
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI/ML', 'IoT', 'Research', 'Startup Help'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: Transforming Patient Care',
      excerpt: 'Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans.',
      category: 'AI/ML',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable IoT Architecture: Best Practices',
      excerpt: 'Learn the essential principles for designing IoT systems that can handle millions of connected devices efficiently.',
      category: 'IoT',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Patent Strategy for Tech Startups: Protecting Your Innovation',
      excerpt: 'A comprehensive guide to intellectual property protection strategies for early-stage technology companies.',
      category: 'Research',
      author: 'Dr. Priya Patel',
      date: '2024-01-08',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'From Idea to MVP: A Startup Development Framework',
      excerpt: 'Step-by-step methodology for transforming innovative ideas into market-ready minimum viable products.',
      category: 'Startup Help',
      author: 'James Wilson',
      date: '2024-01-05',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 5,
      title: 'Machine Learning Model Deployment: Production Best Practices',
      excerpt: 'Essential strategies for deploying ML models in production environments with reliability and scalability.',
      category: 'AI/ML',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Edge Computing in IoT: Reducing Latency and Costs',
      excerpt: 'Understanding how edge computing transforms IoT applications by processing data closer to the source.',
      category: 'IoT',
      author: 'Emily Johnson',
      date: '2024-01-01',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      featured: false
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Latest </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Insights & Research
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, research findings, and industry insights from our expert team
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category 
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" 
                : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <Button className="w-full mt-4" asChild>
                  <a href={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-2 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-xs text-muted-foreground justify-between">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <Button size="sm" className="w-full" asChild>
                  <a href={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
