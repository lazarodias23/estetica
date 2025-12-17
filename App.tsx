import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Doctor } from './components/sections/Doctor';
import { Procedures } from './components/sections/Procedures';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-noir-200 bg-noir-950 selection:bg-luxe-500 selection:text-noir-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Doctor />
        <Procedures />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;