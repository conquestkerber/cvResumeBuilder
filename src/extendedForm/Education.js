import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();
  const { educationData, setEducationData } = useContext(DataContext);
  const inputEducationForm = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...educationData];
    onchangeVal[i][name] = value;
    setEducationData(onchangeVal);

    /* setEducationData((prev) => ({ ...prev, [e.target.name]: e.target.value })); */
  };
  const addHandler = () => {
    setEducationData([...educationData, { school: "", city: "", year: "" }]);
  };
  const handleEducationNext = (e) => {
    navigate("/resume");
  };
  return (
    <div className="projects">
      {educationData?.map((data, i) => {
        return (
          <div className="partProjects" key={i}>
            <input
              type="text"
              placeholder="School"
              name="school"
              onChange={(e) => inputEducationForm(e, i)}
              value={data.school}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={(e) => inputEducationForm(e, i)}
              value={data.city}
            />
            <input
              type="text"
              name="year"
              placeholder="Year of complition"
              onChange={(e) => inputEducationForm(e, i)}
              value={data.year}
            />
          </div>
        );
      })}

      <button onClick={addHandler}>add</button>
      <button onClick={handleEducationNext}>next</button>
    </div>
  );
};

export default Education;
