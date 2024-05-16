import { CV_Details } from "../types";

type Props = {
    data: CV_Details
}
const Section = ({data}: Props) => {
  return (
    <section className='cv__details'>
      <h2>Experience</h2>
      <ul>
        {data.experience.map((experience) => (
          <li key={experience.start_year}>
            <strong>{experience.start_year}</strong> - {experience.description}
          </li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {data.education.map((education, index) => (
          <li key={index}>{education}</li>
        ))}
      </ul>
    </section>
  );
};

export { Section };
