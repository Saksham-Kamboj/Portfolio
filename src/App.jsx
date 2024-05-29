import "./App.scss";
import Banner from "./Components/Banner";
import Intro from "./Components/Intro";
import Navigation from "./Components/Navigation";
import Resume from "./Components/developmentHistory/Resume";
import Employment from "./Components/developmentHistory/Employment";
import Skills from "./Components/Skills";
import MyProjects from "./Components/MyProjects";
// import Testimonial from './Components/Testimonial'
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import InitAOS from "./Components/animation/aos";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      {loading ? (
        <HashLoader
          color={"#E5540A"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <>
          <Navigation />
          <Banner />
          <Intro />
          {/* <hr /> */}
          <Resume />
          <Employment />
          <Skills />
          <MyProjects />
          {/* <Testimonial /> */}
          <Contact />
          <Footer />
          <InitAOS />
        </>
      )}
    </div>
  );
}

export default App;
