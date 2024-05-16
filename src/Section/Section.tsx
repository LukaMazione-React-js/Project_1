import { myCV } from '../data';

const Section = () => {
  return (
    <section className='cv__details'>
      <h2>Experience</h2>
      <ul>
        {myCV.experience.map((experience) => (
          <li key={experience.start_year}>
            <strong>{experience.start_year}</strong> - {experience.description}
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
  );
};

export { Section };
