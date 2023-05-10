import React from "react";
import { useParams } from "react-router-dom";
import Description from "../extendedForm/Description";
import WorkingExperience from "../extendedForm/WorkingExperience";
import Projects from "../extendedForm/Projects";
import ProfesionalSkills from "../extendedForm/ProfesionalSkills";
import Education from "../extendedForm/Education";

const AdditionalForm = () => {
  const params = useParams();
  const path = params.selectedItem;
  return (
    <div>
      {path === "description" && <Description />}
      {path === "working" && <WorkingExperience />}
      {path === "personal" && <Projects isPersonal={true} />}
      {path === "faculty" && <Projects isPersonal={false} />}
      {path === "profesional" && <ProfesionalSkills />}
      {path === "education" && <Education />}
    </div>
  );
};

export default AdditionalForm;
