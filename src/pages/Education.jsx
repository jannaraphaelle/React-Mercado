import React from 'react';

function Education() {
  const education = [
    { title: 'Ateneo de Davao University', description: 'Humanities and Social Sciences', link: '#' },
    { title: 'Ateneo de Davao University', description: 'Bachelor of Science in International Studies Major in Asian Studies', link: '#' },
    { title: 'Holy Child College of Davao', description: 'Bachelor of Science in Information Technology', link: '#' },
  ];

  return (
    <section id="education" style={{ padding: '50px', textAlign: 'center', backgroundColor: '#9903be' }}>
      <h2>Education</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {education.map((education, index) => (
          <div key={index} style={{ border: '1px solid #9903be', padding: '20px', width: '250px', borderRadius: '8px' }}>
            <h3>{education.title}</h3>
            <p>{education.description}</p>
            <a href={education.link}>View Achievements</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;