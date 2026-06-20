import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React JS featuring glassmorphism design, smooth animations, and interactive elements.',
      image: '🎨',
      tags: ['React', 'CSS', 'Responsive'],
      github: '[github.com](https://github.com)',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Application',
      description: 'A weather app that displays real-time weather information using a third-party API with a clean, intuitive interface.',
      image: '🌤️',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: '[github.com](https://github.com)',
      live: '#',
      featured: false
    },
    {
      title: 'Task Management System',
      description: 'A full-featured task management application with CRUD operations, categories, and priority levels for efficient task organization.',
      image: '📋',
      tags: ['React', 'Python', 'Database'],
      github: '[github.com](https://github.com)',
      live: '#',
      featured: false
    },
    {
      title: 'E-Commerce Landing Page',
      description: 'A responsive e-commerce landing page with modern UI design, product showcases, and interactive elements.',
      image: '🛒',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: '[github.com](https://github.com)',
      live: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card glass-card animate-on-scroll delay-${(index % 4) + 1} ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
                <div className="project-overlay">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.live} className="project-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
                {project.featured && <span className="featured-badge">⭐ Featured</span>}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta animate-on-scroll delay-5">
          <p>Want to see more of my work?</p>
          <a href="[github.com](https://github.com)" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
