import React from 'react';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src="https://via.placeholder.com/300x400" alt="A portrait of Hakob Atajyan" />
        </div>
        <div className="about-text">
          <p>
            Software Engineer and current Computer Science student at UCLA (Expected June 2026) with a 3.86 GPA and a 4x Dean's List honoree. Passionate about building full-stack applications and using new technologies. Proven ability to quickly learn and apply new skills in fast-paced environments, with experience in expense management and data automation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;