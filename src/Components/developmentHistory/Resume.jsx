import React from "react";
import Lists from "./Lists";

function Resume() {
  const obj = [
    {
      year: "2020 - 2024",
      heading: "BACHELOR OF TECHNOLOGY",
      subheading: "Uttarakhand Technical University",
      description: "I have graduated from the COLLEGE OF ENGINEERING ROORKEE in the field of computer science and engineering.",
    },
    {
      year: "2016 - 2017",
      heading: "Intermediate",
      subheading: "Janta Inter College, Behat, UP Board",
      description:
        "I have completed my 12th class with a focus on Physics, Chemistry, and Mathematics (PCM).",
    },
    {
      year: "2014 - 2015",
      heading: "High School",
      subheading: "Yamuna Khadar Inter College, Kambohmajra, UP Board",
      description: "I have completed my 10th class with a focus on science.",
    },
  ];
  return (
    <section className="intro" id="education">
      <div className="container">
        <h2 data-aos="zoom-out" data-aos-duration="1500">
          Education
        </h2>
        <Lists obj={obj}/>
      </div>
    </section>
  );
}

export default Resume;
