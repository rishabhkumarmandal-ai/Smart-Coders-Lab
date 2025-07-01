
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'IoT', 'ML', 'Patent', 'Web App', 'Mobile'];

  const projects = [
    {
      id: 1,
      title: 'Smart Agricultural Monitoring System',
      description: 'IoT-based crop monitoring with AI predictions for optimal harvest timing.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Arduino', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      category: 'IoT',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'AI-Powered Customer Support Bot',
      description: 'Natural language processing chatbot with sentiment analysis and automated responses.',
      techStack: ['Python', 'TensorFlow', 'NLP', 'Flask', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      category: 'ML',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Blockchain-Based Patent Registry',
      description: 'Decentralized patent management system with smart contracts for IP protection.',
      techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      category: 'Patent',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Real-time Analytics Dashboard',
      description: 'Full-stack web application for business intelligence and data visualization.',
      techStack: ['React', 'D3.js', 'Node.js', 'Express', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      category: 'Web App',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Smart Home Mobile App',
      description: 'Cross-platform mobile application for IoT device control and automation.',
      techStack: ['React Native', 'Firebase', 'Redux', 'Bluetooth', 'WiFi'],
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop',
      category: 'Mobile',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Predictive Maintenance System',
      description: 'Machine learning model for industrial equipment failure prediction.',
      techStack: ['Python', 'Scikit-learn', 'Docker', 'AWS', 'Pandas'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      category: 'ML',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our innovative projects across various domains, showcasing cutting-edge technology solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={activeFilter === category 
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" 
                : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted text-sm rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
