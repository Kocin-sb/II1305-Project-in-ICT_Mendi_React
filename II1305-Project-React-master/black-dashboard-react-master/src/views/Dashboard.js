/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1, // duration
  chartExample2, //Total Energy
  chartExample3,  // Highest Increase
  chartExample4,  //Longest Flow
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData1, setbigChartData1] = React.useState("datad1"); // 1 = duration
  const setBgChartData1 = (name) => {
    setbigChartData1(name);
  };
  const [bigChartData2, setbigChartData2] = React.useState("datat1"); // 2 total energy
  const setBgChartData2 = (name) => {
    setbigChartData2(name);
  };
  const [bigChartData4, setbigChartData4] = React.useState("datal1");  // 4 - longest flow
  const setBgChartData4 = (name) => {
    setbigChartData4(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category"></h5>
                    <CardTitle tag="h2">Duration</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button 
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData1 === "datad1",})}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData1("datad1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          7 SESSIONS
                        </span>
                        <span className="d-block d-sm-none">
                          S 7
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData1 === "datad2",
                        })}
                        onClick={() => setBgChartData1("datad2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          14 Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          S 14
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData1 === "datad3",
                        })}
                        onClick={() => setBgChartData1("datad3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          28 Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          S 28
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData1]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                    <h5 className="card-category"></h5>
                    <CardTitle tag="h3">{" "}Highest Increase</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category"></h5>
                    <CardTitle tag="h3">Longest Flow</CardTitle>
                  </Col>
                  <Col sm ="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData4 === "datal1",
                        })}
                        color="info"
                        id="3"
                        size="sm"
                        onClick={() => setBgChartData4("datal1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          7 SESSIONS
                        </span>
                        <span className="d-block d-sm-none">
                          S 7
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="4"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData4 === "datal2",
                        })}
                        onClick={() => setBgChartData4("datal2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          14 Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          S 14
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4[bigChartData4]}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                <Col className="text-left" sm="6">
                <h5 className="card-category"></h5>
                <CardTitle tag="h3">
                  Total Energy
                </CardTitle>
                </Col>
                <Col>
                <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData2 === "datat1",
                        })}
                        color="info"
                        id="5"
                        size="sm"
                        onClick={() => setBgChartData2("datat1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          7 SESSIONS
                        </span>
                        <span className="d-block d-sm-none">
                          S 7
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="6"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData2 === "datat2",
                        })}
                        onClick={() => setBgChartData2("datat2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          14 Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          S 14
                        </span>
                      </Button>
                    </ButtonGroup>
                     
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2[bigChartData2]}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
    </>
  );
}

export default Dashboard;
