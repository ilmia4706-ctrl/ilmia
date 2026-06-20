import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './components/About.css'
import './components/Achievements.css'
import './components/Animations.css'
import './components/Contact.css'
import './components/Education.css'
import './components/FallingLeaves.css'
import './components/FloatingParticles.css'
import './components/Footer.css'
import './components/Hero.css'
import './components/Internships.css'
import './components/Navbar.css'
import './components/Projects.css'
import './components/Skills.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
