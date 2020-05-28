/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./navbar.scss";
import About from "./About";
import Bio from './Bio';

import Skills from './Skills';
import Education from './Education';
import MediaQuery from "react-responsive";
export default class navBar1 extends Component {
  constructor(props) {
    super(props);
    
    //  this.getResolution = this.getResolution.bind(this);
    this.menuvalue = false;
    this.state={
    menuval:false
  }
  }
  
  
   
  render() {
    return (
      <div class="body">
        <header class="main-header">
          <div class="logo">
            <a href="https://manjunathvustepalli.github.io/myportfolio/">
              <img src="logo.png" alt="logo" height="42" width="42" />
            </a>
          </div>
          <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
            <ul class="nav-links">
              <li class="nav-link">
                <a href="#About">About</a>
              </li>

              <li class="nav-link">
                <a href="#Skills">Skills</a>
              </li>
              <li class="nav-link">
                <a href="#Education">Eduction</a>
              </li>
              <li class="nav-link">
                <a href="#Work">work</a>
              </li>
              <li class="nav-link">
                <a
                  href="https://drive.google.com/file/d/1iavqGH0tS6hCR0l_bO-PkSezwW0O7Q3J/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </MediaQuery>
          <button
            id="menuicon"
            style={{
              backgroundimage: "menu.png",
              backgroundColor: "black",
              borderColor: "black",
            }}
            onClick={() =>
              this.setState((prevState) => ({
                menuval: !prevState.menuval,
              }))
            }
          >
            <img src="menu.png" alt="logo" height="24" width="24" />
          </button>
          {this.state.menuval ? (
            <ul class="nav">
              <button
                onClick={() =>
                  this.setState((prevState) => ({
                    menuval: !prevState.menuval,
                  }))
                }
              >
                <li class="nav-link">
                  <a href="#About">About</a>
                </li>
              </button>
              <button
                onClick={() =>
                  this.setState((prevState) => ({
                    menuval: !prevState.menuval,
                  }))
                }
              >
                <li class="nav-link">
                  <a href="#Skills">Skills</a>
                </li>
              </button>
              <button
                onClick={() =>
                  this.setState((prevState) => ({
                    menuval: !prevState.menuval,
                  }))
                }
              >
                <li class="nav-link">
                  <a href="#Education">Education</a>
                </li>
              </button>
              <button
                onClick={() =>
                  this.setState((prevState) => ({
                    menuval: !prevState.menuval,
                  }))
                }
              >
                <li class="nav-link">
                  <a href="#Work">work</a>
                </li>
              </button>
              <button
                onClick={() =>
                  this.setState((prevState) => ({
                    menuval: !prevState.menuval,
                  }))
                }
              >
                <li class="nav-link">
                  <a
                    href="https://drive.google.com/file/d/1U0Xrua--lKUBWM3jnmoYJN9ySwQXh_QA/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </button>
            </ul>
          ) : (
            ""
          )}
        </header>
      </div>
    );
  }
}
