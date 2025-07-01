
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Database, Cloud, Shield, Cpu, Layers, Smartphone, Globe, Lightbulb, FileText } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions including NLP, computer vision, and predictive analytics.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Transform raw data into actionable insights with our cutting-edge data science methodologies and visualization.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'IoT & Embedded Systems',
      description: 'Connected device ecosystems, embedded systems development, and edge computing solutions for real-time processing.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Full Stack Web Development',
      description: 'End-to-end web application development using modern frameworks, scalable architectures, and best practices.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions designed for performance, security, and cost optimization across major platforms.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FileText,
      title: 'Research & Patents',
      description: 'Comprehensive research services, patent filing assistance, and intellectual property protection strategies.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Technical Consulting',
      description: 'Expert technical guidance, architecture reviews, technology stack selection, and strategic planning.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets, infrastructure, and sensitive data.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Layers,
      title: 'System Integration',
      description: 'Seamless integration of existing systems, APIs, and third-party services for unified operations.',
      gradient: 'from-slate-500 to-gray-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions that drive innovation and accelerate digital transformation across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-b from-background to-background/50 backdrop-blur-sm h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
