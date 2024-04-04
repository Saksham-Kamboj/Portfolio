import { Link } from "react-scroll";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <Link className="navbar-brand" to="">Saksham Kamboj</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="hi" offset={-100} >Hi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="education" offset={-100} >Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="experience" offset={-100}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="skills" offset={-100}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="projects" offset={-100}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClass="active" to="contact" offset={-100}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;



















// import React from "react";


// function Navigation() {
//   return (
//     <nav >
//       <div classNameName="container">
//         <h1>S K</h1>
//         <ul>
//           <li><Link to="hi" spy={true} smooth={true} offset={-100} duration={1500}>Hi</Link></li>
//           <li><Link to="education" spy={true} smooth={true} offset={-100} duration={1500}>Education</Link></li>
//           <li><Link to="experience" spy={true} smooth={true} offset={-100} duration={1500}>Experience</Link></li>
//           <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={1500}>Skills</Link></li>
//           <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={1500}>Projects</Link></li>
//           <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={1500}>Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;





