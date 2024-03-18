import React from 'react'

function Lists({obj}) {
  return (
    <ul>
      {obj.map((list,ind) => (
        <li key={ind}>
            <div className="year">{list.year}</div>
            <strong>
                <p>{list.heading} - <span>{list.subheading}</span></p>
            </strong>
            <p>{list.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default Lists
