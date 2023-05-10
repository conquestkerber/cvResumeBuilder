import React, { useContext, useRef } from "react";
import { DataContext } from "../context/DataContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  const pdfRef = useRef();
  const {
    personalData,
    descriptionData,
    workingExperienceData,
    personalProjectData,
    facultyProjectData,
    proffesionalSkills,
    educationData,
  } = useContext(DataContext);
  const { firstName, lastName, email, phone, address, git } = personalData;
  const { title, employer, description, from, to } = workingExperienceData;

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(`${firstName}${lastName}CV.pdf`);
    });
  };
  return (
    <>
      <div ref={pdfRef}>
        <p>Personal Data</p>
        <p>First Name: {firstName} </p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Phone number: {phone}</p>
        <p>Address: {address}</p>
        <p>Git: {git}</p>
        <img src="s" alt="avatar"></img>
        <p>DESCRIPTION</p>
        <p>{descriptionData}</p>
        <p>WORKING EXPERIENCE</p>
        <p>{title}</p>
        <p>{employer}</p>
        <p>{description}</p>
        <p>{from}</p>
        <p>{to}</p>
        <p>PERSONAL PROJECTS</p>
        <p>{personalProjectData.title}</p>
        <p>{personalProjectData.from}</p>
        <p>{personalProjectData.description}</p>
        <p>FACULTY PROJECTS</p>
        <p>{facultyProjectData.title}</p>
        <p>{facultyProjectData.from}</p>
        <p>{facultyProjectData.description}</p>
        <p>PROFFESIONAL SKILLS</p>
        <p>{proffesionalSkills.tehnologie}</p>
        <p>{proffesionalSkills.rate}</p>
        <p>EDUCATION</p>
        <p>{educationData.school}</p>
        <p>{educationData.city}</p>
        <p>{educationData.year}</p>
      </div>
      <div>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </>
  );
};

export default Resume;
