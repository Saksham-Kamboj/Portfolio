function Skills() {
  const skillsData = [
    {
      skill: "HTML 5",
      proficiency: "95",
    },
    {
      skill: "CSS 3",
      proficiency: "80",
    },
    {
      skill: "Tailwind CSS",
      proficiency: "80",
    },
    {
      skill: "JavaScript",
      proficiency: "50",
    },
    {
      skill: "React JS",
      proficiency: "60",
    },
    {
      skill: "Next JS",
      proficiency: "60",
    },
    {
      skill: "Node JS",
      proficiency: "20",
    },
    {
      skill: "MongoDB",
      proficiency: "20",
    },
    {
      skill: "Express JS",
      proficiency: "20",
    },
  ];
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 data-aos="zoom-out" data-aos-duration="1500">
          Skills
        </h2>
        <ul>
          {skillsData.map((skill, ind) => (
            <li key={ind}>
              <p data-aos="fade-right" data-aos-duration="1500">
                {skill.skill}
              </p>
              <div
                className="progress-bar"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div
                  className="progress"
                  style={{ width: skill.proficiency + "%" }}
                ></div>
              </div>
              <p
                className="percentage"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                {skill.proficiency}%
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
