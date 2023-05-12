import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const WorkingExperience = () => {
  const { workingExperienceData, setWorkingExperienceData } =
    useContext(DataContext);
  const navigate = useNavigate();

  const addHandler = () => {
    setWorkingExperienceData([
      ...workingExperienceData,
      { title: "", employer: "", description: "", from: "", to: "" },
    ]);
  };

  /*  const handleNext = (e) => {
    e.preventDefault();
    console.log(workingExperienceData);
    navigate("/experience/personal");
  }; */
  const handleForm = (e, i) => {
    const { name, value } = e.target;
    /*  setWorkingExperienceData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    })); */

    /*   setWorkingExperienceData((prev) =>
      prev.map((data) => ({ ...data, [name]: value }))
    ); */
    const onchangeVal = [...workingExperienceData];
    onchangeVal[i][name] = value;
    setWorkingExperienceData(onchangeVal);
  };
  return (
    <div className="workingExperience">
      {workingExperienceData?.map((val, i) => {
        return (
          <div key={i} className="partWorkingExperience">
            <input
              type="text"
              placeholder="job title"
              name="title"
              onChange={(e) => handleForm(e, i)}
              value={val.title}
            />
            <input
              type="text"
              placeholder="Employer"
              name="employer"
              onChange={(e) => handleForm(e, i)}
              value={val.employer}
            />
            <textarea
              placeholder="description"
              name="description"
              onChange={(e) => handleForm(e, i)}
              value={val.description}
            />
            <input
              type="text"
              placeholder="from the"
              name="from"
              onChange={(e) => handleForm(e, i)}
              value={val.from}
            />
            <input
              type="text"
              placeholder="to"
              name="to"
              onChange={(e) => handleForm(e, i)}
              value={val.to}
            />
          </div>
        );
      })}
      <button onClick={addHandler}>Add</button>
      {/*       <button onClick={handleNext}>Next</button>
       */}{" "}
    </div>
  );
};

export default WorkingExperience;
