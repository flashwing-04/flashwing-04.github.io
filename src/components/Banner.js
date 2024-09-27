/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

import headerImg from "../assets/img/header_img.png"

export const Banner = () => {

    // for typing Animation
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["undergrad Computer Science Student", "<placeholder for really cool text>"]
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
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="col-big">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <div id="headline">
                        <h1>{'Hi, I\'m an '}<span className="wrap">{text}</span></h1>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        </p>
                        <button onClick={() => HTMLFormControlsCollection.log('connect')}>Let's connect </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="col-small">
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}