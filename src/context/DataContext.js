import { createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    git: "",
  });
  const [descriptionData, setDescriptionData] = useState("");

  const [workingExperienceData, setWorkingExperienceData] = useState([
    {
      title: "",
      employer: "",
      description: "",
      from: "",
      to: "",
    },
  ]);

  const [personalProjectData, setPersonalProjectData] = useState([
    {
      title: "",
      from: "",
      description: "",
    },
  ]);
  const [facultyProjectData, setFacultyProjectData] = useState([
    {
      title: "",
      from: "",
      description: "",
    },
  ]);

  const [proffesionalSkills, setProffesionalSkills] = useState([
    {
      tehnologie: "",
      rate: "",
    },
  ]);

  const [educationData, setEducationData] = useState([
    {
      school: "",
      city: "",
      year: "",
    },
  ]);

  return (
    <DataContext.Provider
      value={{
        personalData,
        setPersonalData,
        descriptionData,
        setDescriptionData,
        workingExperienceData,
        setWorkingExperienceData,
        personalProjectData,
        setPersonalProjectData,
        facultyProjectData,
        setFacultyProjectData,
        proffesionalSkills,
        setProffesionalSkills,
        educationData,
        setEducationData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
