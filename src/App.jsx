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
        <AnimatedSection direction="left">
          <About />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <Education />
        </AnimatedSection>
        <AnimatedSection direction="left">
          <Experience />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <Projects />
        </AnimatedSection>
        <AnimatedSection direction="left">
          <Skills />
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;