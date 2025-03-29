import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"

import projImg from '../assets/img/projImg/placeholder.svg'
import guessTheLyricsImg from '../assets/img/projImg/thumbnail_guess_the_lyrics.jpg'

export const Projects = () => {
    const projects1 = [
        {
            title: "Guess The Lyrics",
            imgUrl: guessTheLyricsImg,
            link: "https://flashwing-04.github.io/guess_the_lyrics/",
        }, 
        {
            title: "Coming soon ...",
            imgUrl: projImg,
            link: "",
        }, 
        {
            title: "Coming soon ...",
            imgUrl: projImg,
            link: "",
        }, 
        {
            title: "Coming soon ...",
            imgUrl: projImg,
            link: "",
        }, 
    ]

    const projects2 = [
      
    ]

    const projects3 = [
    
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            The following projects showcase a mix of my work in software development, design, and problem-solving. <br/>
                            Each project reflects my approach to overcoming challenges, creating innovative solutions, and optimizing user experiences. I combine technical expertise with creativity to deliver intuitive, functional applications, always focusing on making the user experience seamless and engaging.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Web Dev</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="second">Coming Soon ...</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="third">Coming Soon ...</Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                    {
                                        projects1.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                    {
                                        projects2.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        projects3.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                    </Row>
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}