import React from "react";
// import ReactDOM from "react-dom";
import logo from "../logo.svg";
import "../App.css";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory,
  IndexRoute,
  Switch,
} from "react-router-dom";
import './bio.scss'
//import { createBrowserHistory } from "history";

class  Name extends React.Component{
    render(){
return (
  <div id="Bio">
    <div class="details">
      <div class="name">
        <p>Hi my name is</p>
        <h1>V Manjunath</h1>
        <h2>I build things for web</h2>
      </div>
      <div class="photo">
        <img src="photo.jpg" alt="me" />
      </div>
      <div class="gmail">
        <div class="vertical"></div>
        <p>manjunathvustepalli@gmail.com</p>
      </div>
    </div>
  </div>
);
    }
}
export default Name;
