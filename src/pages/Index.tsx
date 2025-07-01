
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import Portfolio from '../components/Portfolio';
import AboutOverview from '../components/AboutOverview';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesOverview />
      <Portfolio />
      <AboutOverview />
      <Team />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
