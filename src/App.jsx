import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Course from "./pages/Course";
import Faculty from "./pages/Faculty";
import Placements from "./pages/Placements";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
