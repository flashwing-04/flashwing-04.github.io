import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import meter4 from "../assets/img/meter4.svg"
import meter5 from "../assets/img/meter5.svg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>With a broad technical skill set and hands-on experience, I have the ability to adapt to various challenges. The following list highlights the skills I’ve mastered so far.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="skill-item">
                                    <img src={meter1} alt=""/>
                                    <h5>Java</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter2} alt=""/>
                                    <h5>Python</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter5} alt=""/>
                                    <h5>Ruby</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter1} alt=""/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter2} alt=""/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter3} alt=""/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter4} alt=""/>
                                    <h5>OpenGL</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter4} alt=""/>
                                    <h5>SQL</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter5} alt=""/>
                                    <h5>Maya</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}