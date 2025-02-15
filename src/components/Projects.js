import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"

import projImg from '../assets/img/projImg/placeholder.svg'

export const Projects = () => {
    const projects1 = [
        {
            title: "Title",
            description: ".........",
            imgUrl: projImg,
            link: "",
        }, 
        {
            title: "Title",
            description: ".........",
            imgUrl: projImg,
            link: "",
        }, 
        {
            title: "Title",
            description: ".........",
            imgUrl: projImg,
            link: "",
        }, 
        {
            title: "Title",
            description: ".........",
            imgUrl: projImg,
            link: "",
        }, 
    ]

    const projects2 = [
      {
          title: "Title",
          description: ".........",
          imgUrl: projImg,
          link: "",
      }, 
      {
          title: "Title",
          description: ".........",
          imgUrl: projImg,
          link: "",
      }, 
      {
          title: "Title",
          description: ".........",
          imgUrl: projImg,
          link: "",
      }, 
      {
          title: "Title",
          description: ".........",
          imgUrl: projImg,
          link: "",
      }, 
  ]

  const projects3 = [
    {
        title: "Title",
        description: ".........",
        imgUrl: projImg,
        link: "",
    }, 
    {
        title: "Title",
        description: ".........",
        imgUrl: projImg,
        link: "",
    }, 
]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
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