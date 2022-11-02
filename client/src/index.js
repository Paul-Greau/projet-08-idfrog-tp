import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { globalTheme } from './components/UI/globalTheme/globalTheme'

import App from "./App";

import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  
   <React.StrictMode>
  <ThemeProvider theme={globalTheme}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>
);
