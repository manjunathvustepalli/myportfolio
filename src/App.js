import React from "react";

import "./App.scss";
import Bio from "./components/Bio";

import NavBar1 from "./components/navBar1";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from './components/Work'
import { colors } from "@material-ui/core";
//import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <NavBar1 />
      <div class="icons">
        <a href="https://www.freecodecamp.org/vmanjunath" target="_blank">
          <img
            src="./download (1).png"
            height="25"
            width="25"
            alt=""
            title="freecodecamp"
          />
        </a>

        <a href="https://github.com/manjunathvustepalli" target="_blank">
          <img
            src="./github.png"
            alt=""
            height="25"
            width="25"
            title="Github"
          />
        </a>

        <a href="https://www.linkedin.com/in/vmanjunath98/" target="_blank">
          <img
            src="./linkedin.png"
            alt=""
            height="25"
            width="25"
            title="Linkedin"
          />
        </a>

        <a href="https://www.hackerrank.com/manjunathvustep1" target="blank">
          <img
            src="./download.png"
            alt=""
            height="25"
            width="25"
            title="HackerRank"
          />
        </a>
        <div class="vertical"></div>
      </div>
      <Bio />
      <About />
      <Skills />
      <Education />
    
      <Work />
    </div>
  );
}

export default App;
