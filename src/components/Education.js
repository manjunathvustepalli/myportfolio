import React, { Component } from 'react'
import Chart from "react-apexcharts";
import './Education.scss'
export default class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            series: [
              {
                name: "percentage",
                data: [89, 87, 62],
                labels: {
                  style: {
                    colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
                  },
                },
              },
            ],
            options: {
              chart: {
                toolbar: {
                  show: false,
                },
                type: "bar",
              },
              plotOptions: {
                bar: {
                  // horizontal: true,
                  //  distributed: true,
                  // barHeight: "100%",
                  // colors:[]
                  // dataLabels:false
                },
              },
              dataLabels: {
                enabled: false,
                // textAnchor: "start",
              },
              xaxis: {
                categories: [10, 12, "B.E"],
                // colors:["#FFFFFF"]
                labels: {
                  style: {
                    colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
                  },
                },
              },
              // fill: {
              //   colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
              // },
            },
          };
        }

      

        render() {
          return (
            <div className="education" id="Education">
              <h1>Education</h1>
              <div className="details">
                <div className="images">
                  <img src="school (3).svg" height="24" width="24" />
                  <img src="school (7).svg" height="24" width="24" />
                  <img src="school (2).svg" height="24" width="24" />
                </div>
                <div className="text">
                  <div className="school">
                  
                    <b>10th standard</b>
                    <p>Montessori High school,kurnool,Andhra Pradesh</p>

                    <small>year of completion:2013</small>
                  </div>

                  <div className="high school">
                    <b>12th standard</b>
                    <p>Narayan Junior college,kurnool,Andhra Pradesh</p>
                    <small>year of completion:2015</small>
                  </div>

                  <div className="college">
                    <b>B.E(Information science and Engineering)</b>
                    <p>Bnm institue of technology,Bangalore,Karnataka </p>
                    <small>year of completion:2019</small>
                  </div>
                </div>
                <div class="chart">
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width={"200px"}
                    height={"250px"}
                  />
                </div>
              </div>
            </div>
          ); }
    }
