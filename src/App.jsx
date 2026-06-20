import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FallingLeaves from './components/FallingLeaves';
import FloatingParticles from './components/FloatingParticles';
 
function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
    
      <FallingLeaves />
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Internships />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
