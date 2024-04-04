import React from "react";

function Lists({ obj }) {
  return (
    <ul>
      {obj.map((list, ind) => (
        <li key={ind}>
          <div className="year" data-aos="zoom-out" data-aos-duration="1500">
            {list.year}
          </div>
          <strong>
            <p data-aos="zoom-out" data-aos-duration="1500">
              {list.heading} - <span>{list.subheading}</span>
            </p>
          </strong>
          <p data-aos="zoom-out" data-aos-duration="1500">
            {list.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Lists;
