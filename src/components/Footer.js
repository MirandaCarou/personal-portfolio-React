import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIconGithub from '../assets/img/icons8-github.svg';
import navIconLinkedLn from '../assets/img/icons8-linkedin1.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/MirandaCarou"><img src={navIconGithub} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/mcarou/?locale=en_US"><img src={navIconLinkedLn} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}