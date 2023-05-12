import React from "react";
import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/personalData");
  };
  return (
    <div className="entryButtonDiv">
      <button className="entryButton" onClick={handleClick}>
        CreateCV
      </button>
    </div>
  );
};

export default EntryPage;
