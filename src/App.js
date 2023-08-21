import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"


// https://youtu.be/fKJlHy81JCE?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO
function App() {
  return (

    <Router>  
      
    <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element= {< Home />}/>
          <Route path="/projects" element= {< Projects />}/>
          <Route path="/company" element= {< Company />}/>
          <Route path="/contact" element= {< Contact />}/>
          <Route path="/newproject" element= {< NewProject />}/>
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}
export default App;
