import { HashRouter, Route, Routes } from "react-router";
import { AnimatePresence } from "motion/react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Skill from "./sections/Skill";

const App = () => {
  return (
    <HashRouter>
      <div className="text-[#222222] md:flex">
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </HashRouter>
  );
};

export default App;
