import Lists from "./Lists";

function Employment() {
  const obj = [
    {
      year: "01 Sep 2023 - 30 Sep 2023",
      heading: "Web Development",
      subheading: "CodSoft",
      description:
        "During my stint at CodSoft from September 2023 to September 2023, I accomplished a FRONTEND DEVELOPMENT virtual internship. Throughout this experience, I crafted several web applications utilizing HTML, CSS, and JavaScript.",
    },
    {
      year: "02 March 2024 - Present",
      heading: "Frontend Web Development",
      subheading: "CodeMevel Pvt Ltd",
      description:
        "I've been actively engaged in frontend web development. My responsibilities include designing and implementing user interfaces using modern web technologies such as NEXT.Js. I collaborate closely with backend developers to create seamless and visually appealing web experiences. My role involves staying updated with industry trends and best practices to ensure the delivery of high-quality and responsive web applications.",
    },
  ];
  return (
    <section className="intro" id="experience">
      <div className="container">
        <h2 data-aos="zoom-out" data-aos-duration="1500">
          Experience
        </h2>
        <Lists obj={obj} />
      </div>
    </section>
  );
}

export default Employment;
