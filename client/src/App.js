import React from "react";

import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectCollect from "./components/ProjectCollect/ProjectCollect";
import Footer from './components/Footer/Footer'
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";


import RouterPublic from './pages/Public/RouterPublic'
import RouterPrivate from './pages/Private/RouterPrivate'
import RouterAuth from './pages/Authentification/RouterAuth'
import NavigationHeader from './components/Navigation/NavigationHeader/NavigationHeader'
import Footer from "./components/Footer/Footer";
import AuthProvider from "./pages/Authentification/AuthProvider";
import Project from "./pages/Private/Project/Project"

function App() {

  return (
    <div className="App">
      <BrowserRouter>  
      <NavigationHeader/>
        <Routes>
          <Route path="/*" element={<RouterPublic />}/>
          <Route path="/profile/*" element={
            <AuthProvider>
              <RouterPrivate/>
            </AuthProvider>
          }/>
          <Route path="/subscribe/*" element={<RouterAuth/>}>
          
            
          </Route>
        <Route path="/project/:id" element={<Project/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
