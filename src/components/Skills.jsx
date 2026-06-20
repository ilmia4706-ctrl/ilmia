import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = [
    { name: 'HTML', level: 90, icon: '🌐', color: '#E44D26' },
    { name: 'CSS', level: 85, icon: '🎨', color: '#1572B6' },
    { name: 'Python', level: 75, icon: '🐍', color: '#3776AB' },
    { name: 'React JS', level: 65, icon: '⚛️', color: '#61DAFB' },
    { name: 'Frontend Development', level: 80, icon: '💻', color: '#FF69B4' },
    { name: 'Full Stack Development', level: 55, icon: '🔧', color: '#98FB98' }
  ];

  const toolsData = [
    { name: 'VS Code', icon: '📝' },
    { name: 'Git', icon: '🔀' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Chrome DevTools', icon: '🔍' },
    { name: 'npm', icon: '📦' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Skills & Expertise</h2>

        <div className="skills-content">
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                className={`skill-card glass-card animate-on-scroll delay-${(index % 3) + 1}`}
              >
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                    }}
                  >
                    <div className="progress-glow"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tools-section animate-on-scroll delay-4">
            <h3 className="tools-title">Tools & Technologies</h3>
            <div className="tools-grid">
              {toolsData.map((tool, index) => (
                <div key={index} className="tool-item">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
