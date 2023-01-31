import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
import colorSharp2 from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';
import img from "../assets/img/pillars-of-creation-21-256x256.jpg";

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
          imgUrl: img
        }
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
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}
