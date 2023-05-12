import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ProfesionalSkills = () => {
  const { proffesionalSkills, setProffesionalSkills } = useContext(DataContext);
  const inputProffesionalSkills = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...proffesionalSkills];
    onchangeVal[i][name] = value;
    setProffesionalSkills(onchangeVal);
  };

  const addHanlder = () => {
    setProffesionalSkills([
      ...proffesionalSkills,
      { tehnologie: "", rate: "" },
    ]);
  };

  return (
    <div>
      {proffesionalSkills?.map((data, i) => {
        return (
          <div key={i}>
            <p>enter what technologies you know and rate the knowledge</p>
            <input
              type="text"
              placeholder="tehnologie"
              name="tehnologie"
              onChange={(e) => inputProffesionalSkills(e, i)}
              value={data.tehnologie}
            />
            <select
              name="rate"
              id="rate"
              value={data.rate}
              onChange={(e) => inputProffesionalSkills(e, i)}
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
          </div>
        );
      })}
      <button onClick={addHanlder}>add</button>
    </div>
  );
};

export default ProfesionalSkills;
