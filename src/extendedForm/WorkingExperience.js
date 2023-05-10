import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const WorkingExperience = () => {
  const { workingExperienceData, setWorkingExperienceData } =
    useContext(DataContext);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/experience/personal");
  };
  const handleForm = (e) => {
    setWorkingExperienceData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="workingExperience">
      <input
        type="text"
        placeholder="job title"
        name="title"
        onChange={handleForm}
        value={workingExperienceData.title}
      />
      <input
        type="text"
        placeholder="Employer"
        name="employer"
        onChange={handleForm}
        value={workingExperienceData.employer}
      />
      <textarea
        placeholder="description"
        name="description"
        onChange={handleForm}
        value={workingExperienceData.description}
      />
      <input
        type="text"
        placeholder="from the"
        name="from"
        onChange={handleForm}
        value={workingExperienceData.from}
      />
      <input type="text" placeholder="to" name="to" onChange={handleForm} />
      <button>Add</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default WorkingExperience;
