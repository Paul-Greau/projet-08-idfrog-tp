import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllProjects from "./pages/AllProjects/AllProjects";
import Profile from './pages/Profile/Profile'
import Authentification from "./pages/Authentification/Authentification";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Authentification />} />
        <Route path="/signup" element={<Authentification />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

    </div>
  );
}

export default App;
