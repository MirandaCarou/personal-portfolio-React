import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
import { CourseCard } from "./CourseCard";
import { WorkCard } from "./WorkCard";
import colorSharp2 from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';
import img from "../assets/img/graduados.jpeg";
import img2 from "../assets/img/160412-classroom-stock.jpg";
import img3 from "../assets/img/matlab.png";
import img4 from "../assets/img/printer-4348148_960_720.jpg";
import img5 from "../assets/img/Logotipo_Universidade_de_Vigo.jpg";

export const Education = () => {
    const education = [
        {
          title: 'University of Vigo',
          description: 'Bachelor of Science in Computer Science',
          imgUrl: img
        },
        {
          title: 'I.E.S Praia Barraña',
          description: 'High School Diploma in Science',
          imgUrl: img2
        }
      ];
    const courses = [
        {
          title: 'University of Vigo / MathWorks',
          description: 'Machine Learning Onramp [ 16 Dec 2021 – 16 Dec 2021 ]',
          imgUrl: img3
        },
        {
          title: 'University of Vigo',
          description: 'Educational robotics, 3D printing and e-textiles [ 1 Oct 2020 – 1 Nov 2020 ]',
          imgUrl: img4
        }
    ];
    const work = [
        {
          title: 'Intern at University of Vigo',
          description: 'Maintenance, updating and proper functioning of the IT systems - [ Oct 2022–Jan 2023 ]',
          imgUrl: img5
        },
    ];
    return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Education and Work Expierence</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Courses</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Work Exp</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <p>My Diploma´s along my life</p>
                          <Row>
                            {
                              education.map((educations, index) => {
                                return (
                                  <EducationCard
                                    key={index}
                                    {...educations}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <p>Courses I have attended to improve my skills</p>
                        <Row>
                            {
                              courses.map((course, index) => {
                                return (
                                  <CourseCard
                                    key={index}
                                    {...course}
                                    />
                                )
                              })
                            }
                          </Row>
                          
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>My work expierence in the Computer Science filed</p>
                          <Row>
                            {
                              work.map((works, index) => {
                                return (
                                  <WorkCard
                                    key={index}
                                    {...works}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
}
