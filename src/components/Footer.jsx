import React from 'react';
import resumePdf from '../assets/Hakob_Atajyan_R.pdf';

const resumeData = {
  name: 'Hakob Atajyan',
  linkedin: 'https://www.linkedin.com/in/hakob-atajyan/',
  github: 'https://github.com/Hakob3215',
};

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links footer-links">
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="resume-btn-footer">Resume</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Hakob Atajyan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
