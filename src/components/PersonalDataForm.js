import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const PersonalDataForm = () => {
  const navigate = useNavigate();
  const { personalData, setPersonalData } = useContext(DataContext);
  const { firstName, lastName, email, phone, address, git } = personalData;

  const handleForm = (event) => {
    setPersonalData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/experience/description");
  };
  return (
    <div>
      <form className="form">
        <p>Personal Data</p>
        <label htmlFor="fName">
          First Name{" "}
          <input
            type="text"
            id="fName"
            name="firstName"
            onChange={handleForm}
            value={firstName}
          />
        </label>
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          id="lName"
          name="lastName"
          onChange={handleForm}
          value={lastName}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleForm}
          value={email}
        ></input>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleForm}
          value={phone}
        ></input>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleForm}
          value={address}
        ></input>
        <label htmlFor="git">Git</label>
        <input
          type="text"
          id="git"
          name="git"
          onChange={handleForm}
          value={git}
        ></input>
        <input type="file" />
        {/* <button>Back</button> */}
        <button className="button" onClick={submitForm}>
          Next
        </button>
      </form>
    </div>
  );
};
export default PersonalDataForm;
