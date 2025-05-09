import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NewProject from "./components/pages/Newproject";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";



function App() {
  return (
    <Router>
      <NavBar />

      
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/newproject" element={<NewProject />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/projects/:id" element={<Project />}></Route>
        </Routes>
      </Container>
      
      <Footer />
    </Router>
  );
}

export default App;
