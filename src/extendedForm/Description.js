import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Description = () => {
  const { descriptionData, setDescriptionData } = useContext(DataContext);

  return (
    <div className="formPart">
      <p>Additional Description</p>
      <textarea
        className="textarea"
        onChange={(e) => setDescriptionData(e.target.value)}
        value={descriptionData}
      ></textarea>
    </div>
  );
};

export default Description;
