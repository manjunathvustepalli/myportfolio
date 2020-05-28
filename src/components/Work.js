import React, { Component } from "react";
import "./Works.scss";
export default class Work extends Component {
  render() {
    return (
      <div className="work" id="Work">
        <h1>Work</h1>

        <div class="hvrbox">
          <img
            src="Screenshot (20).png"
            alt="CoronaTracker"
            class="hvrbox-layer_bottom"
          />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <a
                href="https://github.com/manjunathvustepalli/coronatracker"
                target="_blank"
              >
                <img
                  src="./github.svg"
                  alt=""
                  height="55"
                  width="75"
                  title="Github"
                />
              </a>
              <a
                href="https://manjunathvustepalli.github.io/coronatracker/"
                target="_blank"
              >
                <button>Live demo</button>
              </a>
            </div>
          </div>
          <div className="details">
            <b>
              Angular application for tracking the number of covid-19 cases in a
              visualized format for both worldwide and countrywise.
            </b>
            <p>Angular&nbsp;&nbsp;&nbsp;Chart.js&nbsp;&nbsp;&nbsp;Bootstrap</p>
          </div>
        </div>

        <div class="hvrbox">
          <img src="news.jpg" alt="News app" class="hvrbox-layer_bottom" />
          <div class="hvrbox-layer_top">
            <div class="hvrbox-text">
              <a
                href="https://github.com/manjunathvustepalli/React-Native-NewsApp"
                target="_blank"
              >
                <img
                  src="./github.svg"
                  alt=""
                  height="55"
                  width="75"
                  title="Github"
                />
              </a>
            </div>
          </div>
          <div className="details">
            <b>
              A mobile application for news in different cateogries live and to
              share news.
            </b>
            <p>
              React Native&nbsp;&nbsp;&nbsp;NativeBase&nbsp;&nbsp;&nbsp;expo
            </p>
          </div>
        </div>
      </div>
    );
  }
}
