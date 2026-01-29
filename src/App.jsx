import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import About from './components/About';
import Services from './components/Services';
import Workflow from './components/Workflow';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <About />
        <Services />
        <Workflow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
