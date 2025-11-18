import React from 'react';

const experiences = [
  {
    role: 'Expense Management',
    company: 'ANS Construction',
    period: 'June 2023 - September 2023',
    location: 'Los Angeles, CA',
    description: [
      'Managed project expenses using Excel, tracking costs and expenses to ensure budget adherence.',
      'Developed a Python script with the Pandas library to automate the extraction of financial data from PDF invoices, significantly increasing productivity.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} - {exp.company}</h3>
            <p className="experience-period">{exp.period} | {exp.location}</p>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;