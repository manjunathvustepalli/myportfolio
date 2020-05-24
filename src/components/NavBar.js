import React, { Component } from "react";
import "../App.css";
import Bio from './Bio';
import About from './About'
export default class NavBar extends Component {
  render() {
    return (
      <div class="NavBar">
        <div class="NavBarlogo">
          <a href="https://www.w3schools.com">
            <img
              //className="App-logo"
              src="tool (1).png"
              alt="logo"
              height="42"
              width="42"
            />
          </a>
        </div>
        <div class="NavBaroptions">
          <nav>
            <ul>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Bio">Skills</a>
              </li>
              <li>
                <a href="#Bio">Education</a>
              </li>
              <li>
                <a href="#Bio">Contact</a>
              </li>
              <li>
                <a href="#Bio">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
