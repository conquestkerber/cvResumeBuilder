import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

/* here i will put personal and faculty projects ,maybe i send some boolean where true is personal and faculty is false */

const Projects = ({ isPersonal }) => {
  const navigate = useNavigate();
  const {
    personalProjectData,
    facultyProjectData,
    setPersonalProjectData,
    setFacultyProjectData,
  } = useContext(DataContext);

  const inputPersonalProjectData = (e) => {
    setPersonalProjectData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const inputFacultyProjectData = (e) => {
    setFacultyProjectData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handlePersonalNext = (e) => {
    e.preventDefault();
    navigate("/experience/faculty");
  };
  const handleFacultyNext = (e) => {
    e.preventDefault();
    navigate("/experience/profesional");
  };
  return (
    <>
      {!isPersonal ? (
        <div className="projects">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={inputPersonalProjectData}
            value={personalProjectData.title}
          />
          <input
            type="text"
            placeholder="from the"
            name="from"
            onChange={inputPersonalProjectData}
            value={personalProjectData.from}
          />
          <textarea
            placeholder="description"
            name="description"
            onChange={inputPersonalProjectData}
            value={personalProjectData.description}
          />
          <button className="next" onClick={handlePersonalNext}>
            Next
          </button>
        </div>
      ) : (
        <div className="projects">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={inputFacultyProjectData}
            value={facultyProjectData.title}
          />
          <input
            type="text"
            placeholder="from the"
            name="from"
            onChange={inputFacultyProjectData}
            value={facultyProjectData.from}
          />
          <textarea
            placeholder="description"
            name="description"
            onChange={inputFacultyProjectData}
            value={facultyProjectData.description}
          />
          <button className="next" onClick={handleFacultyNext}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Projects;
