import  { useState } from "react";
import { tabLink, tabData } from "./Data.js";

function MyProjects() {
  const [active, setActive] = useState(0);
  const [tabState, setTabState] = useState(
    tabData.filter((data) => data.type === tabLink[0])
  );

  const handleTab = (index, link) => {
    setActive(index);
    const temp = tabData.filter((data) => data.type === link);
    setTabState(temp);
  };

  return (
    <section className="my-project" id="projects">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1500">
          My Projects
        </h2>
        <div className="tabs" data-aos="fade-up" data-aos-duration="1500">
          {tabLink.map((link, index) => (
            <div
              onClick={() => handleTab(index, link)}
              key={index}
              className={`tab-item ${index === active ? "active" : ""}`}
            >
              {link}
            </div>
          ))}
        </div>
        <div className="tab-container">
          {tabState.map((item, index) => (
            <div key={index} className="tab-content">
              <div className="image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                />
              </div>
              <div
                className="tab-text-content"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span>USED STACK:</span>
                <div className="tags">
                  {item.tags.map((tag, ind) => (
                    <span key={`tag-${ind}`}>{tag}</span>
                  ))}
                </div>
                <div className="source">
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.source}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
