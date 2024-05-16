interface Experience {
  start_year: number;
  description: string;
}

interface CV_Personal {
  photo: string;
  name: string;
  lastName: string;
  position: string;
}

interface CV_Details {
  experience: Experience[];
  education: string[];
}

interface CV_Data {
  personal: CV_Personal;
  details: CV_Details;
}

export type{
    Experience,
    CV_Personal,
    CV_Details,
    CV_Data
}
