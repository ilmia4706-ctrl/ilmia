import React from 'react';
import './Internships.css';

const Internships = () => {
  const internships = [
    {
      title: 'Full Stack Development Intern',
      company: 'JClick Solution',
      duration: 'Currently Ongoing',
      period: '2026',
      status: 'ongoing',
      icon: '🚀',
      description: 'Working on full stack development projects, gaining hands-on experience with modern web technologies and development practices.',
      skills: ['React', 'Node.js', 'Database', 'APIs']
    },
    {
      title: 'Frontend Development Intern',
      company: 'Rexcoders Coding Academy',
      duration: '2 Weeks',
      period: 'December 2025',
      status: 'completed',
      icon: '💻',
      description: 'Gained practical experience in frontend development, working with HTML, CSS, and JavaScript to build responsive web applications.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    }
  ];

  return (
    <section id="internships" className="internships">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Internships</h2>

        <div className="internships-grid">
          {internships.map((intern, index) => (
            <div 
              key={index} 
              className={`internship-card glass-card animate-on-scroll delay-${index + 1} ${intern.status}`}
            >
              <div className="internship-status-badge">
                {intern.status === 'ongoing' ? '🔴 Active' : '✅ Completed'}
              </div>
              
              <div className="internship-icon">
                <span>{intern.icon}</span>
              </div>

              <div className="internship-content">
                <h3 className="internship-title">{intern.title}</h3>
                <p className="internship-company">{intern.company}</p>
                
                <div className="internship-meta">
                  <span className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {intern.period}
                  </span>
                  <span className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    {intern.duration}
                  </span>
                </div>

                <p className="internship-description">{intern.description}</p>

                <div className="internship-skills">
                  {intern.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
