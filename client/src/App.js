import React from "react";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectCollect from "./components/ProjectCollect/ProjectCollect";
import Footer from './components/Footer/Footer'
import Navigation from "./components/Navigation/Navigation";
import Head from "./components/Head/Head";
import TopFooter from "./components/TopFooter/TopFooter";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Head/>
      <ProjectCard/>
      <ProjectCollect/>
      <TopFooter/>
      <Footer/>
    </div>
  );
}

export default App;
