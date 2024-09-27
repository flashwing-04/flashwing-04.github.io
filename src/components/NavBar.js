import { Nav, Navbar, Container } from "react-bootstrap";

import logo from '../assets/img/personal_logo.png'
import navIcon1 from '../assets/img/github_logo.png'
import navIcon2 from '../assets/img/linkedIn_logo.png'


export const NavBar = () => {
    return(
    <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo"/>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className='navbar-link'>.home()</Nav.Link>
                    <Nav.Link href="#about" className='navbar-link'>.about()</Nav.Link>
                    <Nav.Link href="#skills" className='navbar-link'>.skills()</Nav.Link>
                    <Nav.Link href="#projects" className='navbar-link'>.projects()</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://github.com/flashwing-04"><img src={navIcon1} alt="Github Logo"/></a>
                        <a href="https://www.linkedin.com/in/charlotte-john-349613317/"><img src={navIcon2} alt="LinkedIn Logo"/></a>
                    </div>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}