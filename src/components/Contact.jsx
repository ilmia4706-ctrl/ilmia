import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ilmia.i@example.com',
      link: 'mailto:ilmia.i@example.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/ilmia',
      link: '[linkedin.com](https://linkedin.com)'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/ilmia',
      link: '[github.com](https://github.com)'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info-section animate-on-scroll">
            <h3 className="contact-heading">Let's Connect!</h3>
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  className="contact-card glass-card"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <span className="contact-card-icon">{info.icon}</span>
                  <div className="contact-card-content">
                    <span className="contact-card-label">{info.label}</span>
                    <span className="contact-card-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-section animate-on-scroll delay-2">
            <div className="contact-form-card glass-card">
              <h3 className="form-title">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="submit-success">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
