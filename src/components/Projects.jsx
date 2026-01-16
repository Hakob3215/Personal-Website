import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import voxelDestructionImg from '../assets/voxeldestruction.png';
import loopZooImg from '../assets/loopzoo.png';

const projects = [
    {
        name: 'Destruction Simulator | JavaScript / WebGL',
        date: 'Fall 2025',
        link: 'https://hakob3215.github.io/DestructionSimulator/',
        image: voxelDestructionImg,
        description: [
            'Developed a 3D destruction simulation game using WebGL and JavaScript, featuring custom physics and transformation matrices.',
            'Implemented destructible environments with multiple levels (Farm, Graveyard) and interactive weapons like grenades and hammers.',
            'Created a custom player controller and user interface to enhance the immersive experience.',
        ]
    },
    {
        name: 'LoopZoo – MERN Stack',
        date: 'April 2025 – June 2025',
        link: 'http://loopzoo.net',
        image: loopZooImg,
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
    }
];

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <AnimatedSection key={index} direction={index % 2 === 0 ? 'deal-left' : 'deal-right'}>
            <div className="project-card">
              {project.image && (
                <div className="project-image-container" onClick={() => openModal(project.image)}>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="project-image" 
                  />
                  <div className="image-overlay">
                    <span>Click to Expand</span>
                  </div>
                </div>
              )}
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
          </AnimatedSection>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Full Preview" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;