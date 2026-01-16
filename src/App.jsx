import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AnimatedSection from './components/AnimatedSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        
        <div className="content-sections">
          <AnimatedSection direction="deal-left">
            <Education />
          </AnimatedSection>
          
          <AnimatedSection direction="deal-right">
            <Experience />
          </AnimatedSection>
          
          <Projects />
          
          <Skills />
        </div>
      </main>
    </div>
  );
}

export default App;