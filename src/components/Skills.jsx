import React from 'react';

const skills = {
  'Programming Languages': ['C/C++', 'Python', 'C#', 'JavaScript', 'OCaml', 'SQL', 'MongoDB', 'Java', 'Lisp'],
  'Frameworks & APIs': ['React', 'Express', 'BCrypt', 'Mongoose', 'Socket-IO', 'Node-Cron', 'Numpy', 'Pytorch', 'SciPy', 'Matplotlib', 'Pandas', 'OpenMP'],
  'Organizations': ['UCLA Association for Computing Machinery AI / Studio'],
  'Spoken Languages': ['Fluent in Armenian', 'Proficiency in Spanish']
};

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skillList.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;