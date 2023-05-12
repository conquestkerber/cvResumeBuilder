import React, { useContext, useRef } from "react";
import "./Template2.css";
import { DataContext } from "../context/DataContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Template2 = () => {
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
      <div className="container" ref={pdfRef}>
        <h1>
          {personalData.firstName} {""} {personalData.lastName}
        </h1>
        <p>{descriptionData}</p>
        <div>
          <h2>Personal Information</h2>
          <ul>
            <li>
              <strong>Address:</strong> {personalData.address}
            </li>
            <li>
              <strong>Email:</strong> {personalData.email}
            </li>
            <li>
              <strong>Phone:</strong> {personalData.phone}
            </li>
            <li>
              <strong>Git:</strong> {personalData.git}
            </li>
          </ul>
        </div>
        <div>
          <h2>Education</h2>
          <ul>
            {educationData?.map((data, i) => {
              return (
                <div key={i}>
                  <li>
                    <strong>{data.school}</strong> {data.city},{data.year}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Experience</h2>
          <ul>
            {workingExperienceData?.map((data, i) => {
              return (
                <div key={i}>
                  <li>
                    {data.from} - {data.to} <strong>{data.employer}</strong>
                  </li>
                  <li>{data.title}</li>
                  <li>{data.description}</li>
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Personal projects</h2>
          <ul>
            {personalProjectData?.map((data, i) => {
              return (
                <div key={i}>
                  <li>
                    <strong>{data.from}</strong> <strong>{data.title}</strong>
                  </li>
                  <li>{data.description}</li>
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Faculty projects</h2>
          <ul>
            {facultyProjectData?.map((data, i) => {
              return (
                <div key={i}>
                  <li>
                    <strong>{data.from}</strong> <strong>{data.title}</strong>
                  </li>
                  <li>{data.description}</li>
                </div>
              );
            })}
          </ul>
        </div>

        <div>
          <h2>Skills</h2>
          <ul>
            {proffesionalSkills?.map((data, i) => {
              return (
                <div key={i}>
                  <li>
                    <strong>{data.tehnologie}</strong>{" "}
                    <strong>{data.rate}</strong>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <button onClick={downloadPDF}>Download pdf</button>
      </div>
    </div>
  );
};

export default Template2;
