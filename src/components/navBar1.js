/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./navbar.scss";
import About from "./About";
import Bio from './Bio';
import "./React_FrontEnd_Assignment.pdf";
export default class navBar1 extends Component {
  constructor(props) {
    super(props);
    this.menubar = this.menubar.bind(this);
    this.menuvalue = false;
    this.state={
    menuval:true
  }
  }
  
  menubar() {
    this.setState({menuval:false})
  }
  render() {
    return (
      <div class="body">
        <header class="main-header">
          <div class="logo">
            <a href="https://www.w3schools.com">
              <img src="logo.png" alt="logo" height="42" width="42" />
            </a>
          </div>
          {/* <input type="checkbox" class="menu-btn" id="menu-btn" />
              <label for="menu-btn" class="menu-icon">
                <span className="menu-icon_line"></span>
              </label> */}
          <input type="checkbox" class="menu-icon" id="menu-icon" />
          <label htmlFor="menu-icon" class="menubutton">
            <img src="menu.png" alt="logo" height="24" width="24" />
          </label>
          <ul class="nav-links">
            <li class="nav-link">
              <a href="#About">About</a>
            </li>
            <li class="nav-link">
              <a href="#">Skills</a>
            </li>
            <li class="nav-link">
              <a href="#">Education</a>
            </li>
            <li class="nav-link">
              <a href="#">Contact</a>
            </li>
            <li class="nav-link">
              <a
                href="https://drive.google.com/file/d/1U0Xrua--lKUBWM3jnmoYJN9ySwQXh_QA/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
