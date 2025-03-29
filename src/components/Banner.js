/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react"

export const Banner = () => {

    // typing Animation
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["undergrad Computer Science student", "aspiring software developer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    function tick() {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/1.5)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <div id="headline">
                            <h1>{'Hi, I\'m an '}<span className="wrap">{text}</span></h1>
                        </div>
                        <p>
                            Hi, I’m Charlotte, a Computer Science student with a deep passion for technology, design, and digital innovation. <br/>
                            During my studies, I have delved into software development, web technologies, and visual computing, exploring how to create efficient, scalable applications and engaging digital experiences through a blend of coding, design, and problem-solving. <br/>
                            This portfolio showcases some of my latest work. Feel free to explore and reach out!
                        </p>
                        <button onClick={() => HTMLFormControlsCollection.log('connect')} className="btn btn-outline-dark">Let's connect </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}