import Lists from "./Lists";

function Employment() {
  const obj = [
    {
      year: "October 2023 - March 2024",
      heading: "Frontend Web Developer Intern",
      subheading: "CodeMevel Pvt Ltd",
      description:
        "Developed and maintained various web applications using a stack including React.js, Next.js, Tailwindcss, Typescript & Sanity.io.  Collaborated with the design team to create visually appealing and userfriendly interfaces for web projects. ",
    },
    {
      year: "January 2024 - March 2024",
      heading: "Frontend Web Developer ",
      subheading: "Voltsec.io | Cybersecurity PTaaS",
      description:
        "Worked closely with the frontend development team to implement user interface components using Next.js and Tailwind CSS. Collaborated on the design and development of dashboard for Voltsec.io's PTaaS platform. ",
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
