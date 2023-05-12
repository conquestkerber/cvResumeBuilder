import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const PersonalProjects = () => {
  const { personalProjectData, setPersonalProjectData } =
    useContext(DataContext);

  const inputPersonalProjectData = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...personalProjectData];
    onchangeVal[i][name] = value;
    setPersonalProjectData(onchangeVal);
  };

  const addPersonalHandler = () => {
    setPersonalProjectData([
      ...personalProjectData,
      { title: "", from: "", description: "" },
    ]);
  };
  return (
    <div>
      {personalProjectData.map((data, i) => {
        return (
          <div key={i} className="projects">
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => inputPersonalProjectData(e, i)}
              value={data.title}
            />
            <input
              type="text"
              placeholder="from the"
              name="from"
              onChange={(e) => inputPersonalProjectData(e, i)}
              value={data.from}
            />
            <textarea
              placeholder="description"
              name="description"
              onChange={(e) => inputPersonalProjectData(e, i)}
              value={data.description}
            />
          </div>
        );
      })}
      <div>
        <button onClick={addPersonalHandler}>Add</button>
      </div>
    </div>
  );
};

export default PersonalProjects;
