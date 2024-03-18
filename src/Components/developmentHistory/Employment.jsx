import React from 'react'
import Lists from './Lists'

function Employment() {
  const obj = [
    {
      year: "Sep 2023 - Sep 2023",
      heading: "Web Development",
      subheading: "CodSoft",
      description: "I have successfully completed FRONTEND DEVELOPMENT virtual internship from CODSOFT.  In which i developed few web applications using  HTML , CSS and Javascript."
    },
  ]
  return (
    <section className='intro' id='experience'>
      <div className="container">
        <h2>Experience</h2>
        <Lists obj={obj} />
      </div>
    </section>
  )
}

export default Employment
