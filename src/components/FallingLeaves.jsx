import React, { useEffect, useState } from 'react';
import './FallingLeaves.css';

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const leafColors = ['#E6E6FA', '#FCE7F3', '#87CEEB', '#98FB98', '#FBCFE8'];
    const leafShapes = [ '✿', '❀' ];
    
    const createLeaves = () => {
      const newLeaves = [];
      for (let i = 0; i < 20; i++) {
        newLeaves.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 10 + Math.random() * 15,
          animationDelay: Math.random() * 10,
          size: 15 + Math.random() * 20,
          color: leafColors[Math.floor(Math.random() * leafColors.length)],
          shape: leafShapes[Math.floor(Math.random() * leafShapes.length)],
          opacity: 0.4 + Math.random() * 0.4
        });
      }
      setLeaves(newLeaves);
    };

    createLeaves();
  }, []);

  return (
    <div className="falling-leaves-container">
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="leaf"
          style={{
            left: `${leaf.left}%`,
            animationDuration: `${leaf.animationDuration}s`,
            animationDelay: `${leaf.animationDelay}s`,
            fontSize: `${leaf.size}px`,
            color: leaf.color,
            opacity: leaf.opacity
          }}
        >
          {leaf.shape}
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
