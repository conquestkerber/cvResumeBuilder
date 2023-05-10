import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const ProfesionalSkills = () => {
  const navigate = useNavigate();
  const { proffesionalSkills, setProffesionalSkills } = useContext(DataContext);
  const inputProffesionalSkills = (e) => {
    setProffesionalSkills((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleProffesionalNext = (e) => {
    e.preventDefault();
    navigate("/experience/education");
  };
  return (
    <div>
      <p>enter what technologies you know and rate the knowledge</p>
      <input
        type="text"
        placeholder="tehnologie"
        name="tehnologie"
        onChange={inputProffesionalSkills}
        value={proffesionalSkills.tehnologie}
      />
      <select
        name="rate"
        id="rate"
        value={proffesionalSkills.rate}
        onChange={inputProffesionalSkills}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button>add</button>
      <button onClick={handleProffesionalNext}>next</button>
    </div>
  );
};

export default ProfesionalSkills;
