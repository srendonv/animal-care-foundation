import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import "./HeroSection.css"
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <Container id="herosection" fluid="md" className="hero-container">
            <Row>  
                <Col sm>
                    <Carousel>
                            <Carousel.Item interval={3500}>
                                <img
                                className="d-block w-100"
                                src = {'assets/img/face/img1.jpg'}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h1 className="display-4 text-center hero-title">Animal Care Foundation
                                            </h1>
                                <p className="hero-subtitle">Todo lo que necesitas en un sólo lugar.</p>
                                <div className="d-grid gap-2 text-center col text-center">
                                <Link to="/login">
                                    <Button type="submit" size="lg">
                                        PIDE UNA CITA!
                                    </Button>
                                </Link>
                                </div>  
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={3500}>
                                <img
                                className="d-block w-100"
                                src={'assets/img/face/img2.jpg'}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h1 className="display-4 text-center hero-title">Animal Care Foundation
                                            </h1>
                                <p className="hero-subtitle">Todo lo que necesitas en un sólo lugar.</p>
                                <Link to="/login">
                                    <Button type="submit" size="lg">
                                        PIDE UNA CITA!
                                    </Button>
                                </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={3500}>
                                <img
                                className="d-block w-100"
                                src={'assets/img/face/img3.jpg'}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h1 className="display-4 text-center hero-title">Animal Care Foundation
                                            </h1>
                                <p className="hero-subtitle">Todo lo que necesitas en un sólo lugar.</p>
                                <Link to="/login">
                                    <Button type="submit" size="lg">
                                        PIDE UNA CITA!
                                    </Button>
                                </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={3500}>
                                <img
                                className="d-block w-100"
                                src={'assets/img/face/img4.jpg'}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h1 className="display-4 text-center hero-title">Animal Care Foundation
                                            </h1>
                                <p className="hero-subtitle">Todo lo que necesitas en un sólo lugar.</p>
                                <Link to="/login">
                                    <Button type="submit" size="lg">
                                        PIDE UNA CITA!
                                    </Button>
                                </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={3500}>
                                <img
                                className="d-block w-100"
                                src={'assets/img/face/img5.jpg'}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h1 className="display-4 text-center hero-title">Animal Care Foundation
                                            </h1>
                                <p className="hero-subtitle">Todo lo que necesitas en un sólo lugar.</p>
                                <Link to="/login">
                                    <Button type="submit" size="lg">
                                        PIDE UNA CITA!
                                    </Button>
                                </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={3500}>
                                <img
                                className="d-block w-100"
                                src={'assets/img/face/img6.jpg'}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h1 className="display-4 text-center hero-title">Animal Care Foundation
                                            </h1>
                                <p className="hero-subtitle">Todo lo que necesitas en un sólo lugar.</p>
                                <Link to="/login">
                                    <Button type="submit" size="lg">
                                        PIDE UNA CITA!
                                    </Button>
                                </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>            
                    
                </Col>   
            </Row>          


        </Container>
    )
}

export default HeroSection
