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
      proficiency: "70",
    },
    {
      skill: "JAVASCRIPT",
      proficiency: "60",
    },
    {
      skill: "REACT.JS",
      proficiency: "50",
    },
    {
      skill: "Next.JS",
      proficiency: "50",
    },
    {
      skill: "NODE JS",
      proficiency: "20",
    },
    {
      skill: "MONGODB",
      proficiency: "20",
    },
    {
      skill: "EXPRESS JS",
      proficiency: "20",
    },
  ];
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
          {skillsData.map((skill, ind) => (
            <li key={ind}>
              <p>{skill.skill}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: skill.proficiency + "%" }}
                ></div>
              </div>
              <p className="percentage">{skill.proficiency}%</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
