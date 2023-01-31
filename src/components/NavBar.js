import React from "react";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import navIconGithub from '../assets/img/icons8-github.svg';
import navIconLinkedLn from '../assets/img/icons8-linkedin1.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState('false');

    useEffect( () => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    } , [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> 
            <Container>
                <Navbar.Brand href="#home">Miranda</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/MirandaCarou"><img src={navIconGithub} alt=""/></a>
                            <a href="https://www.linkedin.com/in/mcarou/?locale=en_US"><img src={navIconLinkedLn} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let´s Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}