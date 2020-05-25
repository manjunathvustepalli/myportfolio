import React, { Component } from 'react'
import './Skills.scss';
export default class Skills extends Component {
    render() {
        return (
          <div class="skill">
            <h1>Skills</h1>
            <div class="skills" id="Skills" >
              <img src="./html-5.svg" alt="HTML" title="Html5" />
              <img src="./css.svg" alt="CSS" title="Css3" />
              <img src="./js.svg" alt="JavaScript" title="JavaScript"  />
              <img src="./angular.svg" alt="Angular" title="Angular"   />
              <img src="./react.svg" alt="ReactJs" title="ReactJs"  />
              <img src="./sass.svg" alt="Sass" title="sass"  />
            </div>
          </div>
        );
    }
}
