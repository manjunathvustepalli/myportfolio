import React from 'react';


import Bio from './components/Bio'
import NavBar from './components/NavBar';
import NavBar1 from './components/navBar1';
import About from './components/About'
//import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';
function App() {
  
  return (
    <div>
      {/*
<Bio></Bio> */}
      <NavBar1/>
      <Bio />
      <About/>
    </div>
  );
}

export default App;
