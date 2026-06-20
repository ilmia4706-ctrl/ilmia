import React, { useState, useEffect } from 'react';
import girl from '/girl.avif';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = [
    'Web Developer',
    'CSE Student',
    'Frontend Enthusiast',
    'Full Stack Learner'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % titles.length;
      const fullText = titles[currentIndex];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting animate-on-scroll">Hello, I'm</p>
          <h1 className="hero-name animate-on-scroll delay-1">
            <span className="name-highlight">Ilmia</span>
          </h1>
          <div className="hero-title-wrapper animate-on-scroll delay-2">
            <span className="hero-title-static">I'm a </span>
            <span className="hero-title-dynamic">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description animate-on-scroll delay-3">
            Pre-Final Year Computer Science Engineering Student at
            <span className="college-name"> Arunachala College of Engineering for Women</span>
          </p>
          <div className="hero-buttons animate-on-scroll delay-4">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-on-scroll delay-2">
          <div className="hero-image-container">
            <div className="image-backdrop"></div>
            <div className="profile-image">
              <div className="image-placeholder">
                <span><img src={girl} style={{marginTop: '200px'}}/></span>
              </div>
            </div>
            <div className="floating-badge badge-1 float-animation">
              <span>💻</span>
              <span>Developer</span>
            </div>
            <div className="floating-badge badge-2 float-animation-reverse">
              <span>🎓</span>
              <span>CSE Student</span>
            </div>
            <div className="floating-badge badge-3 float-animation">
              <span>⚡</span>
              <span>Fast Learner</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
