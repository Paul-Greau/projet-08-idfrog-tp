import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllProjects from "./pages/AllProjects/AllProjects";
import Profile from './pages/Profile/Profile'
import Authentification from "./pages/Authentification/Authentification";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectCollect from "./components/ProjectCollect/ProjectCollect";
import Footer from './components/Footer/Footer'
import Navigation from "./components/Navigation/Navigation";
import Head from "./components/Head/Head";
import TopFooter from "./components/TopFooter/TopFooter";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Authentification />} />
        <Route path="/signup" element={<Authentification />} />
      </Routes>

    </div>
  );
}

export default App;
