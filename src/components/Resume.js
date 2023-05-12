import React from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  const handlerTemplate = (i) => {
    navigate(`/template${i}`);
  };
  return (
    <div>
      <button onClick={() => handlerTemplate(1)}>Template1</button>
      <button onClick={() => handlerTemplate(2)}>Template2</button>
    </div>
  );
};

export default Resume;
