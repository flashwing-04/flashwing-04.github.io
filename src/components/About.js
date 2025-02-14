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
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            <Tabs defaultActiveKey="experience" id="about-tabs" className="mb-3">
                                <Tab eventKey="experience" title="Experience">
                                    <ul>
                                        <li><span>2024 - present
                                            <br/>...</span>
                                            <br/>...
                                            <br/>...
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
