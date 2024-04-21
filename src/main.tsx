import React from 'react';
import ReactDOM from 'react-dom/client';

interface Experience {
  start_year: number;
  description: string;
}

interface CV_Data {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const experience: Experience[] = [
  {
    description:
      'Automotive electrician specializing in heavy trucks equipped with Fassi cranes, focusing on electrical systems and repairs. Expert in installing and maintaining advanced safety and visibility systems, including. Skilled in diagnosing and troubleshooting general electrical faults in commercial heavy good vehicles',
    start_year: 2017,
  },
  {
    description:
      'Service engineer specializing in Palfinger cranes, power access equipment, and plant machinery. Proficient in the installation, maintenance, and repair of hydraulic lifting and access systems. Experienced in conducting safety inspections and ensuring compliance with industry standards for a wide range of construction and industrial machinery.',
    start_year: 2010,
  },
];

const myCV: CV_Data = {
  photo:
    'https://cdn.pixabay.com/photo/2015/03/09/20/04/programmer-666237_1280.jpg',
  name: 'Lukasz',
  lastName: 'Mazurek',
  position: 'Junior Full Stack Developer - to be :)',
  experience: [...experience],
  education: [
    'Lublin University of Technology - Electrical Engineering',
    'Automotive Technical School in Lublin - Vehicle and Machinery Service and Repair',
    'Vocational School - Locksmith, Welder',
  ],
};
console.log(myCV.experience);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='cv'>
      <header className='cv__header'>
        <h1>CV</h1>
      </header>
      <aside className='cv__personal'>
        <h2>Personal Data</h2>
        <img
          className='cv__personal-myPhoto'
          src={myCV.photo}
          alt={`${myCV.name} ${myCV.lastName} profile photo`}
        />
        <p>
          {myCV.name} {myCV.lastName}
        </p>
        <small>{myCV.position}</small>
      </aside>
      <section className='cv__details'>
        <h2>Experience</h2>
        <ul>
          {myCV.experience.map((experience) => (
            <li key={experience.start_year}>
              <strong>{experience.start_year}</strong> -{' '}
              {experience.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {myCV.education.map((education, index) => (
            <li key={index}>{education}</li>
          ))}
        </ul>
      </section>
    </main>
  </React.StrictMode>,
);
