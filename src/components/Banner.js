import React from "react"
import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle} from "react-bootstrap-icons"
import headerPhoto from "../assets/img/sinking with violin(1).png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Software Developer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random * 100);

    useEffect( () => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        
        if(!isDeleting && updatedText === fullText)  {
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12}  md={6} xl={5} >
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{'Hi I´m Miranda '}<span className="wrap">{text}</span></h1>
                        <p>
                            I´m working hard to become a great engineer. Web and Software design are my two big passions and I am never tired of learning.
                        </p>
                        <button onClick={() => console.log('connect')}>Let´s connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col md={6} xl={5} >
                        <img src={headerPhoto} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}