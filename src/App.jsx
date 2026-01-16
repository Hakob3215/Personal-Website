import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        
        <div className="content-sections">
          <Education />
          
          <Projects />

          <Experience />
          
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;