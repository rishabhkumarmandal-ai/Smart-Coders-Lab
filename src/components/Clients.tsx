
import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop',
      industry: 'Enterprise Software'
    },
    {
      name: 'Green Energy Co',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop',
      industry: 'Renewable Energy'
    },
    {
      name: 'MediTech Innovations',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop',
      industry: 'Healthcare'
    },
    {
      name: 'AgriSmart Systems',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop',
      industry: 'Agriculture'
    },
    {
      name: 'Urban Mobility',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop',
      industry: 'Transportation'
    },
    {
      name: 'FinanceFlow',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop',
      industry: 'Financial Services'
    }
  ];

  const testimonials = [
    {
      quote: "Tech Genesis Labs transformed our operations with their AI-powered analytics platform. ROI increased by 300% within 6 months.",
      author: "Jane Smith",
      position: "CTO, TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Their IoT solution revolutionized our smart farming approach. Crop yields improved by 40% with predictive analytics.",
      author: "Robert Green",
      position: "CEO, AgriSmart Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Outstanding technical expertise and innovative approach. They delivered beyond our expectations on time and budget.",
      author: "Lisa Chen",
      position: "Head of Innovation, MediTech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with forward-thinking companies to deliver innovative technology solutions
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">
                  {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h3 className="font-semibold text-center mb-2">{client.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{client.industry}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
