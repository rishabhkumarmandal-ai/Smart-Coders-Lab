import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Instagram, Github, Globe } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rishabh Kumar Mandal',
      role: 'Founder & CEO',
      image: '/img/Me2.png',
      bio: 'Former AI researcher and Software Engineer proficient in machine learning and startup development.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rishabh-kumar-mandal-2470b0272',
        instagram: 'https://www.instagram.com/rishabh.kumar.mandal/',
        portfolio: 'https://port-folio-sable-eight.vercel.app/'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & IoT Specialist',
      image: '',
      bio: 'Expert in embedded systems and IoT architecture with multiple patents in smart devices.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rishabh-kumar-mandal-2470b0272',
        instagram: 'https://www.instagram.com/rishabh.kumar.mandal/',
        portfolio: 'https://port-folio-sable-eight.vercel.app/'
      }
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product & UX',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Product strategist with experience at Apple and Tesla, focused on user-centered design.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rishabh-kumar-mandal-2470b0272',
        instagram: 'https://www.instagram.com/rishabh.kumar.mandal/',
        portfolio: 'https://port-folio-sable-eight.vercel.app/'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack architect specializing in scalable web applications and cloud infrastructure.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rishabh-kumar-mandal-2470b0272',
        instagram: 'https://www.instagram.com/rishabh.kumar.mandal/',
        portfolio: 'https://port-folio-sable-eight.vercel.app/'
      }
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Research Scientist',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
      bio: 'PhD in Computer Science with focus on quantum computing and advanced algorithms.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rishabh-kumar-mandal-2470b0272',
        instagram: 'https://www.instagram.com/rishabh.kumar.mandal/',
        portfolio: 'https://port-folio-sable-eight.vercel.app/'
      }
    },
    {
      name: 'James Wilson',
      role: 'Business Development Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      bio: 'Former McKinsey consultant with expertise in tech strategy and startup growth.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rishabh-kumar-mandal-2470b0272',
        instagram: 'https://www.instagram.com/rishabh.kumar.mandal/',
        portfolio: 'https://port-folio-sable-eight.vercel.app/'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet Our </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of visionaries, engineers, and researchers work together to push the boundaries of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img 
                    src={member.image || '/img/default-profile.png'} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={member.social.portfolio} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
