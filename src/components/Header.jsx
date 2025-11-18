import React from 'react';

const resumeData = {
  name: 'Hakob Atajyan',
  phone: '+18184528183',
  email: 'hakobatajyan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hakob-atajyan/',
  github: 'https://github.com/Hakob3215',
};

function Header() {
  return (
    <header>
      <h1>{resumeData.name}</h1>
      <h2>{resumeData.email} | {resumeData.phone}</h2>
      <nav>
        <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </header>
  );
}

export default Header;