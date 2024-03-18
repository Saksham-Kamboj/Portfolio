import React from 'react'
import Resume from '../assets/Saksham_CV.pdf'

function Intro() {
  return (
    <section className='intro' id='hi'>
      <div className="container">
        <h2>Hi</h2>
        <p>
          I am Saksham Kamboj a passionate and motivated web developer student eager to launch my career in the dynamic world of technology. With a strong foundation in web development and a hunger for continuous learning, I'm excited to contribute my skills to a forward-thinking team.
           I'm a quick learner and  create efficient, scalable, and user-friendly websites that solve real-world problems. Let's work together to bring your ideas to life! 🫠
        </p>
        <div className="button-wrapper">
          <a href={Resume} target='_blank' className="btn">Download Cv</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
