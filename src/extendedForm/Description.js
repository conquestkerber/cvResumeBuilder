import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const { descriptionData, setDescriptionData } = useContext(DataContext);
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    navigate("/experience/working");
  };
  return (
    <div className="formPart">
      <p>Additional Description</p>
      <textarea
        className="textarea"
        onChange={(e) => setDescriptionData(e.target.value)}
        value={descriptionData}
      ></textarea>
      <button className="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Description;
