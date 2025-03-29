import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';

export const About = () => {
    return (
        <section className='about' id='about'>
            <Container>
                <Row>
                    <Col>
                        <div className='about-bx'>
                            <div className='about-head'>
                                <h2>About Me</h2>
                                <p> 
                                    Whether it’s solving complex problems or crafting sleek, user-friendly designs, I’m always looking for ways to improve and innovate. <br/>
                                    With a focus on software development and web technologies, I enjoy turning ideas into practical solutions that are both functional and engaging. <br/>
                                    I thrive on learning new tools and techniques, always pushing myself to evolve.
                                </p>
                            </div>

                            <Tabs defaultActiveKey="experience" id="about-tabs" className="mb-3">
                                <Tab eventKey="experience" title="Experience">
                                    <ul>
                                        <li><span>August 2024 - present
                                            <br/>Student Assistant</span>
                                            <br/>HTW: University of Applied Sciences, Berlin Germany
                                            <ul>
                                                <li>Assisted in the development and maintenance of the Modulehandbook web application. You can check it out <a href='https://module-handbook.f4.htw-berlin.de/' target='blank'><span>here</span></a></li>
                                                <li>Worked on technical tasks, including troubleshooting server issues, deploying updates, and managing system configurations</li>
                                                <li>Took on a variety of general tasks, from helping with project coordination to assisting with technical and administrative needs</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </Tab>

                                <Tab eventKey="education" title="Education">
                                    <ul>
                                        <li><span>2023 - present
                                            <br/>HTW: University of Applied Sciences, Berlin Germany</span>
                                            <br/><a href='https://imi-bachelor.htw-berlin.de/studium/' target='blank'>Major: International Media and Computing</a>
                                            <br/>Graduation expected: B.Sc. Summer 2026
                                        </li>
                                        <li><span>2014 - 2023
                                            <br/>Immanuel-Kant-Gymnasium, Berlin Germany</span>
                                            <br/>A-Levels
                                            <br/>AP Classes: Math, English
                                        </li>
                                    </ul>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
