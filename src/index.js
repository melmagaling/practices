import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";
import App from "./App";
  
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));