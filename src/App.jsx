import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Skill from "./sections/Skill";

const App = () => {
  return (
    <BrowserRouter>
      <div className="text-[#222222] md:flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
