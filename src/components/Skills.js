import React, { Component } from 'react'
import './Skills.scss';
export default class Skills extends Component {
    render() {
        return (
          <div class="skill" id="Skills">
            <h1>Skills</h1>
            <div class="skills">
              <img src="./html-5.svg" alt="HTML" title="Html5" />
              <img src="./css.svg" alt="CSS" title="Css3" />
              <img src="./js.svg" alt="JavaScript" title="JavaScript" />
              <img src="./angular.svg" alt="Angular" title="Angular" />
              <img src="./react.svg" alt="ReactJs" title="ReactJs" />
              <img src="./sass.svg" alt="Sass" title="sass" />
              <img src="Git.png" title="version control"/>
            </div>
          </div>
        );
    }
}
