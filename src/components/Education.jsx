import React from 'react';

const education = {
    school: 'University of California, Los Angeles (UCLA)',
    degree: 'Bachelor of Science in Computer Science',
    expected: 'Expected June 2026',
    gpa: '3.86',
    honors: "Dean’s List 4X",
    courses: [
        'Data Structures and Algorithms', 'Software Construction', 'Computer Architecture',
        'Computer Graphics', 'Data Mining', 'Operating Systems', 'Systems Architecture', 'Web Applications',
        'Programming Languages', 'Linear Algebra', 'Differential Equations'
    ]
};

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <h3>{education.school}</h3>
            <p><strong>{education.degree}</strong> | {education.expected}</p>
            <p><strong>GPA:</strong> {education.gpa} | <strong>Honors:</strong> {education.honors}</p>
            <h4>Relevant Courses</h4>
            <ul className="course-list">
                {education.courses.map(course => <li key={course}>{course}</li>)}
            </ul>
        </section>
    );
}

export default Education;