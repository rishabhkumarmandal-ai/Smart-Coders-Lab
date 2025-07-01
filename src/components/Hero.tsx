import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Rocket } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically load Spline only on client
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), { ssr: false });

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center"
    >
      {/* ✅ Background Spline */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/NsupAHy5JSPzOZR9/scene.splinecode" />
        
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-black via-black/60" />
      </div>

      {/* ✅ Foreground Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/40 mb-8">
            <Zap className="w-4 h-4 mr-2 text-blue-300" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Innovation Meets Technology
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-white-900 to-pink-800 bg-clip-text text-transparent">
              Building Tomorrow's
            </span>
            <br />
            <span className="text-blue-700">Technology Today</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a cutting-edge R&D startup specializing in AI, machine learning, 
            and innovative software solutions that transform industries and shape the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-2 border-white/30 text-black hover:bg-white/10"
            >
              Get In Touch
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg border border-blue-500/30 bg-white/5">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">AI & ML Solutions</h3>
              <p className="text-gray-300 text-center">
                Advanced artificial intelligence and machine learning technologies
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg border border-purple-500/30 bg-white/5">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Innovation Labs</h3>
              <p className="text-gray-300 text-center">
                Research and development of breakthrough technologies
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg border border-pink-500/30 bg-white/5">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Custom Development</h3>
              <p className="text-gray-300 text-center">
                Tailored software solutions for enterprise needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
