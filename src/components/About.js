import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export const About = () => {

    const [activeTab, setActiveTab] = useState('experience')
    const openTab = (tab) => {
        setActiveTab(tab);
    }

    return(
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

                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => openTab('experience')}>Experience</p>
                                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>Education</p>
                            </div>

                            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                                <ul>
                                    <li><span>2024 - present
                                        <br/>...</span>
                                        <br/>...
                                        <br/>...
                                    </li>
                                    <li>
                                        <br/><br/><br/><br/>
                                    </li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}