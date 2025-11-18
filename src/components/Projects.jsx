import React from 'react';

const projects = [
    {
        name: 'LoopZoo – MERN Stack',
        date: 'April 2025 – June 2025',
        link: 'http://loopzoo.net',
        description: [
            'Developed and deployed a full-stack web application for real-time multiplayer games.',
            'Implemented game rooms utilizing Web Sockets/SocketIO.',
            'Developed P2P Video and Audio Streaming with WebRTC to ensure smooth communication.'
        ]
    },
    {
        name: 'Language Sentiment Analyzer | Python / Pytorch',
        date: 'May 2024',
        description: [
            'Engineered a Tweet Sentiment Analyzer with over 80% accuracy, leveraging transformer architecture.',
            'Implemented data preprocessing to clean and prepare a large dataset of over one million tweets for training.',
        ]
    },
    {
        name: 'Tab It! – A Receipt Scanning App | MERN Stack',
        date: 'January 2024 – March 2024',
        description: [
            'Developed a full stack receipt scanning application for easily splitting bills, with database and server implementation through Express, React, and MongoDB.',
            'Engineered the back-end RESTful API using Node.js and Express to handle user authentication, data storage, and receipt processing logic.',
            'Developed key user-facing components with React, including the receipt upload interface and an interface for assigning line-items to participants.',
        ]
    },
    {
        name: 'Game Development | Unity / C#',
        date: 'September 2023 - December 2023',
        description: [
            'Co-developed a 2D puzzle-platformer in Unity featuring a novel piece-breaking mechanic, implemented using object-oriented C# principles.',
            'Collaborated with a partner using Git/GitHub for version control and project management.',
            'Created and integrated animations, sprites, and music to enhance the game\'s appearance.',
        ]
    }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
              ) : (
                project.name
              )}
            </h3>
            <p className="project-date">{project.date}</p>
            <ul>
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;