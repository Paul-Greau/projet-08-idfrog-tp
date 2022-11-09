import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RouterPublic from './pages/Public/RouterPublic'
import RouterPrivate from './pages/Private/RouterPrivate'
import RouterAuth from './pages/Authentification/RouterAuth'
import NavigationHeader from './components/Navigation/NavigationHeader/NavigationHeader'
import Footer from "./components/Footer/Footer";
import AuthProvider from "./pages/Authentification/AuthProvider";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails"

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
        <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
