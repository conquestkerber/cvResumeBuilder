import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  const handlerButton = (item) => {
    navigate(`/experience/${item}`);
  };
  return (
    <div>
      <form>
        <button type="button" onClick={() => handlerButton("description")}>
          Description
        </button>
        <button type="button" onClick={() => handlerButton("working")}>
          Working Experience
        </button>
        <button type="button" onClick={() => handlerButton("personal")}>
          Personal Projects
        </button>
        <button type="button" onClick={() => handlerButton("faculty")}>
          Faculty Projects
        </button>
        <button type="button" onClick={() => handlerButton("profesional")}>
          Profesional Skills
        </button>
        <button type="button" onClick={() => handlerButton("education")}>
          Education
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default Experience;
