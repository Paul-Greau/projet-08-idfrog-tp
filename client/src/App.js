import React from "react";

import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectCollect from "./components/ProjectCollect/ProjectCollect";
import Footer from './components/Footer/Footer'
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";



function App() {
  return (
    <div className="App">
      <Navigation/>
      <NotFound/>
      <Footer/>

    </div>
  );
}

export default App;
