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

export {myCV}
