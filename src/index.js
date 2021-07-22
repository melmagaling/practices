import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import App from "./App";

console.log('SUPERMAN', process.env.REACT_APP_NAME);
  
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));