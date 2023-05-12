import React from "react";
import { useParams } from "react-router-dom";
import Description from "../extendedForm/Description";
import WorkingExperience from "../extendedForm/WorkingExperience";
import PersonalProjects from "../extendedForm/PersonalProjects";
import ProfesionalSkills from "../extendedForm/ProfesionalSkills";
import Education from "../extendedForm/Education";
import FacultyProjects from "../extendedForm/FacultyProjects";

const AdditionalForm = () => {
  const params = useParams();
  const path = params.selectedItem;
  return (
    <div>
      {path === "description" && <Description />}
      {path === "working" && <WorkingExperience />}
      {path === "personal" && <PersonalProjects />}
      {path === "faculty" && <FacultyProjects />}
      {path === "profesional" && <ProfesionalSkills />}
      {path === "education" && <Education />}
    </div>
  );
};

export default AdditionalForm;
