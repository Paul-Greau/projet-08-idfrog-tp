import React from "react";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectCollect from "./components/ProjectCollect/ProjectCollect";
import Footer from './components/Footer/Footer'
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <ProjectCard/>
      <ProjectCollect/>
      <Footer/>
    </div>
  );
}

export default App;
