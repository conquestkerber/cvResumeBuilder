import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "yup-phone";
const PersonalDataForm = () => {
  const navigate = useNavigate();
  const { personalData, setPersonalData } = useContext(DataContext);
  const { firstName, lastName, email, phone, address, git } = personalData;

  const schema = yup.object().shape({
    firstName: yup.string().min(3).required("firstName is required"),
    lastName: yup.string().required("lastName is required"),
    email: yup.string().email().required("email is required"),
    phone: yup
      .number("phone is required")
      .min(10000000, "min 7 number")
      .required("phone is required"),
    address: yup.string().required("addres is required "),
    git: yup.string().required("git is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  /*  const handleForm = (event) => {
    setPersonalData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }; */
  const submitForm = (data) => {
    //event.preventDefault();
    setPersonalData(data);
    navigate("/experience/description");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <p>Personal Data</p>
        <label htmlFor="fName">
          First Name
          <input
            type="text"
            id="fName"
            name="firstName"
            /*onChange={handleForm}
             */ {...register("firstName", { value: firstName })}
            /* value={firstName} */
          />
        </label>
        <p className="error">{errors.firstName?.message}</p>
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          id="lName"
          name="lastName"
          /*           onChange={handleForm}
           */ /* value={lastName} */
          {...register("lastName", { value: lastName })}
        ></input>
        <p className="error">{errors.lastName?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          /* onChange={handleForm} */
          /* value={email} */
          {...register("email", { value: email })}
        ></input>
        <p className="error">{errors.email?.message}</p>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          /* onChange={handleForm} */
          /*  value={phone} */
          {...register("phone", { value: phone })}
        ></input>
        <p className="error">{errors.phone?.message}</p>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          /*  onChange={handleForm} */
          /*value={address}*/
          {...register("address", { value: address })}
        ></input>
        <p className="error">{errors.address?.message}</p>
        <label htmlFor="git">Git</label>
        <input
          type="text"
          id="git"
          name="git"
          /*   onChange={handleForm} */
          /* value={git} */
          {...register("git", { value: git })}
        ></input>
        <p className="error">{errors.git?.message}</p>
        {/* <input type="file" /> */}
        {/* <button>Back</button> */}
        <button className="button">Next</button>
      </form>
    </div>
  );
};
export default PersonalDataForm;
