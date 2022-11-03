import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { globalTheme } from './components/UI/globalTheme/globalTheme'

import App from "./App";

import "./assets/styles/index.scss";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  

  <ThemeProvider theme={globalTheme}>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </ThemeProvider>

);
