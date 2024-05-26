import Lists from "./Lists";

function Employment() {
  const obj = [
    {
      year: "Feburary 2024 - Present",
      heading: "Frontend Web Developer Intern",
      subheading: "CodeMevel",
      description:
        "Developed and maintained various web applications using a stack including React.js, Next.js, Tailwindcss, Typescript & Sanity.io. Collaborated with the design team to create visually appealing and user friendly interfaces for web projects. ",
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
