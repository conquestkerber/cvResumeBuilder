import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();
  const { educationData, setEducationData } = useContext(DataContext);
  const inputEducationForm = (e) => {
    setEducationData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleEducationNext = (e) => {
    navigate("/resume");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="School"
        name="school"
        onChange={inputEducationForm}
        value={educationData.school}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        onChange={inputEducationForm}
        value={educationData.city}
      />
      <input
        type="text"
        name="year"
        placeholder="Year of complition"
        onChange={inputEducationForm}
        value={educationData.year}
      />
      <button>add</button>
      <button onClick={handleEducationNext}>next</button>
    </div>
  );
};

export default Education;
