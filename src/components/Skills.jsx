import React from 'react';
import AnimatedSection from './AnimatedSection';

const skills = {
  'Programming Languages': ['C/C++', 'Python', 'C#', 'JavaScript', 'OCaml', 'SQL', 'MongoDB', 'Java', 'Lisp'],
  'Frameworks & APIs': ['React', 'Express', 'BCrypt', 'Mongoose', 'Socket-IO', 'Node-Cron', 'Numpy', 'Pytorch', 'SciPy', 'Matplotlib', 'Pandas', 'OpenMP'],
  'Organizations': ['UCLA Association for Computing Machinery AI / Studio'],
  'Spoken Languages': ['Native English Speaker', 'Fluent in Armenian', 'Proficiency in Spanish']
};

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList], index) => (
          <AnimatedSection key={category} direction={index % 2 === 0 ? 'deal-left' : 'deal-right'}>
            <div className="playing-card">
                <h3>{category}</h3>
                <ul>
                {skillList.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Skills;