import React from 'react';
import resumePdf from '../assets/Hakob_Atajyan_R.pdf';

const resumeData = {
  name: 'Hakob Atajyan',
  phone: '+18184528183',
  email: 'hakobatajyan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hakob-atajyan/',
  github: 'https://github.com/Hakob3215',
};

function Header() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <h1>{resumeData.name}</h1>
      <h2>{resumeData.email} | {resumeData.phone}</h2>
      
      <nav className="page-nav">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
        <a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
      </nav>

      <div className="social-links">
        <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="resume-btn">Resume</a>
      </div>
    </header>
  );
}

export default Header;