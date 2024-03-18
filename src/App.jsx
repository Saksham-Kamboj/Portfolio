import './App.scss'
import Banner from './Components/Banner'
import Intro from './Components/Intro'
import Navigation from './Components/Navigation'
import Resume from './Components/developmentHistory/Resume'
import Employment from './Components/developmentHistory/Employment'
import Skills from './Components/Skills'
import MyProjects from './Components/MyProjects'
// import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navigation />
      <Banner />
      <Intro />
      {/* <hr /> */}
      <Resume />
      <Employment/>
      <Skills/>
      <MyProjects />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
