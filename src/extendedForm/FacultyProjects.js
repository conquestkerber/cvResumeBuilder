import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const FacultyProjects = () => {
  const { facultyProjectData, setFacultyProjectData } = useContext(DataContext);

  const inputFacultyProjectData = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...facultyProjectData];
    onchangeVal[i][name] = value;
    setFacultyProjectData(onchangeVal);
  };

  const addFacultyHandler = () => {
    setFacultyProjectData([
      ...facultyProjectData,
      { title: "", from: "", description: "" },
    ]);
  };
  return (
    <div>
      {facultyProjectData.map((data, i) => {
        return (
          <div key={i} className="projects">
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => inputFacultyProjectData(e, i)}
              value={data.title}
            />
            <input
              type="text"
              placeholder="from the"
              name="from"
              onChange={(e) => inputFacultyProjectData(e, i)}
              value={data.from}
            />
            <textarea
              placeholder="description"
              name="description"
              onChange={(e) => inputFacultyProjectData(e, i)}
              value={data.description}
            />
          </div>
        );
      })}
      <div>
        <button onClick={addFacultyHandler}>Add</button>
        {/*             <button onClick={handleFacultyNext}>Next</button>
         */}{" "}
      </div>
    </div>
  );
};

export default FacultyProjects;
