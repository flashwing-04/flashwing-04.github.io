import { Nav, Navbar, Container } from "react-bootstrap";

import logo from '../assets/img/logos/personal_logo.png'
import navIcon1 from '../assets/img/logos/github_logo.png'
import navIcon2 from '../assets/img/logos/linkedIn_logo.png'


export const NavBar = () => {
    return(
        <Navbar expand="lg" fixed="top" bg="light" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className="img-fluid"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" >
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='navbar-link'>.home()</Nav.Link>
                        <Nav.Link href="#about" className='navbar-link'>.about()</Nav.Link>
                        <Nav.Link href="#skills" className='navbar-link'>.skills()</Nav.Link>
                        <Nav.Link href="#projects" className='navbar-link'>.projects()</Nav.Link>
                    </Nav>
                    <span className="navbar-text d-flex justify-content-end">
                        <div className="social-icon">
                            <a href="https://github.com/flashwing-04"><img src={navIcon1} alt="Github Logo" className="img-fluid"/></a>
                            <a href="https://www.linkedin.com/in/charlotte-john-349613317/"><img src={navIcon2} alt="LinkedIn Logo" className="img-fluid"/></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}