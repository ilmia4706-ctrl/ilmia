import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '3+', label: 'Projects Completed' },
    { number: '2', label: 'Internships' },
    { number: '6+', label: 'Skills' },
    { number: '84%', label: 'HSE Score' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-section animate-on-scroll">
            <div className="about-image-container">
              <div className="about-image">
                <div className="image-placeholder">
                  <span>🎯</span>
                </div>
              </div>
              <div className="experience-badge float-animation">
                <span className="badge-icon">🚀</span>
                <span className="badge-text">Eager to Learn</span>
              </div>
            </div>
          </div>

          <div className="about-text-section">
            <div className="about-intro animate-on-scroll delay-1">
              <h3>Hello! I'm <span className="highlight">Ilmia</span></h3>
              <p className="tagline">A passionate CSE student crafting digital experiences</p>
            </div>

            <div className="about-description animate-on-scroll delay-2">
              <p>
                I'm a passionate <strong>Computer Science Engineering student</strong> with a strong 
                interest in web development and AI. Currently pursuing my pre-final year at 
                Arunachala College of Engineering for Women, I am dedicated to learning and 
                growing in the tech industry.
              </p>
              <p>
                I am skilled in <strong>HTML, CSS, Python</strong>, and am actively learning 
                <strong> Full Stack Development</strong>. I'm enthusiastic about creating 
                user-friendly and responsive web applications that make a difference.
              </p>
            </div>

            <div className="about-highlights animate-on-scroll delay-3">
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span>Problem Solver</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎨</span>
                <span>UI Enthusiast</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📚</span>
                <span>Quick Learner</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <span>Team Player</span>
              </div>
            </div>

            <div className="about-stats animate-on-scroll delay-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
