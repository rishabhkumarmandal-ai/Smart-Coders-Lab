
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Target } from 'lucide-react';

const AboutOverview = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Target },
    { number: '25+', label: 'Expert Team Members', icon: Users },
    { number: '15+', label: 'Industry Awards', icon: Award },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Innovation is </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our DNA
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Tech Genesis Labs, we're not just building software – we're crafting the future. 
              Our team of visionary engineers, data scientists, and researchers work at the intersection 
              of cutting-edge technology and real-world applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Research-Driven Approach</h4>
                  <p className="text-muted-foreground">We invest heavily in R&D to stay ahead of technological curves</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Industry Expertise</h4>
                  <p className="text-muted-foreground">Deep domain knowledge across multiple industries and verticals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Scalable Solutions</h4>
                  <p className="text-muted-foreground">Built for growth with cloud-native architectures and modern practices</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center p-6 rounded-2xl bg-gradient-to-r from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
