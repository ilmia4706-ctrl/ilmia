import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: '[linkedin.com](https://linkedin.com)' },
    { icon: '🐙', label: 'GitHub', url: '[github.com](https://github.com)' },
    { icon: '📧', label: 'Email', url: 'mailto:ilmia.i@example.com' },
    { icon: '🐦', label: 'Twitter', url: '[twitter.com](https://twitter.com)' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-text">Ilmia</span>
              <span className="logo-dot">.I</span>
            </h3>
            <p className="footer-tagline">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Ilmia.I. All rights reserved.
          </p>
          <p className="made-with">
            Made with 💖 using React
          </p>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
