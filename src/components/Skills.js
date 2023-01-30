import React from "react";
import "../style2.css";
import Carousel from "react-multi-carousel";
import {Col, Container, Row } from "react-bootstrap";
import skill1 from "../assets/img/java-logo-1.png";
import skill2 from "../assets/img/web-development-svgrepo-com.svg";
import skill3 from "../assets/img/programmer-svgrepo-com.svg";
import skill4 from "../assets/img/html-5-svgrepo-com.svg";
import skill5 from "../assets/img/css-3-svgrepo-com.svg";
import skill6 from "../assets/img/js-svgrepo-com.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop:{
            breakpoint:{ max: 4000, min:3000},
            items: 5
        },
        desktop:{
            breakpoint:{ max: 3000, min:1024},
            items: 3
        },
        tablet:{
            breakpoint:{ max: 1024, min:464},
            items: 2
        },
        mobile:{
            breakpoint:{ max: 464, min:0},
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skill1} alt="java"/>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="WD"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt="SE"/>
                                    <h5>Software Engineer</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="HTML5"/>
                                    <h5>Html5</h5>
                                </div>
                                <div className="item">
                                    <img src={skill5} alt="CSS3"/>
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={skill6} alt="JS"/>
                                    <h5>Javascript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}