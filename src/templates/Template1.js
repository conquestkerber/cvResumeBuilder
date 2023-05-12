import React, { useContext, useRef } from "react";
import "./Template1.css";
import { DataContext } from "../context/DataContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Template1 = () => {
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
      const imgY = 10;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(`${personalData.firstName}${personalData.lastName}CV.pdf`);
    });
  };
  return (
    <div>
      <div ref={pdfRef}>
        <header>
          <h1>My CV/Resume</h1>
        </header>
        <div className="container">
          <div className="section">
            <h2>Personal Information</h2>
            <ul>
              <li>
                <strong>Name:</strong> {personalData.firstName}{" "}
                {personalData.lastName}
              </li>
              <li>
                <strong>Email:</strong> {personalData.email}
              </li>
              <li>
                <strong>Phone:</strong> {personalData.phone}
              </li>
              <li>
                <strong>Address:</strong> {personalData.address}
              </li>
              <li>
                <strong>Git:</strong> {personalData.git}
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Working Expirience</h2>
            {workingExperienceData?.map((data, i) => {
              return (
                <div key={i} className="partSection">
                  <p>
                    {data.from} - {data.to} <strong>{data.employer}</strong>
                  </p>
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
          <div className="section">
            <h2>Personal Project </h2>
            {personalProjectData?.map((data, i) => {
              return (
                <div key={i} className="partSection">
                  <p>
                    <strong>{data.from}</strong> <strong>{data.title}</strong>
                  </p>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
          <div className="section">
            <h2>Faculty Project </h2>
            {facultyProjectData?.map((data, i) => {
              return (
                <div key={i} className="partSection">
                  <p>
                    <strong>{data.from}</strong> <strong>{data.title}</strong>
                  </p>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
          <div className="section">
            <h2> Skills </h2>
            {proffesionalSkills?.map((data, i) => {
              return (
                <div key={i}>
                  <p>
                    <strong>{data.tehnologie}</strong>{" "}
                    <strong>{data.rate}</strong>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="section">
            <h2> Education </h2>
            {educationData?.map((data, i) => {
              return (
                <div key={i}>
                  <p>
                    <strong>{data.school}</strong> {data.city},{data.year}
                  </p>
                </div>
              );
            })}
          </div>
          <p>{descriptionData}</p>
        </div>
      </div>
      <div>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default Template1;
