import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'UIR MEI AI Colloquium',
      description: 'Attended the UIR MEI AI Colloquium and gained hands-on experience in Virtual Reality and AI challenges, exploring cutting-edge technologies.',
      icon: '🎯',
      category: 'Workshop',
      date: '2025'
    },
    {
      title: 'Research Paper Presentation',
      description: 'Presented a paper on Genetic AI at a National Level Symposium conducted in the college, showcasing research in artificial intelligence.',
      icon: '📄',
      category: 'Research',
      date: '2025'
    }
  ];

  const activities = [
    { icon: '🤖', text: 'AI & Machine Learning Enthusiast' },
    { icon: '🌐', text: 'Web Development Projects' },
    { icon: '📚', text: 'Continuous Learning' },
    { icon: '👥', text: 'Team Collaboration' }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Achievements & Activities</h2>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`achievement-card glass-card animate-on-scroll delay-${index + 1}`}
            >
              <div className="achievement-icon-wrapper">
                <span className="achievement-icon">{achievement.icon}</span>
                <div className="icon-ring"></div>
              </div>
              
              <div className="achievement-badge">{achievement.category}</div>
              
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <span className="achievement-date">{achievement.date}</span>
            </div>
          ))}
        </div>

        <div className="activities-section animate-on-scroll delay-3">
          <h3 className="activities-title">Areas of Interest</h3>
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <span className="activity-icon">{activity.icon}</span>
                <span className="activity-text">{activity.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
