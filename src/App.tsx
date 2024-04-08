import { Fragment } from 'react/jsx-runtime';
import './App.scss';

interface CV_PersonalData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
}

interface CV_Experience {
  experience: {
    description: string;
    start_year: number;
  }[];
}

interface CV_Education {
  education: string[];
}

// type CV_Data = CV_PersonalData & (CV_Experience  & {education: string[]})
type CV_Data = CV_PersonalData & CV_Experience & CV_Education;

const myCV: CV_Data = {
  photo:
    'https://cdn.pixabay.com/photo/2015/03/09/20/04/programmer-666237_1280.jpg',
  name: 'Luka',
  lastName: 'Mazione',
  position: 'Junior Full Stack Developer - to be :)',
  experience: [
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
  ],
  education: [
    'Lublin University of Technology - Electrical Engineering',
    'Automotive Technical School in Lublin - Vehicle and Machinery Service and Repair',
    'Vocational School - Locksmith, Welder',
  ],
};

function App() {
  return (
    <Fragment>
      <div className='root__box'>
        <h2>Personal Details</h2>
        <div className='root__photoName'>
          <img
            src={myCV.photo}
            alt='MyPhoto'
          />
          <p>
            <span>{myCV.name} </span>
            <span>{myCV.lastName}</span>
          </p>
        </div>
        <p>{myCV.position}</p>
      </div>

      <div className='root__box'>
        <h2>Experiene:</h2>
        {myCV.experience.map((experience, index) => (
          <div key={experience.start_year + index}>
            <strong>{experience.start_year}:</strong>
            <p>{experience.description}</p>
          </div>
        ))}

        <h2>Education</h2>
        <ul>
          {[...myCV.education].reverse().map((school, index) => (
            <li key={index}> {school} </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
