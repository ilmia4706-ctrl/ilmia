import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.E. Computer Science Engineering',
      institution: 'Arunachala College of Engineering for Women',
      period: '2026 - Present',
      status: 'Pre-Final Year',
      icon: '🎓',
      highlights: ['Strong academic performance', 'Active in technical activities', 'Pursuing Full Stack Development']
    },
    {
      degree: 'Higher Secondary Education (HSE)',
      institution: 'S.S.P. Government Higher Secondary School',
      period: 'Completed',
      status: '84%',
      icon: '📚',
      highlights: ['Mathematics', 'Consistent academic record']
    },
    {
      degree: 'Secondary School (SSLC)',
      institution: 'S.S.P. Government Higher Secondary School',
      period: 'Completed',
      status: '83%',
      icon: '🏫',
      highlights: ['Strong foundation in Science & Mathematics']
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Education</h2>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`timeline-item animate-on-scroll delay-${index + 1}`}
            >
              <div className="timeline-marker">
                <span className="marker-icon">{edu.icon}</span>
              </div>
              
              <div className="timeline-content glass-card">
                <div className="edu-header">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="edu-status">{edu.status}</span>
                </div>
                <p className="edu-institution">{edu.institution}</p>
                <span className="edu-period">{edu.period}</span>
                
                <ul className="edu-highlights">
                  {edu.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>
                      <span className="highlight-dot"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
