import React, { Component } from 'react'
import './About.scss'
export default class About extends Component {
    render() {
        return (
          <div class="about" id="About">
            <h1>About Me</h1>
            <div class="para">
              <p>
                <div>Hello! I'm manjunath, a software engineer.</div>
                <div>
                  I enjoy creating things that live on the internet, whether
                  that be websites, applications, or anything in between. My
                  goal is to improve my knowlege and learn new technologies.
                </div>
                <div>
                  Shortly after graduating from B.N.M.I.T , I joined the
                  engineering team at centura technologies where I work on a
                  wide variety of interesting and meaningful projects on a daily
                  basis.
                </div>
              </p>
            </div>
          </div>
        );
    }
}
