
import { Bar } from "react-chartjs-2";
import React, { Component } from 'react';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
import * as ReactBootStrap from 'react-bootstrap';

class Barchart extends Component {
  render() {
    return (
      <div className="wrapper ">
        <Sidebar></Sidebar>

        <div className="main-panel">
          <Header></Header>
          <div className="content">
          
          <div className="row">
         

            <div className="col-md-6">
              <div className="card">
                <div className="card-header card-header-info">
                  <h3 className="card-title">Area Chart</h3>

                </div>
                <div className="card-body">
                  <Bar
                    data={{
                      labels: [
                        "Tháng 1 ",
                        "Tháng 2",
                        "Tháng 3",
                        "Tháng 4",
                        "Tháng 5",
                        "Tháng 6 ",
                        "Tháng 7",
                        "Tháng 8",
                        "Tháng 9",
                        "Tháng 10",
                        "Tháng 11",
                        "Tháng 12",

                      ],
                      datasets: [
                        {
                          label: "Population (millions)",
                          backgroundColor: [
                            "#3e95cd",
                            "#8e5ea2",
                            "#3cba9f",
                            "#e8c3b9",
                            "#c45850",
                            "#3e95cd",
                            "#8e5ea2",
                            "#3cba9f",
                            "#e8c3b9",
                            "#c45850",
                            "#3e95cd",
                            "#8e5ea2",
                            
                          ],
                          data: [2478, 5267, 734, 784, 433,478, 5267, 734, 7814, 4033]
                        }
                      ]
                    }}
                    options={{
                      legend: { display: false },
                      title: {
                        display: false,
                        text: "Predicted world population (millions) in 2050"
                      }
                    }}
                  />
              </div>
              </div>

            </div>
          </div>
          <Footer></Footer>

        </div>
      </div>
</div>

    );
  }
}

export default Barchart;
