import React, { useEffect, useState } from 'react';
import './FloatingParticles.css';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = [
      'rgba(230, 230, 250, 0.6)',
      'rgba(255, 209, 220, 0.6)',
      'rgba(135, 206, 235, 0.5)',
      'rgba(152, 251, 152, 0.5)'
    ];

    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 5 + Math.random() * 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: 15 + Math.random() * 20,
        animationDelay: Math.random() * 10
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="floating-particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
